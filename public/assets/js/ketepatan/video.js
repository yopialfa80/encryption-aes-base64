function init() {
    $('#hasil-enkripsi').hide();
    $('#hasil-dekripsi').hide();
    $('.hidden-video').hide();
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

var dataVideo = '';

$(document).on("change", ".file_multi_video", function(evt) {
    dataVideo = this;
    $('.hidden-video').show();
    var $source = $('#video-show');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
});

function enkripsiVideo() {
    if (dataVideo.files && dataVideo.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var kunci_enkripsi = $('#kunci-enkripsi-teks').val();
            $('#hasil-chippertext-teks').html(encrypt(e.target.result, kunci_enkripsi));
            $('#hasil-enkripsi').fadeIn(1000);
        };
        reader.readAsDataURL(dataVideo.files[0]);
    }
}

function dekripsiImage(input) {
    var kunci_dekripsi = $('#kunci-dekripsi-teks').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks').val();
    $('#hasil-dekripsi').fadeIn(1000);
    var hasilDecrypt;
    try {
        $('#video-show-dekripsi').show();
        $('#hasil-plaintext-teks').hide();
        hasilDecrypt = decrypt(chippertext_dekripsi, kunci_dekripsi);
        $('#video-show-dekripsi').attr('src', hasilDecrypt);
        $('#hasil-dekripsi').addClass('alert-fill-primary');
        $('#hasil-dekripsi').removeClass('alert-fill-danger');
        console.log(`hasilDecrypt`, hasilDecrypt)
        
    }
    catch(err) {
        $('#video-show-dekripsi').hide();
        $('#hasil-plaintext-teks').show();
        $('#hasil-dekripsi').removeClass('alert-fill-primary');
        $('#hasil-dekripsi').addClass('alert-fill-danger');
        document.getElementById("hasil-plaintext-teks").innerHTML = err.message;
        
    }

    
}