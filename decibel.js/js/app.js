// Variabili globali
let audioContext;
let analyser;
let microphone;
let isRecording = false;
let dataArray;
let noiseChart;
let minDecibels = 100;
let maxDecibels = 0;
let totalDecibels = 0;
let samplesCount = 0;
let timeData = [];

// Riferimenti DOM
const dbValue = document.getElementById('db-value');
const needle = document.getElementById('needle');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const saveBtn = document.getElementById('save-btn');
const currentLevel = document.getElementById('current-level');
const minLevel = document.getElementById('min-level');
const maxLevel = document.getElementById('max-level');
const avgLevel = document.getElementById('avg-level');
const chartCanvas = document.getElementById('noise-chart');

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    initChart();
    setupEventListeners();
});

// Inizializza il grafico
function initChart() {
    const ctx = chartCanvas.getContext('2d');
    noiseChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Livello Decibel (dB)',
                data: [],
                borderColor: '#4a6eb5',
                backgroundColor: 'rgba(74, 110, 181, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tempo (s)'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 120,
                    title: {
                        display: true,
                        text: 'Decibel (dB)'
                    }
                }
            },
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y.toFixed(1)} dB`;
                        }
                    }
                }
            }
        }
    });
}

// Aggiungi event listener ai pulsanti
function setupEventListeners() {
    startBtn.addEventListener('click', startRecording);
    stopBtn.addEventListener('click', stopRecording);
    saveBtn.addEventListener('click', saveData);
}

// Avvia la registrazione dal microfono
async function startRecording() {
    try {
        // Richiedi l'accesso al microfono
        const stream = await navigator.mediaDevices.getUserMedia({ 
            audio: { 
                echoCancellation: false,
                noiseSuppression: false,
                autoGainControl: false
            } 
        });
        
        // Inizializza l'audio context
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        
        // Configura l'analizzatore
        microphone.connect(analyser);
        analyser.fftSize = 1024;
        analyser.smoothingTimeConstant = 0.8;
        analyser.minDecibels = -90;
        analyser.maxDecibels = -10;
        
        // Crea buffer per l'analisi
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        
        // Abilita/disabilita i pulsanti
        startBtn.disabled = true;
        stopBtn.disabled = false;
        
        // Resetta le statistiche
        minDecibels = 100;
        maxDecibels = 0;
        totalDecibels = 0;
        samplesCount = 0;
        timeData = [];
        
        // Resetta il grafico
        noiseChart.data.labels = [];
        noiseChart.data.datasets[0].data = [];
        noiseChart.update();
        
        // Inizia l'analisi
        isRecording = true;
        requestAnimationFrame(analyzeSound);
        
    } catch (err) {
        console.error('Errore nell\'accesso al microfono:', err);
        alert('Impossibile accedere al microfono. Assicurati di aver concesso i permessi necessari.');
    }
}

// Stoppa la registrazione
function stopRecording() {
    if (isRecording) {
        isRecording = false;
        
        // Disconnetti il microfono
        if (microphone) {
            microphone.disconnect();
            microphone = null;
        }
        
        // Chiudi l'audio context
        if (audioContext) {
            audioContext.close();
            audioContext = null;
        }
        
        // Abilita/disabilita i pulsanti
        startBtn.disabled = false;
        stopBtn.disabled = true;
        saveBtn.disabled = false;
    }
}

// Analizza il suono e aggiorna l'UI
function analyzeSound() {
    if (!isRecording) return;
    
    // Ottieni i dati audio
    analyser.getByteFrequencyData(dataArray);
    
    // Calcola il volume medio
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
    }
    const average = sum / dataArray.length;
    
    // Converti in decibel (approssimazione)
    // Nota: questa è un'approssimazione semplificata, non una misurazione scientifica precisa
    let decibels = 0;
    if (average > 0) {
        // Scala il valore da 0-255 a un intervallo di decibel ragionevole (30-120 dB)
        decibels = 30 + (average / 255) * 90;
    }
    
    // Aggiorna le statistiche
    if (decibels > 0) {
        minDecibels = Math.min(minDecibels, decibels);
        maxDecibels = Math.max(maxDecibels, decibels);
        totalDecibels += decibels;
        samplesCount++;
    }
    
    // Calcola la media
    const avgDecibels = samplesCount > 0 ? totalDecibels / samplesCount : 0;
    
    // Aggiorna l'UI
    updateUI(decibels, minDecibels, maxDecibels, avgDecibels);
    
    // Aggiorna il grafico ogni ~500ms
    if (samplesCount % 15 === 0) {
        updateChart(decibels);
    }
    
    // Continua l'analisi
    requestAnimationFrame(analyzeSound);
}

// Aggiorna l'interfaccia con i nuovi valori
function updateUI(current, min, max, avg) {
    // Aggiorna i valori numerici
    currentLevel.textContent = `${current.toFixed(1)} dB`;
    minLevel.textContent = `${min.toFixed(1)} dB`;
    maxLevel.textContent = `${max.toFixed(1)} dB`;
    avgLevel.textContent = `${avg.toFixed(1)} dB`;
    
    // Aggiorna il misuratore
    dbValue.textContent = `${current.toFixed(1)} dB`;
    
    // Calcola la rotazione dell'ago (da -90° a +90°)
    const degrees = -90 + (current / 120) * 180;
    needle.style.transform = `rotate(${degrees}deg)`;
    
    // Cambia colore in base al livello
    let meterColor;
    if (current < 50) {
        meterColor = 'var(--quiet-color)';
    } else if (current < 70) {
        meterColor = 'var(--moderate-color)';
    } else if (current < 90) {
        meterColor = 'var(--loud-color)';
    } else if (current < 110) {
        meterColor = 'var(--very-loud-color)';
    } else {
        meterColor = 'var(--dangerous-color)';
    }
    
    // Applica il colore all'ago
    needle.style.backgroundColor = meterColor;
}

// Aggiorna il grafico con i nuovi dati
function updateChart(value) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    
    // Memorizza i dati per l'esportazione
    timeData.push({
        time: timeStr,
        decibel: value.toFixed(1)
    });
    
    // Aggiungi punto al grafico
    noiseChart.data.labels.push(timeStr);
    noiseChart.data.datasets[0].data.push(value);
    
    // Limita il numero di punti visualizzati (ultimi 60)
    if (noiseChart.data.labels.length > 60) {
        noiseChart.data.labels.shift();
        noiseChart.data.datasets[0].data.shift();
    }
    
    // Aggiorna il grafico
    noiseChart.update();
}

// Salva i dati in un file CSV
function saveData() {
    if (timeData.length === 0) {
        alert('Nessun dato da salvare.');
        return;
    }
    
    // Creazione header del CSV
    let csvContent = 'data:text/csv;charset=utf-8,Timestamp,Decibel\n';
    
    // Aggiungi righe di dati
    timeData.forEach(item => {
        csvContent += `${item.time},${item.decibel}\n`;
    });
    
    // Creazione del file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    
    // Configura il link
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `misurazione-decibel-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    
    // Simula il click
    link.click();
    
    // Rimuovi il link
    document.body.removeChild(link);
    
    // Disabilita il pulsante di salvataggio
    saveBtn.disabled = true;
}
