# Monk & Demon — River Crossing

<p align="center">
  <img src="assets/icon.png" alt="Monk & Demon" width="128" />
</p>

A classic river-crossing logic puzzle, rebuilt as a polished Android app. Transport the monks safely across the river — but never leave demons alone with monks on either bank.

<p align="center">
  <a href="https://github.com/Kush-Singh-26/MonkDemonApp/releases"><strong>Download APK</strong></a>
  ·
  <a href="https://github.com/Kush-Singh-26/MonkDemonApp/releases">Releases</a>
  ·
  <a href="https://github.com/Kush-Singh-26/MonkDemonApp/issues">Issues</a>
</p>

---

## The Puzzle

> 3 monks and 3 demons must cross a river. The boat holds at most 2 passengers. If demons ever outnumber monks on a bank, the monks are in danger.

Built-in solvers let you watch BFS, DFS, or A* explore the search tree in real time — and even auto-play the solution.

---

## Repository Layout

```
MonkDemonApp/
├── www/                    # Web assets (the game itself)
│   ├── index.html          # Game HTML/CSS/JS
│   └── fonts/            # Offline fonts (Cinzel, IM Fell English, Courier Prime)
├── android/               # Capacitor Android project
│   └── app/build/outputs/
│       ├── apk/debug/    # Debug APK
│       └── bundle/release/ # Release AAB
├── assets/               # App icon & splash (placeholder — replace before publishing)
├── releases/            # Pre-built release artifacts
├── package.json         # npm config
└── *.md                 # Docs
```

---

## Quick Start

### Run in a browser (no install needed)

```bash
# Serve locally
npx serve .
# Open http://localhost:3000
```

### Build Android APK

```bash
git clone https://github.com/Kush-Singh-26/MonkDemonApp.git
cd MonkDemonApp
npm install
npx cap copy
npx cap sync
cd android && ./gradlew assembleDebug
```

The debug APK lands at `android/app/build/outputs/apk/debug/app-debug.apk`. Install it with:

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Build Release AAB

```bash
cd android && ./gradlew bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

---

## Features

- **Classic puzzle mechanics** — tap or click move buttons to cross the river
- **Solver visualization** — watch BFS, DFS, or A* build the search tree live
- **Step-by-step auto-play** — let the solver animate the solution for you
- **Undo / Redo** — step back through your move history
- **Offline-ready** — all fonts bundled, no network needed
- **Immersive fullscreen** — no status bar, portrait locked

---

## Configuration

| Setting | Value |
|---------|-------|
| Monks | 3 |
| Demons | 3 |
| Boat capacity | 2 |
| Default solver | BFS |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.