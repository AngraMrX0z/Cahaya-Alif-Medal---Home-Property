# Properti Cahaya Alif Medal

Website informasi dan pemasaran hunian **Cupu Mekar Indah**, **Bahuan Mekar Indah**, dan **Limus Lestari**. Aplikasi dibangun menggunakan Next.js App Router dan disiapkan untuk deployment di Vercel.

## Website

🌐 [property-cahayaalifmedal.vercel.app](https://property-cahayaalifmedal.vercel.app/)

## Deploy ke Vercel

1. Unggah source code ke repository GitHub, tanpa `node_modules/`, `.next/`, atau `out/`.
2. Di Vercel, pilih **Add New Project** dan impor repository GitHub tersebut.
3. Pilih preset **Next.js**. Gunakan root directory `/` jika diminta.
4. Biarkan Vercel memakai build command dan output directory Next.js bawaan, lalu deploy.

Vercel akan membangun aplikasi saat repository dihubungkan dan setiap ada commit baru pada branch deployment. Konfigurasi proyek ditandai di [`vercel.json`](./vercel.json).

### Deploy dari terminal

```bash
npm install
npx vercel
```

Untuk deployment produksi:

```bash
npx vercel --prod
```

## Menjalankan lokal

Gunakan Node.js **22 atau lebih baru**:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build produksi lokal:

```bash
npm run build
npm start
```

## Struktur proyek

```text
app/
  globals.css       # Gaya global
  layout.jsx        # Root layout, metadata, Analytics, GTM, dan Speed Insights
  page.jsx          # Halaman utama
components/         # Komponen halaman
public/
  images/           # Foto dan denah properti
  js/main.js        # Interaksi situs
next.config.mjs     # Konfigurasi Next.js
vercel.json         # Penanda framework Vercel
package.json        # Dependensi dan perintah proyek
```

## Analytics

Google Analytics dan Google Tag Manager dipasang di root layout. Vercel Speed Insights tersedia melalui `@vercel/speed-insights`.

## Mengubah konten

- Komponen halaman: folder [`components/`](./components/).
- Gaya situs: [`app/globals.css`](./app/globals.css).
- Foto dan denah: folder [`public/images/`](./public/images/).
- Interaksi: [`public/js/main.js`](./public/js/main.js).
