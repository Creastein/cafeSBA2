# Task — Paket Basic cafeSBA2

## 🔴 Critical (Wajib Selesai)

- [x] **Tombol Order WhatsApp**
  - [x] Tambah floating WhatsApp button (sticky di pojok kanan bawah)
  - [x] Update CTA di `Hero.tsx` → link ke WhatsApp
  - [x] Update tombol "Start Your Design" di `CustomCakesSection.tsx` → link ke WhatsApp
  - [x] Buat komponen reusable `WhatsAppButton` di `src/components/ui/`

- [x] **Mobile Menu (Hamburger)**
  - [x] Tambah state toggle di `Header.tsx`
  - [x] Buat mobile menu drawer/overlay dengan animasi Framer Motion
  - [x] Pastikan semua nav links berfungsi di mobile
  - [x] Klik di luar menu → auto-close

## 🟡 Polish (Penting Tapi Cepat)

- [x] **Update data dummy**
  - [x] Ganti nomor telepon ke nomor WA asli cafe (tanya user)
  - [ ] Ganti email ke email asli cafe (tanya user) — belum ada
  - [x] Update link Instagram & Facebook ke akun cafe asli (tanya user)
  - [x] Fix copyright `© 2023` → `© 2026` di `Footer.tsx`

- [x] **SEO & Meta tags**
  - [x] Update `<title>` dan meta description di `index.html` sesuai nama cafe asli
  - [x] Update Open Graph tags

## 🟢 Optional (Bonus Kalau Sempat)

- [ ] Tambah foto real cafe (kalau dapat dari client)
- [ ] Favicon cafe
- [ ] Loading skeleton yang lebih halus

## ✅ Verification

- [x] `npm run typecheck` → no errors
- [x] `npm run build` → build success
- [x] Test mobile menu di browser (responsive mode)
- [x] Test semua tombol WhatsApp berfungsi
- [x] Test navigasi di mobile & desktop
