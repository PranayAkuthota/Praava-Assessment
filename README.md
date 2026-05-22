
# Legal Hero Section — Next.js

A pixel-faithful recreation of the "Legal Work Platform" hero section built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**.

## Features

- ✅ Reusable `FloatingCard` component with `color`, `rotation`, `icon`, and `label` props
- ✅ Special `PortalCard` variant for the "John Doe – Portal" card
- ✅ Blurred background blobs for depth
- ✅ Responsive layout (floating cards hidden/simplified on mobile)
- 🌙 **Dark Mode** toggle (persists via localStorage)
- ✨ **Floating animations** via CSS keyframes
- ⚡ **Fade-in entrance animations** on mount

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css        # Global styles + font import
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── FloatingCard.tsx   # Reusable pill card + PortalCard variant
│   ├── HeroSection.tsx    # Main hero with split layout
│   ├── Navbar.tsx         # Top navigation bar
│   └── ThemeToggle.tsx    # Dark/light mode toggle
├── tailwind.config.js     # Tailwind config with custom tokens & keyframes
└── package.json
```

## Design Decisions

- **FloatingCard** accepts a `color` prop (`'blue' | 'orange' | 'dark' | 'lavender'`) which maps to predefined bg/text/icon colors, keeping extension easy.
- **PortalCard** is a named export from the same file — it's a "slot" variant with a left accent bar, avatar, and message preview layout.
- Animation delays are staggered per card for the organic floating feel.
- Tailwind's `rotate-[Ndeg]` arbitrary values are used for the pill rotations.
=======
