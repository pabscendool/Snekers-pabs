# sneakers pabs

Toko sneakers statis menggunakan HTML, CSS, dan JavaScript murni, tanpa proses build atau dependensi runtime.

## Menjalankan

```bash
python3 -m http.server 5500 --bind 127.0.0.1
```

Buka http://localhost:5500. Jangan membuka melalui `file://` karena aplikasi menggunakan ES modules.

## Isi proyek

- 20 model sneakers dalam 5 kategori, dengan foto lokal dari aset workspace.
- Pencarian dan filter kategori yang dapat digabungkan.
- Pilihan ukuran per model dan shopping bag tersimpan di browser.
- Formulir kontak, total belanja, pemeriksaan ringkasan, dan pembentukan draf WhatsApp.
- Panduan pemesanan, FAQ, tampilan responsif, dan dukungan keyboard.

Harga, stok, dan ukuran merupakan data contoh. Stok dan ongkos kirim dikonfirmasi manual. Tidak ada akun, backend, database, atau pembayaran online.

## Konfigurasi usaha

Edit `js/config.js` untuk nomor WhatsApp internasional (digit saja), alamat, dan jam buka yang asli. Nomor kosong membuat tombol WhatsApp nonaktif. Perbarui katalog, harga, ukuran, dan stok pada `js/data.js` sebelum peluncuran.

Nama dan kontak pembeli tidak disimpan di localStorage. Membuka WhatsApp memasukkan kontak serta rincian pesanan ke draf; pembeli tetap perlu mengirim pesan sendiri.

## Pemeriksaan dan paket

Node.js hanya diperlukan untuk menjalankan pengujian otomatis, bukan untuk membuka website:

```bash
npm test
python3 scripts/package_site.py
```

Paket publik berada di `artifacts/sneakers-pabs.zip`. Dokumen, tes, konfigurasi pengembangan, dan metadata Git tidak masuk paket.

SOP lengkap: [instruction.md](instruction.md). Kebutuhan: [prd.md](prd.md), teknologi: [tech_stack.md](tech_stack.md), arsitektur: [arsitektur.md](arsitektur.md), desain: [ui.ux.md](ui.ux.md).
