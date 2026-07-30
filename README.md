# Automation & Software Solutions

Sito statico per Automation & Software Solutions, ospitato su GitHub Pages.

## Struttura

- `index.html` – Home, servizi, chi siamo, progetti, contatti, banner cookie, pannello preferenze.
- `privacy.html` – Privacy Policy.
- `cookie.html` – Cookie Policy.
- `robots.txt` – Indicazioni per i motori di ricerca.
- `sitemap.xml` – Sitemap per indicizzazione.
- `assets/style.css` – Stili.
- `assets/script.js` – Logica modulo contatto, cookie, dark mode.
- `.github/workflows/github-pages.yml` – Deploy automatico su GitHub Pages.

## Deploy

1. Crea una repository `automation-softwaresolutions`.
2. Copia tutti i file nella root della repo.
3. Fai commit e push su `main`.
4. In GitHub → Settings → Pages:
   - Source: `GitHub Actions`.
5. Il workflow `github-pages.yml` si occuperà del deploy.

## Logo

Inserisci il file del logo in:

- `assets/logo.png`

Il sito lo utilizza nell’header.
