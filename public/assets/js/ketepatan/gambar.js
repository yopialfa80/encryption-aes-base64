function init() {
    $('#hasil-enkripsi').hide();
    $('#hasil-dekripsi').hide();
    $('.hidden-image').hide();
}
init();

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

var dataImage = '';
function readBackgroundURL(input) {
    dataImage = input;
    $('.hidden-image').show();
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image-show')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function enkripsiImage() {
    if (dataImage.files && dataImage.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var kunci_enkripsi = $('#kunci-enkripsi-teks').val();
            $('#hasil-chippertext-teks').html(encrypt(e.target.result, kunci_enkripsi));
            $('#hasil-enkripsi').fadeIn(1000);
        };
        reader.readAsDataURL(dataImage.files[0]);
    }
}

function dekripsiImage(input) {
    var kunci_dekripsi = $('#kunci-dekripsi-teks').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks').val();
    $('#hasil-dekripsi').fadeIn(1000);

    try {
        $('#hasil-plaintext-gambar').show();
        $('#hasil-plaintext-teks').hide();
        var hasilDecrypt = decrypt(chippertext_dekripsi, kunci_dekripsi);
        $('#hasil-dekripsi').addClass('alert-fill-primary');
        $('#hasil-dekripsi').removeClass('alert-fill-danger');
        
        $('#hasil-plaintext-gambar').attr('src', hasilDecrypt);

    }
    catch(err) {
        $('#hasil-plaintext-gambar').attr('src', '');
        $('#hasil-plaintext-gambar').hide();
        $('#hasil-plaintext-teks').show();
        $('#hasil-dekripsi').removeClass('alert-fill-primary');
        $('#hasil-dekripsi').addClass('alert-fill-danger');
        document.getElementById("hasil-plaintext-teks").innerHTML = err.message;
        
    }
}