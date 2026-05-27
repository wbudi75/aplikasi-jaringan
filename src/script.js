// JAVASCRIPT - LOGIKA INTERAKTIF BERPINDAH MENU
function tampilkanKonten(idKonten, tombolDipilih) {
    // 1. Sembunyikan seluruh kotak konten materi
    const seluruhKonten = document.querySelectorAll('.content-box');
    seluruhKonten.forEach(box => {
        box.classList.remove('aktif');
    });

    // 2. Hilangkan status 'active' dari semua tombol menu samping
    const seluruhTombol = document.querySelectorAll('.nav-btn');
    seluruhTombol.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Tampilkan kotak konten yang sesuai dengan ID yang dikirim
    const kontenTujuan = document.getElementById(idKonten);
    if (kontenTujuan) {
        kontenTujuan.classList.add('aktif');
    }

    // 4. Tambahkan status 'active' pada tombol yang baru saja di-klik
    if (tombolDipilih) {
        tombolDipilih.classList.add('active');
    }
}

// --- JAVASCRIPT UNTUK IP CALCULATOR ---

function hitungIP() {
    let ipInput = document.getElementById("ipAddress").value;
    let prefixInput = parseInt(document.getElementById("prefix").value);

    // Validasi Input Sederhana
    if (!ipInput || isNaN(prefixInput) || prefixInput < 1 || prefixInput > 32) {
        alert("Masukkan IP Address yang benar dan Prefix antara 1-32.");
        return;
    }

    // Pecah IP menjadi 4 blok angka (oktet)
    let ipParts = ipInput.split('.').map(Number);
    if (ipParts.length !== 4 || ipParts.some(isNaN) || ipParts.some(p => p < 0 || p > 255)) {
        alert("Format IP Address tidak valid. Contoh: 192.168.1.10");
        return;
    }

    // Ubah IP ke format biner (32 bit) integer
    let ipInt = (ipParts[0] << 24) | (ipParts[1] << 16) | (ipParts[2] << 8) | ipParts[3];

    // Hitung Subnet Mask dari Prefix
    // Gunakan shift bit untuk membuat mask (contoh prefix 24: 11111111 11111111 11111111 00000000)
    let maskInt = ~0 << (32 - prefixInput); 
    
    // Hitung Network & Broadcast
    let networkInt = ipInt & maskInt;
    let broadcastInt = networkInt | ~maskInt;

    // Fungsi kecil pembantu untuk mengubah angka biner kembali menjadi teks 192.168.x.x
    function intToIP(int) {
        return [
            (int >>> 24) & 255,
            (int >>> 16) & 255,
            (int >>> 8) & 255,
            int & 255
        ].join('.');
    }

    // Eksekusi perhitungan ke format baca
    let subnetStr = intToIP(maskInt);
    let networkStr = intToIP(networkInt);
    let broadcastStr = intToIP(broadcastInt);
    
    let totalHosts = 0;
    let firstStr = "-";
    let lastStr = "-";

    // Khusus prefix 31 dan 32 aturannya sedikit berbeda (P2P / Loopback)
    if (prefixInput === 32) {
        totalHosts = 1;
        firstStr = intToIP(networkInt);
        lastStr = intToIP(networkInt);
    } else if (prefixInput === 31) {
        totalHosts = 2;
        firstStr = intToIP(networkInt);
        lastStr = intToIP(broadcastInt);
    } else {
        totalHosts = Math.pow(2, 32 - prefixInput) - 2;
        firstStr = intToIP(networkInt + 1);
        lastStr = intToIP(broadcastInt - 1);
    }

    // Tampilkan data ke layar (HTML)
    document.getElementById("res-subnet").innerText = subnetStr;
    document.getElementById("res-network").innerText = networkStr;
    document.getElementById("res-broadcast").innerText = broadcastStr;
    document.getElementById("res-first").innerText = firstStr;
    document.getElementById("res-last").innerText = lastStr;
    document.getElementById("res-hosts").innerText = totalHosts.toLocaleString('id-ID'); // Pakai titik ribuan

    // Tampilkan kotak hasilnya
    document.getElementById("calc-result").style.display = "block";
}