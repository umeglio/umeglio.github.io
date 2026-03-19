# Guida per i Contribuenti

Grazie per l'interesse nel contribuire al progetto! Questa guida illustra come partecipare allo sviluppo.

## Come Contribuire

### Segnalazione di Bug

Se trovi un bug, per favore:

1. Controlla se il bug è già stato segnalato nelle [Issues](https://github.com/umeglio/umeglio.github.io/issues)
2. Se non trovato, apri una nuova issue con:
   - **Titolo**: Descrizione breve del bug
   - **Descrizione**: Dettagli del problema, passi per riprodurlo, comportamento atteso vs attuale
   - **Browser**: Specifica quale browser e versione utilizzi

### Suggerimenti e Miglioramenti

Per suggerire un miglioramento:

1. Apri una nuova issue con il tag `enhancement`
2. Descrivi chiaramente:
   - Qual è il problema che risolverebbe
   - Come dovrebbe funzionare
   - Possibili alternative

### Contribuzione di Codice

#### Passaggi Iniziali

1. **Effettua un Fork del Repository**
   ```bash
   # Su GitHub, clicca il pulsante "Fork"
   ```

2. **Clona il tuo Fork**
   ```bash
   git clone https://github.com/TUO-USERNAME/umeglio.github.io.git
   cd umeglio.github.io
   ```

3. **Crea un Branch di Feature**
   ```bash
   git checkout -b feature/descrizione-della-feature
   # o per bug fix:
   git checkout -b bugfix/descrizione-del-bug
   ```

#### Regole di Codice

- **Mantieni la Semplicità**: Il progetto intenzionalmente non usa framework per mantenere semplicità
- **Senza Dipendenze**: Non aggiungere librerie o framework esterni senza discussione
- **Codice Pulito**: Assicurati che il codice sia leggibile e ben commentato dove necessario
- **Responsive Design**: Testa le modifiche su desktop, tablet e mobile

#### Modifiche Richieste

1. **Aggiornamenti Bilingui**: Se modifichi il contenuto, aggiorna sia `index.html` che `index_en.html`
2. **Testing**: Testa le modifiche nei browser principali (Chrome, Firefox, Safari, Edge)
3. **Performance**: Assicurati che le modifiche non rallentino il caricamento del sito
4. **Accessibilità**: Mantieni il sito conforme alle linee guida WCAG

#### Commit Message

Usa messaggi di commit chiari e descrittivi:

```
Formato: [Tipo] Descrizione breve

Tipi:
- feat: Nuova feature
- fix: Correzione di bug
- docs: Modifiche alla documentazione
- style: Cambiamenti di formattazione
- refactor: Refactoring senza cambiamento di funzionalità
- test: Aggiunta di test
- chore: Modifiche di build, dipendenze, etc.

Esempio:
fix: Correggi allineamento della barra di competenze su mobile
docs: Aggiorna guida di installazione
```

#### Push e Pull Request

1. **Push del Branch**
   ```bash
   git push origin feature/descrizione-della-feature
   ```

2. **Crea una Pull Request**
   - Vai su GitHub e clicca "Compare & pull request"
   - Titolo: Descrizione breve della modifica
   - Descrizione: Dettagli di cosa è stato modificato e perché
   - Se risolve un issue, scrivi `Closes #numero-issue`

3. **Rispondi ai Feedback**
   - Attendi la review
   - Apporta le modifiche richieste
   - Spingile al tuo branch (si aggiorneranno automaticamente nella PR)

### Guida di Stile

#### HTML
```html
<!-- Usa indentazione coerente (2 spazi) -->
<div class="section">
  <h2>Titolo</h2>
  <p>Contenuto</p>
</div>
```

#### CSS
```css
/* Usa convenzioni di naming chiare */
.class-name {
  property: value;
}

/* Commenti per sezioni importanti */
/* Hero Section */
.hero {
  /* Stile hero section */
}
```

#### JavaScript
```javascript
// Usa nomenclatura camelCase per variabili e funzioni
const myVariable = 'value';

function myFunction() {
  // Commenta la logica complessa
}
```

## Area di Contribuzione

### Aree Aperte

- Miglioramenti del design
- Ottimizzazioni di performance
- Miglioramenti di accessibilità
- Traduzioni aggiuntive
- Correzioni di bug
- Miglioramenti alla documentazione

### Aree Controllate

- Aggiunta di framework o librerie grandi
- Cambio architetturale significativo
- Dati personali dell'autore

Per questi argomenti, apri una issue di discussione prima di fare un PR.

## Processo di Review

1. Il maintainer esaminerà la tua PR
2. Potrebbe chiedere modifiche o chiarimenti
3. Una volta approvata, sarà mergiata
4. Ringraziamenti pubblici sul profilo GitHub!

## Domande?

- Apri una issue per domande generali
- Contatta direttamente: umberto.meglio@sipos.it

## Codice di Condotta

Sii rispettoso e costruttivo. Questo è uno spazio accogliente per tutti.

---

Grazie per aver considerato di contribuire! 🚀
