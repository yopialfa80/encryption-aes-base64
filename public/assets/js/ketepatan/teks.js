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

var enkripsiDDDl;
function enkripsi_teks_aes() {

    // var kunci_enkripsi = $('#kunci-enkripsi-teks-aes').val();
    // // var block = $('#plaintext-enkripsi-teks-aes').val();
    // AES_Init();

    // var block = new Array(16);
    // for(var i = 0; i < 16; i++)
    // block[i] = 0x11 * i;

    // var key = new Array(32);
    // for(var i = 0; i < 32; i++)
    // key[i] = i;

    // AES_ExpandKey(key);
    // AES_Encrypt(block, key);

    // AES_Done();

    var kunci_enkripsi = $('#kunci-enkripsi-teks-aes').val();
    var plaintext_enkripsi = $('#plaintext-enkripsi-teks-aes').val();
    $('#hasil-chippertext-teks-aes').html(enkripsiAdvancedEncryptionStandard(plaintext_enkripsi, kunci_enkripsi).toString().split('U2FsdGVkX1')[1]);
    
    $('.hidden-hasils-aes').fadeIn(1000);
}

function enkripsi_teks_rc4() {
    var kunci_enkripsi = $('#kunci-enkripsi-teks-rc4').val();
    var plaintext_enkripsi = $('#plaintext-enkripsi-teks-rc4').val();
    $('#hasil-chippertext-teks-rc4').html(enkripsiRivestCode4(plaintext_enkripsi, kunci_enkripsi).toString().split('U2FsdGVkX1')[1]);
    
    $('.hidden-hasils-rc4').fadeIn(1000);
}

function dekripsi_teks_aes() {
    $('#hasil-plaintext-teks-aes').hide();
    $('.hidden-hasils-dekripsi-aes').hide();
    var kunci_dekripsi = $('#kunci-dekripsi-teks-aes').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks-aes').val();
    $('.hidden-hasils-dekripsi-aes').fadeIn(1000);
    $('#hasil-plaintext-teks-aes').fadeIn(1000);
    var hasilDekripsiAes = dekripsiAdvancedEncryptionStandard("U2FsdGVkX1"+chippertext_dekripsi, kunci_dekripsi)
    if (hasilDekripsiAes == '') {
        $('#hasil-dekripsi-aes').css('background', '#FF3366')
        $('#hasil-plaintext-teks-aes').html('Error: Malformed UTF-8 data');
    } else {
        $('#hasil-dekripsi-aes').css('background', '#EFEFEF')
        $('#hasil-plaintext-teks-aes').html(hasilDekripsiAes);
    }
}

function dekripsi_teks_rc4() {
    $('#hasil-plaintext-teks-rc4').hide();
    var kunci_dekripsi = $('#kunci-dekripsi-teks-rc4').val();
    var chippertext_dekripsi = $('#plaintext-dekripsi-teks-rc4').val();
    $('#hasil-dekripsi-rc4').fadeIn(1000);
    $('#hasil-plaintext-teks-rc4').fadeIn(1000);
    $('.hidden-hasils-dekripsi-rc4').fadeIn(1000);
    try {
        $('#hasil-dekripsi-rc4').css('background', '#EFEFEF')
        $('#hasil-plaintext-teks-rc4').html(dekripsiRivestCode4("U2FsdGVkX1"+chippertext_dekripsi, kunci_dekripsi));
    } catch (error) {
        $('#hasil-dekripsi-rc4').css('background', '#FF3366')
        $('#hasil-plaintext-teks-rc4').html(error);
    }
}

