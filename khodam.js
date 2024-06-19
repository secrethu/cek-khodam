function cekkhodam() {
    const name = document.getElementById('inputan').value.trim();
    if (name === "") {
        XSAlert({
            title: 'Error',
            message: 'Nama tidak boleh kosong',
            icon: 'error',
            hideCancelButton: true
        })
        return;
    }

    const khodams = [
        "Air Cucian Beras",
        "Api Menyala",
        "Angin Sejuk",
        "Batu Karang",
        "Cahaya Bulan",
        "Daun Rimbun",
        "Embun Pagi",
        "Gurun Pasir",
        "Hujan Deras",
        "Pelangi Indah",
        "Sungai Mengalir",
        "Tanah Subur",
        "Sepeda Ontel",
        "Titid Terbang",
        "Layangan Putus",
        "Baju Robek"
        // Tambahin aja khodam lainnya disini bang.
    ];

    const acak = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[acak];
    const hasil = `Nama: ${name}\nKhodam: ${khodam}`;

    document.getElementById('result').innerText = hasil;
}z
