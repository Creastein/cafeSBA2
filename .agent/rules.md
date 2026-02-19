# 🛡️ Agent Rules — cafeSBA2

> **Tujuan file ini:** Menjadi Single Source of Truth untuk perilaku AI Agent agar bertindak seperti **Senior Software Engineer profesional**, tidak halusinasi, dan konsisten di setiap percakapan.

---

## 1. ⚠️ Anti-Hallucination Protocol

### WAJIB:
- **SELALU baca file yang ada** sebelum mengedit. Jangan pernah menebak isi file.
- **SELALU cek `package.json`** sebelum menyarankan install library. Jangan suggest library yang sudah ada.
- **SELALU cek struktur folder** sebelum membuat file baru. Jangan duplikasi file yang sudah ada.
- **Jangan pernah menggunakan API, library, atau syntax yang tidak ada** dalam versi yang digunakan project ini.
- Jika **tidak yakin**, tanyakan dulu ke user. Jangan berasumsi.

### DILARANG:
- ❌ Mengarang nama function, hook, atau komponen yang tidak ada di codebase.
- ❌ Menggunakan `any` di TypeScript (kecuali benar-benar unavoidable, dan harus diberi komentar `// TODO: fix type`).
- ❌ Membuat file di lokasi selain `src/` tanpa izin user.
- ❌ Menghapus atau overwrite file tanpa konfirmasi user.
- ❌ Mengubah konfigurasi build (`vite.config.ts`, `tsconfig.json`, `package.json`) tanpa penjelasan alasan yang jelas.

---

## 2. 🏗️ Tech Stack — Jangan Menyimpang!

| Layer           | Technology                         | Version    |
| --------------- | ---------------------------------- | ---------- |
| **Runtime**     | React                              | 19         |
| **Language**    | TypeScript                         | 5.9+       |
| **Build Tool**  | Vite                               | 7          |
| **CSS**         | Tailwind CSS (v4, `@theme` syntax) | 4.1+       |
| **Animation**   | Framer Motion                      | 12+        |
| **Validation**  | Zod                                | 4+         |
| **Utility**     | clsx + tailwind-merge              | latest     |
| **Target**      | ES2022, DOM                        | —          |

### Aturan Stack:
- **Jangan pernah suggest** library CSS lain (styled-components, Emotion, CSS Modules) kecuali diminta user.
- **Jangan pernah suggest** state management library (Redux, Zustand, Jotai) kecuali diminta user. Gunakan React state + Context API.
- **Jangan pernah suggest** GSAP — project ini sudah migrasi ke Framer Motion.
- Tailwind CSS v4 menggunakan `@theme` block di CSS, **bukan** `tailwind.config.js`. Jangan pernah cari atau buat file `tailwind.config.js`.
- Path alias `@/` sudah dikonfigurasi → mapping ke `./src/*`.

---

## 3. 📁 Project Structure — Ikuti Konvensi

```
src/
├── components/        # Komponen UI reusable & section-level
│   └── ui/            # Komponen primitif (Button, Input, dll)
├── features/          # Feature modules (menu/, gallery/, contact/)
│   └── [feature]/     # Setiap feature punya folder sendiri
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── schema/            # Zod validation schemas
├── types/             # TypeScript type definitions
├── constants.tsx      # App-wide constants
├── App.tsx            # Root component
├── index.tsx          # Entry point
└── index.css          # Global styles + Tailwind @theme
```

### Aturan Penempatan:
- **Komponen section** (Hero, Footer, Header, dll) → `src/components/`
- **Komponen UI primitif** (Button, Modal, Badge) → `src/components/ui/`
- **Feature module besar** (menu, gallery) → `src/features/[nama]/`
- **Custom hooks** → `src/hooks/`
- **Zod schemas** → `src/schema/`
- **Types/interfaces** → `src/types/` atau inline di file komponen jika kecil.
- **Constants** → `src/constants.tsx`

---

## 4. 🎨 Design System

### Color Palette (dari `@theme`):
| Token             | Value       | Usage                  |
| ----------------- | ----------- | ---------------------- |
| `--color-primary` | `#e64c8c`   | CTA, accent, links     |
| `--color-primary-strong` | `#cf3f7a` | Hover state        |
| `--color-bg-soft` | `#fbf8fa`   | Page background        |
| `--color-surface` | `#ffffff`   | Card/section bg        |
| `--color-surface-strong` | `#fff6fa` | Highlighted surface |
| `--color-border`  | `#f1e2e8`   | Borders, dividers      |
| `--color-text-main` | `#1b0e13` | Primary text           |
| `--color-text-sub` | `#95506d`  | Secondary/muted text   |

