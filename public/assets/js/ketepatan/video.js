function init() {
    $('#hasil-enkripsi').hide();
    $('#hasil-dekripsi').hide();
    $('.hidden-video').hide();
}
init();

var clipboard = new ClipboardJS('.copy');
clipboard.on('success', function(e) {
    e.clearSelection();
});

var dataVideoAes = '';
$(document).on("change", "#formFile-aes", function(evt) {
    dataVideoAes = this;
    $('.hidden-video').show();
    var $source = $('#video-show-aes');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
});

function enkripsiVideoAes() {
    if (dataVideoAes.files && dataVideoAes.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var kunci_enkripsi = $('#kunci-enkripsi-teks-aes').val();
            $('#hasil-chippertext-teks-aes').html(enkripsiAdvancedEncryptionStandard(e.target.result, kunci_enkripsi).toString());
            $('#hasil-enkripsi-aes').fadeIn(1000);
        };
        reader.readAsDataURL(dataVideoAes.files[0]);
    }
}

var dataVideoRc4 = '';
$(document).on("change", "#formFile-rc4", function(evt) {
    dataVideoRc4 = this;
    $('.hidden-video').show();
    var $source = $('#video-show-rc4');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
});

function enkripsiVideoRc4() {
    if (dataVideoRc4.files && dataVideoRc4.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var kunci_enkripsi = $('#kunci-enkripsi-teks-rc4').val();
            $('#hasil-chippertext-teks-rc4').html(enkripsiAdvancedEncryptionStandard(e.target.result, kunci_enkripsi).toString());
            $('#hasil-enkripsi-rc4').fadeIn(1000);
        };
        reader.readAsDataURL(dataVideoRc4.files[0]);
    }
}

function dekripsiVideoAes() {
    var kunci_dekripsi = $('#kunci-dekripsi-teks-aes').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks-aes').val();
    $('#hasil-dekripsi-aes').fadeIn(1000);

    var hasilDecrypt = dekripsiAdvancedEncryptionStandard(chippertext_dekripsi, kunci_dekripsi)
    if (hasilDecrypt == '') {
        $('#hasil-dekripsi-aes').css('background', '#FF3366')
        $('#video-show-dekripsi-aes').hide();
        $('#hasil-plaintext-teks-aes').show();
        document.getElementById("hasil-plaintext-teks-aes").innerHTML = 'Error: Malformed UTF-8 data';
    } else {
        $('#hasil-dekripsi-aes').css('background', '#EFEFEF')
        $('#video-show-dekripsi-aes').show();
        $('#hasil-plaintext-teks-aes').hide();

        var html = '';
        html += '<source type="video/mp4"  id="video-show-dekripsi-aes" src="'+hasilDecrypt+'" style="width: 25px; height: 25px;">'
        $('#container-aes').html(html);
    }
}

function dekripsiVideoRc4() {
    var kunci_dekripsi = $('#kunci-dekripsi-teks-rc4').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks-rc4').val();
    $('#hasil-dekripsi-rc4').fadeIn(1000);
    var hasilDecrypt = dekripsiAdvancedEncryptionStandard(chippertext_dekripsi, kunci_dekripsi)
    if (hasilDecrypt == '') {
        $('#hasil-dekripsi-rc4').css('background', '#FF3366')
        $('#video-show-dekripsi-rc4').hide();
        $('#hasil-plaintext-teks-rc4').show();
        document.getElementById("hasil-plaintext-teks-rc4").innerHTML = 'Error: Malformed UTF-8 data';
    } else {
        $('#hasil-dekripsi-rc4').css('background', '#EFEFEF')
        $('#video-show-dekripsi-rc4').show();
        $('#hasil-plaintext-teks-rc4').hide();
        
        var html = '';
        html += '<source type="video/mp4"  id="video-show-dekripsi-rc4" src="'+hasilDecrypt+'" style="width: 25px; height: 25px;">'
        $('#container-rc4').html(html);
    }
}

function getEncodedVideoString($type, $file) {
    console.log(`$file`, $file)
    // return "data:video/" + $type + ";base64," + atob($file);
 }