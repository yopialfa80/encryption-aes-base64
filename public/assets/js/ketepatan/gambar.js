function init() {
    $('#hasil-enkripsi').hide();
    $('#hasil-dekripsi').hide();
    $('.hidden-hasils-rc4').hide()
    $('.hidden-hasils-aes').hide()
    $('.hidden-hasils-dekripsi-rc4').hide()
    $('.hidden-hasils-dekripsi-aes').hide()
    $('.hidden-image-aes').hide();
    $('.hidden-image-rc4').hide();
}
init();

var clipboard = new ClipboardJS('.copy');
clipboard.on('success', function(e) {
    e.clearSelection();
});

var dataImageAes = '';
function readBackgroundURLaes(input) {
    dataImageAes = input;
    $('.hidden-image-aes').show();
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image-show-aes')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

var dataImageRc4 = '';
function readBackgroundURLrc4(input) {
    dataImageRc4 = input;
    $('.hidden-image-rc4').show();
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image-show-rc4')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function enkripsiImageAes() {
    if (dataImageAes.files && dataImageAes.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var kunci_enkripsi = $('#kunci-enkripsi-teks-aes').val();
            $('#hasil-chippertext-teks-aes').html(enkripsiAdvancedEncryptionStandard(e.target.result, kunci_enkripsi).toString().split('U2FsdGVkX1')[1]);
            $('#hasil-enkripsi-aes').fadeIn(1000);
        };
        reader.readAsDataURL(dataImageAes.files[0]);
    }
}

function dekripsiImageAes() {
    var kunci_dekripsi = $('#kunci-dekripsi-teks-aes').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks-aes').val();
    $('#hasil-dekripsi-aes').fadeIn(1000);
    try {
        $('#hasil-dekripsi-aes').css('background', '#EFEFEF')
        $('#hasil-plaintext-gambar-aes').show();
        $('#hasil-plaintext-teks-aes').hide();
        var hasilDecrypt = dekripsiAdvancedEncryptionStandard("U2FsdGVkX1"+chippertext_dekripsi, kunci_dekripsi);
        $('#hasil-plaintext-gambar-aes').attr('src', hasilDecrypt);
    }
    catch(err) {
        $('#hasil-dekripsi-aes').css('background', '#FF3366')
        $('#hasil-plaintext-gambar-aes').attr('src', '');
        $('#hasil-plaintext-gambar-aes').hide();
        $('#hasil-plaintext-teks-aes').show();
        
        document.getElementById("hasil-plaintext-teks-aes").innerHTML = err.message;
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------
function enkripsiImageRc4() {
    if (dataImageRc4.files && dataImageRc4.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var kunci_enkripsi = $('#kunci-enkripsi-teks-rc4').val();
            $('#hasil-chippertext-teks-rc4').html(enkripsiRivestCode4(e.target.result, kunci_enkripsi).toString().split('U2FsdGVkX1')[1]);
            $('#hasil-enkripsi-rc4').fadeIn(1000);
        };
        reader.readAsDataURL(dataImageRc4.files[0]);
    }
}

function dekripsiImageRc4() {
    var kunci_dekripsi = $('#kunci-dekripsi-teks-rc4').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks-rc4').val();
    $('#hasil-dekripsi-rc4').fadeIn(1000);
    try {
        $('#hasil-dekripsi-rc4').css('background', '#EFEFEF')
        $('#hasil-plaintext-gambar-rc4').show();
        $('#hasil-plaintext-teks-rc4').hide();
        var hasilDecrypt = dekripsiRivestCode4("U2FsdGVkX1"+chippertext_dekripsi, kunci_dekripsi);
        $('#hasil-plaintext-gambar-rc4').attr('src', hasilDecrypt);
    }
    catch(err) {
        $('#hasil-dekripsi-rc4').css('background', '#FF3366')
        $('#hasil-plaintext-gambar-rc4').attr('src', '');
        $('#hasil-plaintext-gambar-rc4').hide();
        $('#hasil-plaintext-teks-rc4').show();
        
        document.getElementById("hasil-plaintext-teks-rc4").innerHTML = err.message;
    }
}