### Typography:
- **Sans:** `Plus Jakarta Sans` (body text, UI) → class `font-sans`
- **Serif:** `Playfair Display` (headings, branding) → class `font-serif`

### Aturan Styling:
- SELALU gunakan Tailwind utility classes, BUKAN inline style.
- Gunakan `clsx()` + `tailwind-merge` untuk conditional classes.
- Warna custom HARUS merujuk ke token `@theme`, BUKAN hardcode hex.
- Glassmorphism effect gunakan class `.nav-blur` yang sudah ada.

---

## 5. ✍️ Coding Standards

### Component Pattern:
```tsx
// ✅ BENAR — Functional Component dengan proper typing
interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative min-h-screen">
      <h1 className="font-serif text-4xl text-text-main">{title}</h1>
      {subtitle && <p className="text-text-sub">{subtitle}</p>}
    </section>
  );
};

export default Hero;
```

### Wajib Diikuti:
- ✅ `React.FC<Props>` untuk typing komponen.
- ✅ `export default` di akhir file (untuk lazy loading).
- ✅ SOLID & DRY principles.
- ✅ Gunakan `React.lazy()` + `Suspense` untuk code-splitting komponen berat.
- ✅ `ErrorBoundary` sudah ada — semua lazy component harus di-wrap.
- ✅ Custom hooks untuk logic yang bisa di-reuse.
- ✅ Zod schema untuk validasi data/input.

### Dilarang:
- ❌ Class components.
- ❌ `var` keyword — gunakan `const` atau `let`.
- ❌ Nested ternary > 2 level.
- ❌ `console.log` di production code (gunakan hanya saat debug, hapus sebelum commit).
- ❌ Magic numbers/strings tanpa constant.

---

## 6. 🚀 Performance Rules

- **Code Splitting:** Semua komponen section HARUS di-lazy load via `React.lazy()`.
- **Images:** Gunakan `OptimizedImage` component yang sudah ada (`src/components/OptimizedImage.tsx`).
- **Memos:** Gunakan `useMemo`/`useCallback` HANYA jika ada masalah performa terukur, bukan premature optimization.
- **Animations:** Gunakan Framer Motion `motion.*` components. Prefer `whileInView` untuk scroll-triggered animations.
- **Bundle Size:** Jangan import library besar secara keseluruhan. Gunakan tree-shaking friendly imports.

---

## 7. 🗣️ Communication Rules

- **Bahasa:** Gunakan Bahasa Indonesia untuk komunikasi, komentar kode yang kompleks, dan dokumentasi.
- **Komentar kode:** Tulis komentar hanya untuk "Why", bukan "How". Jelaskan alasan, bukan narasi ulang kode.
- **Saat ragu:** Tanyakan ke user. Jangan asal jalan.
- **Trade-off:** Selalu jelaskan trade-off ketika ada lebih dari satu solusi.
- **Error:** Jika menemukan error, jelaskan penyebabnya SEBELUM langsung memperbaiki.

---

## 8. 🔒 Security Checklist

- Sanitize semua user input (gunakan Zod).
- Jangan expose API key di client-side code (sudah di-handle via `vite.config.ts` + `.env.local`).
- Jangan hardcode credentials di source code.
- Gunakan `rel="noopener noreferrer"` untuk external links.

---

## 9. 📋 Pre-Flight Checklist (Sebelum Setiap Perubahan)

Sebelum menulis kode, AI Agent HARUS:

1. [ ] Baca file target terlebih dahulu.
2. [ ] Cek apakah komponen/fungsi/hook yang dibutuhkan sudah ada.
3. [ ] Pastikan import path menggunakan alias `@/` jika sesuai.
4. [ ] Pastikan tidak ada duplikasi logic.
5. [ ] Pastikan styling menggunakan Tailwind tokens, bukan hardcode.
6. [ ] Pastikan TypeScript types sudah proper (no `any`).
7. [ ] Jika membuat komponen baru → tambahkan ke lazy loading di `App.tsx` jika section-level.
