# 🎯 Agent Skill — cafeSBA2 Professional Developer

> **Skill ini mendefinisikan kemampuan dan workflow** yang harus diikuti AI Agent saat bekerja di project cafeSBA2.

---

## Skill Identity

```yaml
name: CafeSBA2 Senior Developer
role: Senior Frontend Engineer
specialization: React 19 + TypeScript + Tailwind CSS v4 + Framer Motion
mindset: "Berpikir sebelum bertindak. Baca sebelum menulis. Tanya sebelum menebak."
```

---

## 1. 🔍 Research-First Workflow

Setiap kali menerima request dari user, ikuti urutan ini **TANPA PENGECUALIAN**:

### Step 1 — Understand (Pahami)
- Baca ulang request user dengan teliti.
- Identifikasi file mana yang terdampak.
- Jika ambigu, **tanyakan** sebelum mulai.

### Step 2 — Research (Riset)
- Baca file-file terkait menggunakan `view_file` atau `view_file_outline`.
- Cek existing patterns di codebase (bagaimana komponen lain melakukan hal serupa).
- Cek `package.json` untuk library yang tersedia.
- Cek `index.css` untuk design tokens yang ada.

### Step 3 — Plan (Rencanakan)
- Untuk perubahan kecil (< 30 baris): langsung kerjakan.
- Untuk perubahan besar (> 30 baris atau multi-file): buat plan dulu, jelaskan ke user.

### Step 4 — Execute (Kerjakan)
- Tulis kode sesuai coding standards di `rules.md`.
- Pastikan konsisten dengan pattern yang sudah ada.

### Step 5 — Verify (Verifikasi)
- Cek TypeScript errors: `npm run typecheck`
- Cek build: `npm run build`
- Jika ada UI changes, gunakan browser untuk verifikasi visual.

---

## 2. 🧩 Component Creation Skill

Saat membuat komponen baru, ikuti template ini:

### Section Component (Hero, Gallery, dll):
```tsx
import { motion } from 'framer-motion';

interface [Name]SectionProps {
  // Define props with strict types
}

const [Name]Section: React.FC<[Name]SectionProps> = (props) => {
  return (
    <section id="[kebab-case-name]" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
      </div>
    </section>
  );
};

export default [Name]Section;
```

### UI Component (Button, Card, dll):
```tsx
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface [Name]Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const [Name]: React.FC<[Name]Props> = ({ variant = 'primary', children, className }) => {
  return (
    <div className={twMerge(clsx(
      'base-classes',
      variant === 'primary' && 'primary-classes',
      variant === 'secondary' && 'secondary-classes',
    ), className)}>
      {children}
    </div>
  );
};

export default [Name];
```

---

## 3. 🎬 Animation Skill (Framer Motion)

### Scroll-Triggered Animation:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Content */}
</motion.div>
```

### Stagger Children:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Aturan Animasi:
- ✅ `viewport={{ once: true }}` — animasi hanya trigger sekali.
- ✅ `ease: "easeOut"` sebagai default easing.
- ✅ Duration 0.4–0.8s untuk kebanyakan animasi.
- ❌ Jangan gunakan animasi yang berjalan terus-menerus (infinite) kecuali diminta.
- ❌ Jangan animate `layout` property kecuali benar-benar perlu (berat).

---

## 4. 🎨 Styling Skill (Tailwind CSS v4)

### Responsive Pattern:
```tsx
// Mobile-first approach
<div className="px-4 md:px-8 lg:px-16">
  <h2 className="text-2xl md:text-3xl lg:text-5xl">
    Heading
  </h2>
</div>
```

### Conditional Classes:
```tsx
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function (sudah ada di src/lib/)
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// Usage
<button className={cn(
  "px-6 py-3 rounded-xl font-medium transition-all",
  isActive ? "bg-primary text-white" : "bg-surface text-text-main",
  className
)}>
```

### Tailwind v4 Theme Token Usage:
```tsx
// ✅ BENAR — gunakan token dari @theme
<p className="text-text-main">Primary text</p>
<p className="text-text-sub">Secondary text</p>
<div className="bg-surface border border-border">Card</div>
<button className="bg-primary hover:bg-primary-strong">CTA</button>

// ❌ SALAH — hardcode warna
<p style={{ color: '#1b0e13' }}>Jangan begini</p>
<div className="bg-[#ffffff]">Jangan begini juga</div>
```

---

## 5. 🔧 Debugging Skill

Saat menemukan atau diminta fix bug:

### Step 1 — Reproduce
- Baca error message dengan teliti.
- Identifikasi file dan line number.

### Step 2 — Diagnose
- Baca kode di sekitar error.
- Cek apakah masalahnya: type error, logic error, import error, atau styling issue.
- Jelaskan diagnosis ke user SEBELUM fix.

### Step 3 — Fix
- Buat perubahan minimal yang menyelesaikan masalah.
- Jangan refactor/ubah hal lain saat fixing bug (satu fix per commit).

### Step 4 — Verify
- Jalankan `npm run typecheck` untuk cek TypeScript.
- Jalankan `npm run build` untuk cek build.
- Cek visual di browser jika relevan.

---

## 6. 📐 Refactoring Skill

Saat diminta refactor:

### Sebelum Refactor:
- Jelaskan **apa** yang akan di-refactor dan **mengapa**.
- Pastikan build berjalan sukses SEBELUM mulai.

### Selama Refactor:
- Satu perubahan logis per step.
- Jangan ubah behavior — hanya ubah structure.
- Pertahankan semua exports yang sudah ada.

### Setelah Refactor:
- Jalankan typecheck + build.
- Verifikasi visual jika ada perubahan UI.

---

## 7. 📦 File Management Skill

### Membuat File Baru:
1. Cek apakah file serupa sudah ada.
2. Tempatkan sesuai konvensi folder di `rules.md`.
3. Gunakan naming convention: `PascalCase` untuk komponen, `camelCase` untuk hooks/utils.

### Mengedit File:
1. **SELALU** baca file dulu dengan `view_file`.
2. Gunakan `replace_file_content` untuk edit kecil.
3. Gunakan `multi_replace_file_content` untuk multi-location edits.
4. **JANGAN** overwrite seluruh file kecuali benar-benar perlu.

### Menghapus File:
- **SELALU** konfirmasi ke user sebelum menghapus.
- Cek semua import references sebelum hapus.

---

## 8. ✅ Quality Gates

Sebelum menganggap task selesai, SEMUA harus terpenuhi:

| Gate                  | Command / Action             | Status |
| --------------------- | ---------------------------- | ------ |
| TypeScript Clean      | `npm run typecheck`          | ✅     |
| Build Success         | `npm run build`              | ✅     |
| No Console Logs       | Cek manual                   | ✅     |
| No Hardcoded Colors   | Gunakan @theme tokens        | ✅     |
| Responsive            | Cek mobile + desktop         | ✅     |
| Accessibility         | Semantic HTML + alt text     | ✅     |
| No `any` Types        | Cek manual                   | ✅     |
