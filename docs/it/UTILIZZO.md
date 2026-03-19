# Guida di Utilizzo

## Accesso al Sito

### Online

Il sito è pubblicato e accessibile all'indirizzo:
**https://umeglio.github.io**

### Localmente

Per modifiche e sviluppo locale, consulta la [Guida di Installazione](INSTALLAZIONE.md).

## Modificare il Contenuto

### Modifica del Profilo

Il contenuto principale si trova nei file:
- `index.html` - Versione italiana
- `index_en.html` - Versione inglese

### Sezioni Principali

#### 1. Header e Introduzione
Modifica la sezione di benvenuto nel tag `<header>` per aggiornare l'introduzione personale.

#### 2. Sezione "Chi Sono"
Aggiorna la biografia nella sezione `#about` di entrambi i file HTML.

#### 3. Competenze Tecniche
Le competenze sono visualizzate con barre di progresso. Per aggiungere una nuova competenza:
1. Localizza la sezione `#skills`
2. Aggiungi un nuovo elemento `<div class="skill-item">`
3. Imposta il nome e il valore della competenza

Esempio:
```html
<div class="skill-item">
    <span class="skill-name">Nuova Competenza</span>
    <div class="skill-bar">
        <div class="skill-level" style="width: 85%;">85%</div>
    </div>
</div>
```

#### 4. Esperienza Professionale
La timeline dell'esperienza si trova nella sezione `#experience`. Aggiungi nuove voci nel formato:
```html
<div class="timeline-item">
    <div class="timeline-date">Anno - Anno</div>
    <div class="timeline-content">
        <h3>Posizione</h3>
        <p>Descrizione dell'esperienza</p>
    </div>
</div>
```

#### 5. Progetti
I progetti sono visualizzati nella sezione `#projects`. Per aggiungere un nuovo progetto:
```html
<div class="project-card">
    <h3>Nome Progetto</h3>
    <p>Descrizione del progetto</p>
    <a href="link-al-progetto" class="project-link">Vedi Progetto</a>
</div>
```

#### 6. Informazioni di Contatto
Modifica la sezione `#contact` per aggiornare i tuoi dettagli di contatto.

## Modifica dell'Immagine del Profilo

1. Sostituisci il file `avatar.png` con la tua nuova immagine
2. Assicurati che il nome del file sia `avatar.png`
3. L'immagine deve trovarsi nella directory principale del progetto

## Pubblicare le Modifiche

Le modifiche vengono pubblicate automaticamente quando fai push a GitHub:

```bash
git add .
git commit -m "Descrizione delle modifiche"
git push origin main
```

Il sito verrà aggiornato entro pochi minuti.

## Struttura dei File

### File HTML
- **index.html**: Versione italiana completa con CSS e JavaScript inline
- **index_en.html**: Versione inglese con la stessa struttura

### File di Utilità
- **avatar.png**: Immagine del profilo
- **decibel.js/**: Libreria di utilità per animazioni e interazioni

### Configurazione
- **googlea91d977fe5a5a8e8.html**: Verifica della proprietà per Google Search Console

## Versioni Bilingue

Il sito supporta entrambe le lingue:
- **index.html**: Versione italiana (IT)
- **index_en.html**: Versione inglese (EN)

Per mantenere la coerenza, assicurati di aggiornare entrambe le versioni quando modifichi il contenuto.

## Stilizzazione Personalizzata

Il CSS è incluso nei file HTML. Per modificare lo stile:
1. Locati la sezione `<style>` nel file HTML
2. Modifica le proprietà CSS desiderate
3. Salva e ricarica il browser per vedere le modifiche

## Anteprima delle Modifiche

1. Salva le modifiche nel file HTML
2. Apri il file nel browser o ricarica la pagina (Ctrl+F5)
3. Verifica le modifiche in diverse risoluzioni (desktop, tablet, mobile)

## Supporto per Versioni Bilingui

Se desideri aggiungere una nuova sezione:
1. Aggiungi il contenuto in italiano in `index.html`
2. Aggiungi il contenuto corrispondente in inglese in `index_en.html`
3. Assicurati che la struttura HTML sia identica
4. Usa le stesse classi CSS per il styling

## Prossimi Passi

- Consulta la [Guida di Installazione](INSTALLAZIONE.md) per problemi di configurazione
- Leggi la [Guida per i Contribuenti](CONTRIBUIRE.md) se desideri apportare miglioramenti
- Controlla le [FAQ](FAQ.md) per domande frequenti
