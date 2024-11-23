### Tugas Pengembangan Web_Farhan Hanif Rahmansyah_21060122120002

# Proses CI/CD dan Hasil Deployment

### Continuous Integration (CI)

File konfigurasi CI (`ci.yml`) melakukan langkah-langkah berikut:

1. **Trigger**: Proses CI dijalankan setiap kali ada push atau pull request ke branch `main`.
2. **Checkout Code**: Mengambil kode dari repository.
3. **Setup Node.js**: Mengatur lingkungan Node.js dengan versi yang ditentukan.

### Continuous Deployment (CD)

Proses Continuous Integration dan Continuous Deployment (CI/CD) pada proyek ini menggunakan GitHub Actions untuk otomatisasi build dan deployment ke GitHub Pages. Berikut adalah langkah-langkah yang dilakukan dalam proses CI/CD:

1. **Checkout Code**: Mengambil kode dari repository.
2. **Setup Node.js**: Mengatur lingkungan Node.js dengan versi yang ditentukan.
3. **Install Dependencies**: Menginstal semua dependensi yang diperlukan menggunakan `npm install`.
4. **Build Project**: Membangun proyek menggunakan `npm run build` untuk menghasilkan file statis yang siap untuk dideploy.
5. **Deploy to GitHub Pages**: Menggunakan `peaceiris/actions-gh-pages@v3` untuk mendeploy file hasil build ke branch `gh-pages`.

### Hasil Deployment
Hasil dari project ini telah di deploy ke GitHub Pages yang dapat diakses melalui link:
https://frhnhanif.github.io/ci-cd-21060122120002-elektro/ 
