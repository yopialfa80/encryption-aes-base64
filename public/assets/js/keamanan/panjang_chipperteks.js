var enkripsi_AES;
function enkripsiAES(plaintext, kunci) {
    enkripsi_AES = enkripsiAdvancedEncryptionStandard(plaintext, kunci).toString().split('U2FsdGVkX1')[1];
    $('#panjang-aes').html(enkripsi_AES.length + ' <span class="milisecond-speed">Kata</span>')
}

var enkripsi_RC4;
function enkripsiRC4(plaintext, kunci) {
    enkripsi_RC4 = enkripsiRivestCode4(plaintext, kunci).toString().split('U2FsdGVkX1')[1];
    $('#panjang-rc4').html(enkripsi_RC4.length + ' <span class="milisecond-speed">Kata</span>')
}

function startEnkripsi() {
    var kunci = $('#kunci-enkripsi-teks').val();
    var plaintext = $('#plaintext-enkripsi-teks').val();

    enkripsiAES(plaintext, kunci)
    enkripsiRC4(plaintext, kunci)

    kesimpulan()
    setTimeout(() => {
        kesimpulan()
    }, 100);
}

function kesimpulan() {
    var kesimpulan;
    if (enkripsi_AES.length > enkripsi_RC4.length) {
        var hitung = enkripsi_AES.length - enkripsi_RC4.length
        kesimpulan = '<span style="color: #00F9FF">Advanced Encryption Standard (AES)</span> lebih banyak <span style="color: #00F9FF">' + hitung + ' Kata</span> dari <span style="color: #FF6384">Rivest Code 4 (RC4)</span>';
    } else if (enkripsi_AES.length < enkripsi_RC4.length) {
        var hitung = enkripsi_AES.length - enkripsi_RC4.length
        kesimpulan = '<span style="color: #00F9FF">Rivest Code 4 (RC4)</span> lebih banyak <span style="color: #00F9FF">' + hitung + ' Kata</span> dari <span style="color: #FF6384">Advanced Encryption Standard (AES)</span>';
    } else {

    }
    $('#kesimpulan').html(kesimpulan)
}