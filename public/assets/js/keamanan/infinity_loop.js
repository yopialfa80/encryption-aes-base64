var loop = 0;
function startTest(plainteks, kunci) {
    loop++
    $('#loop').html(loop)
    
    var enkripsi_AES = enkripsiAdvancedEncryptionStandard(plainteks, kunci).toString().split('U2FsdGVkX1')[1];
    var enkripsi_RC4 = enkripsiRivestCode4(plainteks, kunci).toString().split('U2FsdGVkX1')[1];

    var hasilDekripsiAes = dekripsiAdvancedEncryptionStandard("U2FsdGVkX1"+enkripsi_AES, kunci)
    var hasilDekripsi = dekripsiRivestCode4("U2FsdGVkX1"+enkripsi_RC4, kunci)

    if (hasilDekripsiAes == plainteks) {
        $('#generate-aes').append('<span class="box-success"></span>');
    } else {
        $('#generate-rc4').append('<span class="box-failed"></span>');
    }

    if (hasilDekripsi == plainteks) {
        $('#generate-rc4').append('<span class="box-success"></span>');
    } else {
        $('#generate-rc4').append('<span class="box-failed"></span>');
    }
    
}

function init() {
    loop = 0;
    var kunci = $('#kunci-enkripsi-teks').val();
    var plainteks = $('#plaintext-enkripsi-teks').val();
    var jumlahLoop = $('#jumlah-loop').val()

    $('#generate-aes').html('');
    $('#generate-rc4').html('');
    for (let i = 0; i < jumlahLoop; i++) {
        startTest(plainteks, kunci)
    }
}