# Installation Guide

## Prerequisites

- Git (to clone the repository)
- A text editor (VS Code, Sublime Text, etc.)
- Modern browser (Chrome, Firefox, Safari, Edge)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/umeglio/umeglio.github.io.git
cd umeglio.github.io
```

### 2. View the Website Locally

You can view the website by opening it directly in your browser:

#### Option A: Direct Opening
1. Navigate to the project folder
2. Double-click `index.html` or `index_en.html`

#### Option B: With a Local Server (Recommended)

If you have Python:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Then access `http://localhost:8000` in your browser.

If you have Node.js:
```bash
npx http-server
```

### 3. Main Files

- `index.html` - Italian version of the website
- `index_en.html` - English version of the website
- `avatar.png` - Profile image
- `decibel.js/` - Directory with libraries used

## Directory Structure

```
umeglio.github.io/
├── index.html                    # Main website (IT)
├── index_en.html                 # Main website (EN)
├── README.md                      # Main documentation (IT)
├── README_en.md                   # Main documentation (EN)
├── avatar.png                     # Profile image
├── googlea91d977fe5a5a8e8.html   # Google verification
├── docs/
│   ├── it/                        # Italian documentation
│   │   ├── INSTALLAZIONE.md
│   │   ├── UTILIZZO.md
│   │   ├── CONTRIBUIRE.md
│   │   └── FAQ.md
│   └── en/                        # English documentation
│       ├── INSTALLATION.md        # This file
│       ├── USAGE.md
│       ├── CONTRIBUTING.md
│       └── FAQ.md
└── decibel.js/                    # Utility library
```

## Troubleshooting

### The website doesn't load correctly
- Make sure you're in the correct directory
- Try with a different browser
- Clear your browser cache (Ctrl+Shift+Delete)

### Images don't load
- Verify that the `avatar.png` file is present in the main folder
- Check relative paths in the HTML file

## Next Steps

Once the website is accessible locally, you can:
- See the [Usage Guide](USAGE.md) to modify content
- Read the [Contributor Guide](CONTRIBUTING.md) if you want to contribute
- Check the [FAQ](FAQ.md) for common answers
