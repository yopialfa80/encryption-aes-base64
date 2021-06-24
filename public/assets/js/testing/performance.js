function init() {
    $('.result-card').hide();
}
init();

function enkripsi_teks() {
    $('.result-card').hide();
    var kunci_enkripsi = $('#kunci-enkripsi-teks').val();
    var plaintext_enkripsi = $('#plaintext-enkripsi-teks').val();
    var hasilEnkripsi = timeEnkripsi(plaintext_enkripsi, kunci_enkripsi);
    timeDekripsi(hasilEnkripsi, kunci_enkripsi);

    var panjang_kunci = kunci_enkripsi.length;
    $('#panjang-kunci').html(panjang_kunci + ' <span class="milisecond-speed">karakter</span>');

    var panjang_plaintext = plaintext_enkripsi.length;
    $('#panjang-plaintext').html(panjang_plaintext + ' <span class="milisecond-speed">karakter</span>');

    $('.result-card').fadeIn('slow');
}

function timeEnkripsi(value, kunci) {
    var performance = window.performance;
    var startEnkripsiAES = performance.now();
    var enkrispi_AES = CryptoJSAesJson.encrypt(value, kunci);
    var endEnkripsiAES = performance.now();
    var kecepatanEnkripsiAES = endEnkripsiAES - startEnkripsiAES
    $('#plaintochipperaes').html(kecepatanEnkripsiAES + ' <span class="milisecond-speed">milisecond</span>')
    

    var performance = window.performance;
    var startEnkripsiBase64 = performance.now();
    var resultEnkripsi = Base64.encode(enkrispi_AES);
    var endEnkripsiBase64 = performance.now();
    var kecepatanEnkripsiBase64 = endEnkripsiBase64 - startEnkripsiBase64;
    $('#chipperaestochipperbase64').html(kecepatanEnkripsiBase64 + ' <span class="milisecond-speed">milisecond</span>')

    var totalKecepatanEnkripsi = kecepatanEnkripsiAES + kecepatanEnkripsiBase64;
    $('#finaltotalkecepatanenkripsi').html(totalKecepatanEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjang-chippertext-aes').html(enkrispi_AES.length + ' <span class="milisecond-speed">karakter</span>');
    $('#panjang-chippertext-base64').html(resultEnkripsi.length + ' <span class="milisecond-speed">karakter</span>');

    return resultEnkripsi;
}

function timeDekripsi(value, kunci) {
    
    var performance = window.performance;
    var startEnkripsiBase64 = performance.now();
    var base64Decr = Base64.decode(value);
    var endEnkripsiBase64 = performance.now();
    var kecepatanEnkripsiBase64 = endEnkripsiBase64 - startEnkripsiBase64;
    $('#chipperaestochipperbase64dek').html(kecepatanEnkripsiBase64 + ' <span class="milisecond-speed">milisecond</span>')
    
    var performance = window.performance;
    var startEnkripsiAES = performance.now();
    CryptoJSAesJson.decrypt(base64Decr, kunci);
    var endEnkripsiAES = performance.now();
    var kecepatanEnkripsiAES = endEnkripsiAES - startEnkripsiAES
    $('#plaintochipperaesdek').html(kecepatanEnkripsiAES + ' <span class="milisecond-speed">milisecond</span>')

    var totalKecepatanEnkripsi = kecepatanEnkripsiAES + kecepatanEnkripsiBase64;
    $('#finaltotalkecepatanenkripsidek').html(totalKecepatanEnkripsi + ' <span class="milisecond-speed">milisecond</span>')
}