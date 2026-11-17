# Send Button Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/send-button-animation-lab/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive recreation of the supplied screen recording.

## What is included
- Two pill-shaped animated buttons: SEND and SHIP
- Dark button face with yellow-green and cyan accents
- Sliding color wake/fill animation
- Small paper-plane glyph that flies out
- Staggered letter reveal: SEND -> SENT and SHIP -> OUT
- Click to replay, keyboard accessible controls, reduced-motion support

## Run
No dependencies or build step required.

Open `index.html` in a modern browser, or run:
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Source extraction vs reconstruction
The recording shows three source panes (`index.html`, `app.css`, `app.js`). Readable fragments include:
- HTML button structure with `.ct`, `.ct__wake`, `.ct__go`, `.ct__plane`, `.ct__dash`, `.ct__glyph`, `.ct__word`, `.ct__sent`, and `.ct__ch`
- CSS wake layer using `position: absolute; inset: 0; background: var(--wake);` and a `translate3d(...)` transform
- CSS plane transform driven by `--fly` and `--w`
- JavaScript easing constants `EASE_WAKE = bezier(.30, .10, .00, .90)` and `EASE_PLANE = bezier(.698, .187, .322, .847)`
- Timeline values: `word: { at: 17, dur: 170 }`, `fly: { at: 200, dur: 533 }`, `wake: { at: 250, dur: 717 }`, `dusk: { at: 483, dur: 484 }`, `chars: { at: 510, dur: 200 }`

The video resolution makes some source text too small to recover reliably. The visible design and readable concepts are preserved; the rest of the HTML/CSS/JS is reconstructed into a complete runnable implementation rather than represented as an exact copy of the original repository.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
