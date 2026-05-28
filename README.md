# Aplikasi Belajar Jaringan - Networking 101

Aplikasi desktop interaktif dan ringan yang dirancang untuk membantu memahami konsep dasar jaringan komputer dari tingkat fisik hingga arsitektur skala besar. Aplikasi ini sangat cocok digunakan sebagai media pembelajaran visual yang praktis dan interaktif.

## Fitur Utama

Aplikasi ini merangkum 12 materi inti jaringan komputer yang dilengkapi dengan simulasi visual:
1. **Media Transmisi:** Pemahaman perbedaan kabel Ethernet fisik dan gelombang Wi-Fi (Udara).
2. **Jaringan Lokal (MAC & Switch):** Bagaimana Switch meneruskan paket data berdasarkan MAC Address.
3. **Jaringan Luas (IP Address & DHCP):** Simulasi pemberian IP secara dinamis vs statis.
4. **Keluar Jaringan (Subnet & Router):** Fungsi Router sebagai jembatan antar subnet yang berbeda.
5. **Mencari Jalan (Routing BGP/OSPF):** Visualisasi pencarian jalur terpendek dan efisien.
6. **Tes Koneksi (Ping & ICMP):** Mekanisme request dan reply menggunakan protokol ICMP.
7. **Cara Pengiriman (TCP vs UDP):** Perbandingan akurasi transfer data vs kecepatan real-time.
8. **Pintu Aplikasi (Ports & Firewall):** Cara kerja satpam jaringan (Firewall) dalam memblokir/mengizinkan port aplikasi.
9. **Enkripsi (TLS & VPN):** Visualisasi keamanan data dari intipan hacker melalui enkripsi terowongan.
10. **Buku Telepon (DNS):** Proses penerjemahan nama domain menjadi IP Address.
11. **Web & Skala Besar (HTTP & Load Balancer):** Bagaimana Load Balancer membagi beban trafik ke banyak server.
12. **IP & Subnet Calculator:** Alat bantu praktis untuk menghitung Subnet Mask, Network/Broadcast Address, IP Usable, dan Total Host secara otomatis.

## Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan kombinasi teknologi modern yang menjamin performa cepat dan ukuran file yang sangat minimal:
* **Frontend:** Vanilla HTML5, CSS3 (Modern Dark Theme), dan JavaScript murni untuk logika interaktif.
* **Grafis & Animasi:** Native SVG (Scalar Vector Graphics) untuk visualisasi simulasi jaringan.
* **Core Framework:** [Tauri](https://tauri.app/) (Menggunakan penampil web bawaan OS sehingga hemat RAM).
* **Backend Engine:** [Rust](https://www.rust-lang.org/) (Menjamin keamanan memori dan kecepatan tinggi).

## Cara Mengunduh & Menggunakan

Kamu tidak perlu melakukan instalasi tools pemrograman untuk menjalankan aplikasi ini. Cukup unduh installer siap pakai dari halaman rilis:

1. Pergi ke halaman **[Releases](https://github.com/wbudi75/aplikasi-jaringan/releases)** pada repository ini.
2. Unduh file sesuai dengan sistem operasi komputer kamu:
   * **Windows:** Unduh file berakhiran `.exe`
   * **Linux (Ubuntu/Pop!_OS/Debian):** Unduh file berakhiran `.deb` atau `.AppImage`
   * **macOS:** Unduh file berakhiran `.dmg`
3. Jalankan aplikasinya langsung di komputermu!

## Panduan Pengembangan (Untuk Developer)

Jika kamu ingin menjalankan atau memodifikasi aplikasi ini di lingkungan lokal kamu, ikuti langkah berikut:

### Prasyarat
* Telah menginstal [Node.js](https://nodejs.org/)
* Telah menginstal [Rust](https://www.rust-lang.org/)

### Langkah Instalasi
Clone repository ini:
   1. git clone [https://github.com/wbudi75/aplikasi-jaringan.git](https://github.com/wbudi75/aplikasi-jaringan.git)
   2. cd aplikasi-jaringan

### Fitur Utama
<p align="center">
  <img src="images/aplikasi-jaringan.png" width="800" alt="Tampilan Utama Aplikasi">
</p>

### Fitur Simulasi & Kalkulator
<p align="center">
  <img src="images/routing.png" width="400" alt="Simulasi Routing">
  <img src="images/ip-calc.png" width="400" alt="IP Calculator">
</p>

