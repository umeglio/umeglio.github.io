# Guida di Installazione

## Prerequisiti

- Git (per clonare il repository)
- Un editor di testo (VS Code, Sublime Text, etc.)
- Browser moderno (Chrome, Firefox, Safari, Edge)

## Passi di Installazione

### 1. Clonare il Repository

```bash
git clone https://github.com/umeglio/umeglio.github.io.git
cd umeglio.github.io
```

### 2. Visualizzare il Sito Localmente

Puoi visualizzare il sito aprendolo direttamente nel browser:

#### Opzione A: Apertura Diretta
1. Naviga nella cartella del progetto
2. Fai doppio clic su `index.html` o `index_en.html`

#### Opzione B: Con un Server Locale (Consigliato)

Se disponi di Python:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Quindi accedi a `http://localhost:8000` nel tuo browser.

Se disponi di Node.js:
```bash
npx http-server
```

### 3. File Principali

- `index.html` - Versione italiana del sito
- `index_en.html` - Versione inglese del sito
- `avatar.png` - Immagine del profilo
- `decibel.js/` - Directory con le librerie utilizzate

## Struttura delle Directory

```
umeglio.github.io/
├── index.html                    # Sito principale (IT)
├── index_en.html                 # Sito principale (EN)
├── README.md                      # Documentazione principale (IT)
├── README_en.md                   # Documentazione principale (EN)
├── avatar.png                     # Immagine del profilo
├── googlea91d977fe5a5a8e8.html   # Verifica Google
├── docs/
│   ├── it/                        # Documentazione italiana
│   │   ├── INSTALLAZIONE.md       # Questo file
│   │   ├── UTILIZZO.md
│   │   ├── CONTRIBUIRE.md
│   │   └── FAQ.md
│   └── en/                        # Documentazione inglese
│       ├── INSTALLATION.md
│       ├── USAGE.md
│       ├── CONTRIBUTING.md
│       └── FAQ.md
└── decibel.js/                    # Libreria di utilità
```

## Risoluzione dei Problemi

### Il sito non si carica correttamente
- Assicurati di essere nella directory corretta
- Prova con un browser diverso
- Svuota la cache del browser (Ctrl+Shift+Canc)

### Le immagini non si caricano
- Verifica che il file `avatar.png` sia presente nella cartella principale
- Controlla i percorsi relativi nel file HTML

## Prossimi Passi

Una volta che il sito è accessibile localmente, puoi:
- Consultare la [Guida di Utilizzo](UTILIZZO.md) per modificare il contenuto
- Leggere la [Guida per i Contribuenti](CONTRIBUIRE.md) se desideri contribuire
- Controllare le [Domande Frequenti](FAQ.md) per risposte comuni
