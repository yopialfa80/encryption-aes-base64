function init() {
    $('#hasil-enkripsi').hide();
    $('#hasil-dekripsi').hide();
    $('.hidden-hasils-rc4').hide()
    $('.hidden-hasils-aes').hide()
    $('.hidden-hasils-dekripsi-rc4').hide()
    $('.hidden-hasils-dekripsi-aes').hide()
}
init();

var clipboard = new ClipboardJS('.copy');
clipboard.on('success', function(e) {
    e.clearSelection();
});

function startUjiKunci() {
    enkripsi_teks_aes()
    enkripsi_teks_rc4()
}

var enkripsiDDDl;
function enkripsi_teks_aes() {
    var kunci_enkripsi = $('#kunci-enkripsi-teks').val();
    var plaintext_enkripsi = $('#plaintext-enkripsi-teks').val();
    var hasilEnkripsi = enkripsiAdvancedEncryptionStandard(plaintext_enkripsi, kunci_enkripsi).toString().split('U2FsdGVkX1')[1]
    $('#enkripsi-aes').html(hasilEnkripsi);
    
    $('.hidden-hasils-aes').fadeIn(1000);
    setTimeout(() => {
        dekripsi_teks_aes(hasilEnkripsi)
    }, 100);
}

function enkripsi_teks_rc4() {
    var kunci_enkripsi = $('#kunci-enkripsi-teks').val();
    var plaintext_enkripsi = $('#plaintext-enkripsi-teks').val();
    var hasilEnkripsi = enkripsiRivestCode4(plaintext_enkripsi, kunci_enkripsi).toString().split('U2FsdGVkX1')[1]
    $('#enkripsi-rc4').html(hasilEnkripsi);
    
    $('.hidden-hasils-rc4').fadeIn(1000);
    setTimeout(() => {
        dekripsi_teks_rc4(hasilEnkripsi)
    }, 100);
}

function dekripsi_teks_aes(chipperteks) {
    var kunci_dekripsi = $('#kunci-enkripsi-teks').val();
    var hasilDekripsiAes = dekripsiAdvancedEncryptionStandard("U2FsdGVkX1"+chipperteks, kunci_dekripsi)
    $('#dekripsi-aes').html(hasilDekripsiAes);
}

function dekripsi_teks_rc4(chipperteks) {
    var kunci_dekripsi = $('#kunci-enkripsi-teks').val();
    var hasilDekripsi = dekripsiRivestCode4("U2FsdGVkX1"+chipperteks, kunci_dekripsi)
    $('#dekripsi-rc4').html(hasilDekripsi);
}

