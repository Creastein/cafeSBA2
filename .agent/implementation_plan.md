# Paket Basic — Implementation Plan

Menyelesaikan semua fitur yang kurang untuk Paket Basic cafeSBA2 agar siap deliver ke client. Dua masalah utama: tidak ada integrasi WhatsApp untuk order, dan mobile menu hamburger tidak berfungsi.

## User Review Required

> [!IMPORTANT]
> **Data asli cafe diperlukan.** Saat ini semua data masih placeholder. Sebelum deploy, perlu info:
> - Nomor WhatsApp cafe (format: `628xxxxxxxxxx`)
> - Nama Instagram & Facebook cafe
> - Email cafe (jika ada)
> - Nama cafe asli (jika bukan "Sugar Bloom Atelier")

---

## Proposed Changes

### WhatsApp Integration

Menambahkan tombol WhatsApp sebagai jalur utama order. Terdiri dari floating button yang selalu terlihat, plus update CTA yang sudah ada.

#### [NEW] [WhatsAppFloat.tsx](file:///d:/Project-/cafeSBA2/src/components/ui/WhatsAppFloat.tsx)
- Floating WhatsApp button (fixed di pojok kanan bawah)
- Muncul setelah user scroll 300px ke bawah
- Animasi bounce/pulse untuk menarik perhatian
- Link ke `https://wa.me/628xxx?text=...` dengan pesan template
- Icon WhatsApp SVG

#### [MODIFY] [Hero.tsx](file:///d:/Project-/cafeSBA2/src/components/Hero.tsx)
- Update tombol CTA utama → link ke WhatsApp
- Tambah icon WhatsApp kecil di samping teks tombol
- Retain styling & animasi yang sudah ada

#### [MODIFY] [CustomCakesSection.tsx](file:///d:/Project-/cafeSBA2/src/components/CustomCakesSection.tsx)
- Tombol "Start Your Design" → link ke WhatsApp dengan pesan template custom order
- Contoh: `?text=Halo%20Sugar%20Bloom,%20saya%20mau%20pesan%20custom%20cake%20🎂`

#### [MODIFY] [App.tsx](file:///d:/Project-/cafeSBA2/src/App.tsx)
- Import dan render `WhatsAppFloat` di level app (di luar `<main>`)

---

### Mobile Menu

Hamburger button di `Header.tsx` sudah ada tapi tidak berfungsi. Perlu tambahkan mobile drawer menu.

#### [MODIFY] [Header.tsx](file:///d:/Project-/cafeSBA2/src/components/Header.tsx)
- Tambah `useState` untuk toggle mobile menu
- Buat mobile drawer overlay (full-screen atau slide-in dari kanan)
- Animasi menggunakan Framer Motion `AnimatePresence`
- Semua nav links (Menu, The Space, Custom Cakes, Gallery, Visit Us) tersedia
- Klik link → auto-close menu
- Klik overlay/backdrop → close menu
- Tombol close (X) di dalam drawer

---

### Data & Polish

#### [MODIFY] [Footer.tsx](file:///d:/Project-/cafeSBA2/src/components/Footer.tsx)
- Fix copyright `© 2023` → `© 2026`

#### [MODIFY] [VisitUsSection.tsx](file:///d:/Project-/cafeSBA2/src/components/VisitUsSection.tsx)
- Siapkan placeholder nomor WA & email yang mudah diganti nanti
- Tombol "Get Directions" → pastikan link Google Maps sudah benar

---

## Verification Plan

### Automated Tests
```bash
# TypeScript check — harus 0 error
npm run typecheck

# Production build — harus sukses
npm run build
```

### Manual Verification (Browser)
1. **Desktop** — Buka `http://localhost:3000`
   - Scroll ke bawah → floating WA button muncul setelah scroll
   - Klik floating WA button → buka WhatsApp link di tab baru
   - Klik CTA di Hero → buka WhatsApp link
   - Klik "Start Your Design" → buka WhatsApp link dengan pesan custom order
   - Navigasi via Header links → scroll smooth ke section

2. **Mobile (Chrome DevTools → responsive mode, 375px)**
   - Klik hamburger icon → mobile menu terbuka dengan animasi
   - Semua nav links tampil dan bisa diklik
   - Klik nav link → menu tertutup + scroll ke section
   - Klik di luar menu → menu tertutup
   - Floating WA button tampil dan tidak overlap konten
   - Copyright di footer = `© 2026`
