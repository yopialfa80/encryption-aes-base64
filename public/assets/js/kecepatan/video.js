function init() {
    $('.result-card').hide();
}
init();

var dataVideo = '';

$(document).on("change", ".file_multi_video", function(evt) {
    dataVideo = this;
    $('.hidden-video').show();
    var $source = $('#video-show');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
});

function startTestKecepatan() {
    $('.result-card').hide();

    var kunci = $('#kunci-enkripsi-teks').val();

    if (dataVideo.files && dataVideo.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            AESdanBase64(e.target.result, kunci);
            DES(e.target.result, kunci);
            tripleDES(e.target.result, kunci);
            Rabbit(e.target.result, kunci);
            RC4(e.target.result, kunci);
            RC4Drop(e.target.result, kunci);
        };
        reader.readAsDataURL(dataVideo.files[0]);
    }

    $('.result-card').fadeIn('slow');
}


// ---------------------------------------------------  AES & Base64 --------------------------------------------------------------
async function AESdanBase64(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const enkripsiAE = await enkripsiAES(plaintext , kunci);
    var endEnkripsi = performance.now();
    $('#enkripsiAES').html(endEnkripsi - startEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    await enkripsiAES(plaintext , kunci);
    var endDekripsi = performance.now();
    $('#dekripsiAES').html(endDekripsi - startDekripsi + ' <span class="milisecond-speed">milisecond</span>')

    console.log(`bener lu?`, enkripsiAE)
    $('#panjangAES').html(enkripsiAE.length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiAES(plaintext, kunci){
    var resultEnkripsi = Base64.encode(CryptoJSAesJson.encrypt(plaintext, kunci));
    return resultEnkripsi;
};

async function dekripsiAES(plaintext, kunci){
    var resultEnkripsi = Base64.encode(CryptoJSAesJson.encrypt(plaintext, kunci));
    return resultEnkripsi;
};
// ---------------------------------------------------  AES & Base64 --------------------------------------------------------------

// ---------------------------------------------------  DES -----------------------------------------------------------------------
async function DES(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const hasilEnkripsiDES = await enkripsiDES(plaintext, kunci)
    var endEnkripsi = performance.now();
    $('#enkripsiDES').html(endEnkripsi - startEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiDES = await dekripsiDES(hasilEnkripsiDES, kunci)
    console.log(`hasilDekripsiDES`, hasilDekripsiDES)
    var endDekripsi = performance.now();
    $('#dekripsiDES').html(endDekripsi - startDekripsi + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjangDES').html(hasilEnkripsiDES.length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiDES(plainText, kunci) {
    return resultEnkripsi = CryptoJS.enc.Base64.stringify(CryptoJS.DES.encrypt(window.btoa(plainText), CryptoJS.enc.Utf8.parse(kunci), { iv: CryptoJS.lib.WordArray.create([0, 0])}).ciphertext);
}

async function dekripsiDES(enkripsiDES, kunci) {
    var resultDekripsi = CryptoJS.enc.Base64.parse(CryptoJS.DES.decrypt({ciphertext: CryptoJS.enc.Base64.parse(enkripsiDES)}, CryptoJS.enc.Utf8.parse(kunci), { iv: CryptoJS.lib.WordArray.create([0, 0]) }).toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8);
    return resultDekripsi;
}
// ---------------------------------------------------  DES -----------------------------------------------------------------------

// ---------------------------------------------------  TRIPLE DES ----------------------------------------------------------------
async function tripleDES(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const hasilEnkripsiTripleDES = await enkripsiTripleDES(plaintext, kunci)
    var endEnkripsi = performance.now();
    $('#enkripsiTripleDES').html(endEnkripsi - startEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiTripleDES = await dekripsiTripleDES(hasilEnkripsiTripleDES, kunci)
    console.log(`hasilDekripsiDES`, hasilEnkripsiTripleDES)
    var endDekripsi = performance.now();
    $('#dekripsiTripleDES').html(endDekripsi - startDekripsi + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjangTripleDES').html(hasilEnkripsiTripleDES.toString().length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiTripleDES(plaintext, kunci){
    var resultEnkripsi = CryptoJS.TripleDES.encrypt(plaintext, kunci)
    return resultEnkripsi;
};

async function dekripsiTripleDES(plaintext, kunci){
    var resultDekripsi = CryptoJS.TripleDES.decrypt(plaintext, kunci).toString(CryptoJS.enc.Utf8);
    return resultDekripsi;
};
// ---------------------------------------------------  TRIPLE DES ----------------------------------------------------------------

// ---------------------------------------------------  RABBIT --------------------------------------------------------------------
async function Rabbit(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const hasilEnkripsiRabbit = await enkripsiRabbit(plaintext, kunci)
    var endEnkripsi = performance.now();
    $('#enkripsiRabbit').html(endEnkripsi - startEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiRabbit = await dekripsiRabbit(hasilEnkripsiRabbit, kunci)
    console.log(`hasilEnkripsiRabbit`, hasilEnkripsiRabbit.toString())
    var endDekripsi = performance.now();
    $('#dekripsiRabbit').html(endDekripsi - startDekripsi + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjangRabbit').html(hasilEnkripsiRabbit.toString().length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiRabbit(plaintext, kunci){
    var resultEnkripsi = CryptoJS.Rabbit.encrypt(plaintext, kunci);
    return resultEnkripsi;
};

async function dekripsiRabbit(plaintext, kunci){
    var resultDekripsi = CryptoJS.Rabbit.decrypt(plaintext, kunci);
    return resultDekripsi;
};
// ---------------------------------------------------  RABBIT --------------------------------------------------------------------

// ---------------------------------------------------  RC4 -----------------------------------------------------------------------
async function RC4(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const hasilEnkripsiRC4 = await enkripsiRC4(plaintext, kunci)
    var endEnkripsi = performance.now();
    $('#enkripsiRC4').html(endEnkripsi - startEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiRC4 = await dekripsiRC4(hasilEnkripsiRC4, kunci)
    console.log(`hasilEnkripsiRC4`, hasilEnkripsiRC4.toString())
    var endDekripsi = performance.now();
    $('#dekripsiRC4').html(endDekripsi - startDekripsi + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjangRC4').html(hasilEnkripsiRC4.toString().length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiRC4(plaintext, kunci){
    var resultEnkripsi = CryptoJS.RC4.encrypt(plaintext, kunci);
    return resultEnkripsi;
};

async function dekripsiRC4(plaintext, kunci){
    var resultDekripsi = CryptoJS.RC4.decrypt(plaintext, kunci);
    return resultDekripsi;
};
// ---------------------------------------------------  RC4 -----------------------------------------------------------------------

// ---------------------------------------------------  RC4 -----------------------------------------------------------------------
async function RC4Drop(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const hasilEnkripsiRC4Drop = await enkripsiRC4Drop(plaintext, kunci)
    var endEnkripsi = performance.now();
    $('#enkripsiRC4Drop').html(endEnkripsi - startEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiRC4Drop = await dekripsiRC4Drop(hasilEnkripsiRC4Drop, kunci)
    console.log(`hasilEnkripsiRC4Drop`, hasilEnkripsiRC4Drop.toString())
    var endDekripsi = performance.now();
    $('#dekripsiRC4Drop').html(endDekripsi - startDekripsi + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjangRC4Drop').html(hasilEnkripsiRC4Drop.toString().length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiRC4Drop(plaintext, kunci){
    var resultEnkripsi = CryptoJS.RC4Drop.encrypt(plaintext, kunci);
    return resultEnkripsi;
};

async function dekripsiRC4Drop(plaintext, kunci){
    var resultDekripsi = CryptoJS.RC4Drop.decrypt(plaintext, kunci);
    return resultDekripsi;
};
// ---------------------------------------------------  RC4 -----------------------------------------------------------------------