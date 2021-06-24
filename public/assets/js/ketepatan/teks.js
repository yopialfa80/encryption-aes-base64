function init() {
    $('#hasil-enkripsi').hide();
    $('#hasil-dekripsi').hide();
    $('.hidden-hasils').hide()
}
init();

function enkripsi_teks() {
    var kunci_enkripsi = $('#kunci-enkripsi-teks').val();
    var plaintext_enkripsi = $('#plaintext-enkripsi-teks').val();
    $('#hasil-chippertext-teks').html(encrypt(plaintext_enkripsi, kunci_enkripsi));
    $('#hasil-chippertext-only-aes').html(encryptOnlyAES(plaintext_enkripsi, kunci_enkripsi));
    $('#hasil-chippertext-only-base').html(encryptOnlyBase64(plaintext_enkripsi));
    $('.hidden-hasils').fadeIn(1000);
}

function dekripsi_teks() {
    var kunci_dekripsi = $('#kunci-dekripsi-teks').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks').val();
    $('#hasil-dekripsi').fadeIn(1000);

    try {
        $('#hasil-plaintext-teks').html(decrypt(chippertext_dekripsi, kunci_dekripsi));
        $('#hasil-dekripsi').addClass('alert-fill-primary');
        $('#hasil-dekripsi').removeClass('alert-fill-danger');
    }
      catch(err) {
        $('#hasil-dekripsi').removeClass('alert-fill-primary');
        $('#hasil-dekripsi').addClass('alert-fill-danger');
        document.getElementById("hasil-plaintext-teks").innerHTML = err.message;
    }
}

function dekripsi_teks_aes() {
    var kunci_dekripsi = $('#kunci-dekripsi-teks').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks').val();
    $('#hasil-dekripsi').fadeIn(1000);

    try {
        $('#hasil-plaintext-teks').html(decryptOnlyAES(chippertext_dekripsi, kunci_dekripsi));
        $('#hasil-dekripsi').addClass('alert-fill-primary');
        $('#hasil-dekripsi').removeClass('alert-fill-danger');
    }
      catch(err) {
        $('#hasil-dekripsi').removeClass('alert-fill-primary');
        $('#hasil-dekripsi').addClass('alert-fill-danger');
        document.getElementById("hasil-plaintext-teks").innerHTML = err.message;
    }
}

function dekripsi_teks_base64() {
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks').val();
    $('#hasil-dekripsi').fadeIn(1000);

    try {
        $('#hasil-plaintext-teks').html(decryptOnlyBase64(chippertext_dekripsi));
        $('#hasil-dekripsi').addClass('alert-fill-primary');
        $('#hasil-dekripsi').removeClass('alert-fill-danger');
    }
      catch(err) {
        $('#hasil-dekripsi').removeClass('alert-fill-primary');
        $('#hasil-dekripsi').addClass('alert-fill-danger');
        document.getElementById("hasil-plaintext-teks").innerHTML = err.message;
    }
}

var clipboard = new ClipboardJS('.copy');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});