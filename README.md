# 🐂 Bull Market — 3D Quant Portfolio

> A scroll-driven, immersive 3D portfolio built with React Three Fiber featuring a live trading-floor aesthetic, animated Wall Street Bull & Bear, and Bloomberg-inspired UI.

![Tech Stack](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## ✨ Features

- **3D Animated Bull & Bear** — A geometric neon-green Bull charges on load, scales down, and hovers as you scroll. A red Bear lurks from page 3, then retreats in defeat on the final page as the **Bull Run** begins.
- **Scroll-Driven Narrative** — 5 distinct portfolio sections mapped to a cinematic 3D scroll journey powered by `@react-three/drei`'s `ScrollControls`.
- **Live Project Previews** — Interactive browser-window cards load your actual deployed projects as iframe thumbnails. Hover to expand them full-color with a description overlay.
- **Floating 3D Japanese Candlesticks** — Bull (green) and Bear (red) candlestick charts fill the 3D space as ambient market volatility.
- **Section-Aware Stock Tickers** — 3D `<Text>` elements display themed fictional tickers (e.g. `$SKILLS +8.5%`) at each scroll section.
- **Custom Loading Screen** — A terminal-style bootup sequence with a simulated progress bar and live system log output before the portfolio loads.
- **Fancy Custom Cursor** — A dual-layer neon green cursor (instant inner dot + lagging outer ring) with particle trail effects on movement.
- **Bloomberg-Inspired UI** — Dark mode glassmorphism cards with neon green borders, sharp right-angle corners, `JetBrains Mono` monospace typography, and `Space Grotesk` for headings.

---

## 🗂️ Project Structure

```
3d-portfolio/
├── public/
│   └── profile.jpg          # Your profile photo (place here!)
├── src/
│   ├── components/
│   │   ├── Candlestick.jsx  # 3D Japanese Candlestick (Bull & Bear)
│   │   ├── CustomLoader.jsx # Terminal-style loading screen
│   │   ├── FancyCursor.jsx  # Custom neon cursor with ring + trails
│   │   ├── GeometricBull.jsx# Low-poly scroll-animated 3D Bull
│   │   ├── GeometricBear.jsx# Low-poly scroll-animated 3D Bear
│   │   └── Overlay.jsx      # All HTML content (cards, text, links)
│   ├── App.jsx              # App root, Suspense + loading gate
│   ├── Scene.jsx            # 3D canvas: lights, scroll, all 3D objects
│   ├── index.css            # Global design system (trading terminal theme)
│   └── main.jsx             # Vite entry point
├── index.html               # Google Fonts (Space Grotesk + JetBrains Mono)
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/AmritKumarSarangi/3d-portfolio.git
cd 3d-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Add Your Photo

Place your profile photo at:
```
public/profile.jpg
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. Deploy to **Vercel**, **Netlify**, or any static host.

**Recommended: Deploy to Vercel**
```bash
npx vercel --prod
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#020502` | Void dark |
| Primary Green | `#00ff66` | Bull, borders, highlights |
| Danger Red | `#ff003c` | Bear, loss tickers |
| Text Primary | `#e0e0e0` | Body copy |
| Text Muted | `#a1b5a5` | Labels, secondary |
| Card Background | `rgba(5,10,6,0.85)` | Glass panels |
| Card Border | `#193622` → `#00ff66` on hover | Panel outline |
| Font — Display | `Space Grotesk` | Headings |
| Font — Mono | `JetBrains Mono` | Tickers, terminal text |

---

## 📸 Portfolio Sections

| # | Page | 3D Activity |
|---|---|---|
| 1 | **Hero** | Bull charges in large, tickers pulse |
| 2 | **ALPHA_SOURCE** (About) | Bull shrinks to mascot, skills tickers appear |
| 3 | **PORTFOLIO_ASSETS** (Projects) | Bear creeps in, project tickers show |
| 4 | **MARKET_INFLUENCE** (Community) | Bear lurks fully visible |
| 5 | **BULL_RUN** (Contact) | Bull surges, Bear retreats, **BULL RUN INITIATED** 🚀 |

---

## 🔗 Featured Projects

| Project | Ticker | URL |
|---|---|---|
| CivicConnect | `[CVCX]` | [civicconnect-8dcc3.web.app](https://civicconnect-8dcc3.web.app) |
| HAPAning | `[HAPA]` | [hapaing-unicorn.netlify.app](https://hapaing-unicorn.netlify.app/) |
| Zervyn Fintech | `[ZRVN]` | [zervyn-amrit-kumar-sarangi.vercel.app](https://zervyn-amrit-kumar-sarangi.vercel.app/) |
| Fake News Detector | `[FNDD]` | [fake-news-detector-lemon.vercel.app](https://fake-news-detector-lemon.vercel.app) |

---

## 🛠️ Tech Stack

| Library | Purpose |
|---|---|
| `react` + `vite` | UI framework and bundler |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | 3D helpers: ScrollControls, Text, Float, Grid |
| `three` | Core 3D engine |
| `Space Grotesk` | Display typography |
| `JetBrains Mono` | Terminal / monospace typography |

---

## 👤 Author

**Amrit Kumar Sarangi**
- 📧 amritkumarsarangi@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/amrit-kumar-sarangi-b5171a321)
- 🐙 [GitHub](https://github.com/AmritKumarSarangi)
- 📸 [Instagram](https://www.instagram.com/amritsarangi/)
- 🌐 [Portfolio](https://amritkumarsarangi.vercel.app)

---

> *"Always compiling. Always running."*
