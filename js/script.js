var isCelsiusToFarhenheit = true;

function toggleKonversi() {
    isCelsiusToFarhenheit = !isCelsiusToFarhenheit;
    var label = document.querySelector('label[for=celcius]');
    label.textContent = isCelsiusToFarhenheit ? 'Celcius (°C):' : 'Fahrenheit (°F):';
    var label = document.querySelector('label[for=fahrenheit]');
    label.textContent = isCelsiusToFarhenheit ? 'Fahrenheit (°F):' : 'Celcius (°C):';
    var label = document.querySelector('label[for=h3]');
    label.textContent = isCelsiusToFarhenheit ? 'Cara Konversi dari Celcius ke Fahrenheit' : 'Cara Konversi dari Fahrenheit ke Celcius';
    var label = document.querySelector('label[for=paragraf-1]');
    label.textContent = isCelsiusToFarhenheit ? 'Masukkan suhu Celcius (°C) ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).' : 'Masukkan suhu Fahrenheit (°F) ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (°C).';
    var label = document.querySelector('label[for=paragraf-2]');
    label.textContent = isCelsiusToFarhenheit ? 'Suhu dalam Derajat Fahrenheit (°F) sama dengan suhu dalam Derajat Celcius (°C) dikali 9/5 ditambah 32' : 'Suhu dalam Derajat Celcius (°C) sama dengan suhu dalam Derajat Fahrenheit (°F) dikurangi 32 dikali 5/9';
    var label = document.querySelector('label[for=paragraf-3]');
    label.textContent = isCelsiusToFarhenheit ? 'Suhu °F = (Suhu °C x 9/5) + 32' : 'Suhu °C = (Suhu °F - 32) x 5/9';
    reset();
}


