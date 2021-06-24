function init() {
    $('#hasil-enkripsi').hide();
    $('#hasil-dekripsi').hide();
}
init();

function enkripsi_teks() {
    var kunci_enkripsi = $('#kunci-enkripsi-teks').val();
    var plaintext_enkripsi = $('#plaintext-enkripsi-teks').val();
    $('#hasil-chippertext-teks').html(encrypt(plaintext_enkripsi, kunci_enkripsi));
    
    
    $('#hasil-enkripsi').fadeIn(1000);
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