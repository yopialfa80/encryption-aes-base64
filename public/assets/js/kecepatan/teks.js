
function init() {
    $('.result-card').hide();
}
init();

var e_aesbase64 = 0;
var e_aes = 0;
var e_base64 = 0;
var e_des = 0;
var e_rc4 = 0;
var e_3des = 0;
var e_rabbit = 0;
var e_drop = 0;

var d_aesbase64 = 0;
var d_aes = 0;
var d_base64 = 0;
var d_des = 0;
var d_rc4 = 0;
var d_3des = 0;
var d_rabbit = 0;
var d_drop = 0;

function startTestKecepatan() {
    $('.result-card').hide();
    var kunci = $('#kunci-enkripsi-teks').val();
    var plaintext = $('#plaintext-enkripsi-teks').val();
    AESdanBase64(plaintext, kunci);
    AES(plaintext, kunci);
    base64s(plaintext, kunci);
    DES(plaintext, kunci);
    tripleDES(plaintext, kunci);
    Rabbit(plaintext, kunci);
    RC4(plaintext, kunci);
    RC4Drop(plaintext, kunci);
    $('.result-card').fadeIn('slow');

    setTimeout(() => {
        initChartEnkripsi()
        initChartDekripsi()
    }, 100);
}

// ---------------------------------------------------  AES & Base64 --------------------------------------------------------------
async function AESdanBase64(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const enkripsiAE = await enkripsiAESbase64(plaintext , kunci);
    var endEnkripsi = performance.now();

    e_aesbase64 = Math.round(endEnkripsi - startEnkripsi);
    $('#enkripsiAES').html(e_aesbase64 + ' <span class="milisecond-speed">milisecond</span>')
   
    // Dekripsi
    var startDekripsi = performance.now();
    await dekripsiAESbase64(plaintext , kunci);
    var endDekripsi = performance.now();
    d_aesbase64 = Math.round(endDekripsi - startDekripsi)
    $('#dekripsiAES').html(d_aesbase64 + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjangAES').html(enkripsiAE.length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiAESbase64(plaintext, kunci){
    var resultEnkripsi = Base64.encode(CryptoJSAesJson.encrypt(plaintext, kunci));
    return resultEnkripsi;
};

async function dekripsiAESbase64(plaintext, kunci){
    var resultEnkripsi = Base64.encode(CryptoJSAesJson.encrypt(plaintext, kunci));
    return resultEnkripsi;
};
// ---------------------------------------------------  AES & Base64 --------------------------------------------------------------

// ---------------------------------------------------  AES --------------------------------------------------------------
async function AES(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const enkripsiAE = await enkripsiAES(plaintext , kunci);
    var endEnkripsi = performance.now();
    e_aes = Math.round(endEnkripsi - startEnkripsi)
    $('#enkripsiAES1').html(e_aes + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    await dekripsiAES(plaintext , kunci);
    var endDekripsi = performance.now();
    d_aes = Math.round(endDekripsi - startDekripsi)
    $('#dekripsiAES1').html(d_aes + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjangAES1').html(enkripsiAE.length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiAES(plaintext, kunci){
    var resultEnkripsi = CryptoJSAesJson.encrypt(plaintext, kunci);
    return resultEnkripsi;
};

async function dekripsiAES(plaintext, kunci){
    var resultEnkripsi = CryptoJSAesJson.encrypt(plaintext, kunci);
    return resultEnkripsi;
};
// ---------------------------------------------------  AES --------------------------------------------------------------

// ---------------------------------------------------  BASE64 --------------------------------------------------------------
async function base64s(plaintext, kunci){
    // Enkripsi
    
    var startEnkripsi = performance.now();
    const enkripsiAE = await enkripsibase64s(plaintext , kunci);
    var endEnkripsi = performance.now();
    e_base64 = Math.round(endEnkripsi - startEnkripsi)
    $('#enkripsiBase64').html(e_base64 + ' <span class="milisecond-speed">milisecond</span>')
    // Dekripsi
    var startDekripsi = performance.now();
    await dekripsibase64s(plaintext , kunci);
    var endDekripsi = performance.now();
    d_base64 = Math.round(endDekripsi - startDekripsi)
    $('#dekripsiBase64').html(d_base64 + ' <span class="milisecond-speed">milisecond</span>')

    $('#panjangBase64').html(enkripsiAE.length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsibase64s(plaintext, kunci){
    var resultEnkripsi = Base64.encode(plaintext);
    return resultEnkripsi;
};

async function dekripsibase64s(plaintext, kunci){
    var resultEnkripsi = Base64.decode(plaintext);
    return resultEnkripsi;
};
// ---------------------------------------------------  BASE64 --------------------------------------------------------------

// ---------------------------------------------------  DES -----------------------------------------------------------------------
async function DES(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const hasilEnkripsiDES = await enkripsiDES(plaintext, kunci)
    var endEnkripsi = performance.now();
    e_des = Math.round(endEnkripsi - startEnkripsi)
    $('#enkripsiDES').html(e_des + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiDES = await dekripsiDES(hasilEnkripsiDES, kunci)
    var endDekripsi = performance.now();
    d_des = Math.round(endDekripsi - startDekripsi)
    $('#dekripsiDES').html(d_des + ' <span class="milisecond-speed">milisecond</span>')

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
    e_3des = Math.round(endEnkripsi - startEnkripsi)
    $('#enkripsiTripleDES').html(e_3des + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiTripleDES = await dekripsiTripleDES(hasilEnkripsiTripleDES, kunci)
    var endDekripsi = performance.now();
    d_3des = Math.round(endDekripsi - startDekripsi)
    $('#dekripsiTripleDES').html(d_3des + ' <span class="milisecond-speed">milisecond</span>')

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
    e_rabbit = Math.round(endEnkripsi - startEnkripsi)
    $('#enkripsiRabbit').html(e_rabbit + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiRabbit = await dekripsiRabbit(hasilEnkripsiRabbit, kunci)
    var endDekripsi = performance.now();

    d_rabbit = Math.round(endDekripsi - startDekripsi)
    $('#dekripsiRabbit').html(d_rabbit + ' <span class="milisecond-speed">milisecond</span>')

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

    e_rc4 = Math.round(endEnkripsi - startEnkripsi)
    $('#enkripsiRC4').html(e_rc4 + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiRC4 = await dekripsiRC4(hasilEnkripsiRC4, kunci)
    var endDekripsi = performance.now();

    d_rc4 = Math.round(endDekripsi - startDekripsi)
    $('#dekripsiRC4').html(d_rc4 + ' <span class="milisecond-speed">milisecond</span>')

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

    e_drop = Math.round(endEnkripsi - startEnkripsi)
    $('#enkripsiRC4Drop').html(endEnkripsi - startEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiRC4Drop = await dekripsiRC4Drop(hasilEnkripsiRC4Drop, kunci)
    var endDekripsi = performance.now();

    d_drop = Math.round(endDekripsi - startDekripsi)
    $('#dekripsiRC4Drop').html(d_drop + ' <span class="milisecond-speed">milisecond</span>')

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

// Chart

var chartEnkripsi;
var chartDekripsi;
  function initChartEnkripsi() {
    var ctx = $('#chartEnkripsi');
    const labels = [
        'AES & Base64',
        'AES',
        'Base64',
        'DES',
        'RC4',
        '3DES',
        'Rabbit',
        'RC4 - Drop',
      ];
      const data = {
            labels: labels,
            datasets: [{
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            barThickness: 15,
            minBarLength: 1,
            label: 'Kecepatan Enkripsi',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [e_aesbase64, e_aes, e_base64, e_des, e_rc4, e_3des, e_rabbit, e_drop],
        }]
      };


      const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'x',
        },
      };

      if (chartEnkripsi) {
        chartEnkripsi.destroy();
        }
        chartEnkripsi = new Chart(ctx, config);
  }

  function initChartDekripsi() {
    var ctx = $('#chartDekripsi');
    const labels = [
        'AES & Base64',
        'AES',
        'Base64',
        'DES',
        'RC4',
        '3DES',
        'Rabbit',
        'RC4 - Drop',
      ];
      const data = {
            labels: labels,
            datasets: [{
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            barThickness: 15,
            minBarLength: 1,
            label: 'Kecepatan Dekripsi',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [d_aesbase64, d_aes, d_base64, d_des, d_rc4, d_3des, d_rabbit, d_drop],
        }]
      };


      const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'x',
        },
      };

      if (chartDekripsi) {
        chartDekripsi.destroy();
        }
        chartDekripsi = new Chart(ctx, config);
  }