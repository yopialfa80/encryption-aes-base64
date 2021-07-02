
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
    // AESdanBase64(plaintext, kunci);
    AES(plaintext, kunci);
    // base64s(plaintext, kunci);
    // DES(plaintext, kunci);
    // tripleDES(plaintext, kunci);
    // Rabbit(plaintext, kunci);
    RC4(plaintext, kunci);
    // RC4Drop(plaintext, kunci);
    $('.result-card').fadeIn('slow');

    setTimeout(() => {
        initChartEnkripsi()
        initChartDekripsi()
    }, 100);
}

// ---------------------------------------------------  AES --------------------------------------------------------------
async function AES(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const enkripsiAE = await enkripsiAES(plaintext , kunci);
    var endEnkripsi = performance.now();
    e_aes = endEnkripsi - startEnkripsi
    if (e_aes.toString().includes(".")) {
        $('#enkripsi-AES').html(e_aes.toFixed(2) + ' <span class="milisecond-speed">milisecond</span>')
    } else {
        $('#enkripsi-AES').html(e_aes + ' <span class="milisecond-speed">milisecond</span>')
    }
    

    // Dekripsi
    var startDekripsi = performance.now();
    await dekripsiAES(enkripsiAE , kunci);
    var endDekripsi = performance.now();
    d_aes = endDekripsi - startDekripsi
    if (d_aes.toString().includes(".")) {
        $('#dekripsi-AES').html(d_aes.toFixed(2) + ' <span class="milisecond-speed">milisecond</span>')
    } else {
        $('#dekripsi-AES').html(d_aes + ' <span class="milisecond-speed">milisecond</span>')
    }
};

async function enkripsiAES(plaintext, kunci){
    var resultEnkripsi = enkripsiAdvancedEncryptionStandard(plaintext, kunci).toString().split('U2FsdGVkX1')[1];
    return resultEnkripsi;
};

async function dekripsiAES(chippertext, kunci){
    var resultEnkripsi = dekripsiAdvancedEncryptionStandard("U2FsdGVkX1"+chippertext, kunci)
    return resultEnkripsi;
};
// ---------------------------------------------------  AES --------------------------------------------------------------

// ---------------------------------------------------  RC4 -----------------------------------------------------------------------
async function RC4(plaintext, kunci){
    // Enkripsi
    var startEnkripsi = performance.now();
    const hasilEnkripsiRC4 = await enkripsiRC4(plaintext, kunci)
    var endEnkripsi = performance.now();
    e_rc4 = endEnkripsi - startEnkripsi
    if (e_rc4.toString().includes(".")) {
        $('#enkripsi-RC4').html(e_rc4.toFixed(2) + ' <span class="milisecond-speed">milisecond</span>')
    } else {
        $('#enkripsi-RC4').html(e_rc4 + ' <span class="milisecond-speed">milisecond</span>')
    }
    
    // Dekripsi
    var startDekripsi = performance.now();
    const hasilDekripsiRC4 = await dekripsiRC4(hasilEnkripsiRC4, kunci)
    var endDekripsi = performance.now();
    d_rc4 = endDekripsi - startDekripsi
    if (d_rc4.toString().includes(".")) {
        $('#dekripsi-RC4').html(d_rc4.toFixed(2) + ' <span class="milisecond-speed">milisecond</span>')
    } else {
        $('#dekripsi-RC4').html(d_rc4 + ' <span class="milisecond-speed">milisecond</span>')
    }

    
    // $('#panjangRC4').html(hasilEnkripsiRC4.toString().length + ' <span class="milisecond-speed">Kata</span>')
};

async function enkripsiRC4(plaintext, kunci){
    var resultEnkripsi = enkripsiRivestCode4(plaintext, kunci).toString().split('U2FsdGVkX1')[1]
    return resultEnkripsi;
};

async function dekripsiRC4(chippertext, kunci){
    var resultDekripsi = dekripsiRivestCode4("U2FsdGVkX1"+chippertext, kunci)
    return resultDekripsi;
};
// ---------------------------------------------------  RC4 -----------------------------------------------------------------------

// // ---------------------------------------------------  AES & Base64 --------------------------------------------------------------
// async function AESdanBase64(plaintext, kunci){
//     // Enkripsi
//     var startEnkripsi = performance.now();
//     const enkripsiAE = await enkripsiAESbase64(plaintext , kunci);
//     var endEnkripsi = performance.now();

//     e_aesbase64 = Math.round(endEnkripsi - startEnkripsi);
//     $('#enkripsiAES').html(e_aesbase64 + ' <span class="milisecond-speed">milisecond</span>')
   
//     // Dekripsi
//     var startDekripsi = performance.now();
//     await dekripsiAESbase64(plaintext , kunci);
//     var endDekripsi = performance.now();
//     d_aesbase64 = Math.round(endDekripsi - startDekripsi)
//     $('#dekripsiAES').html(d_aesbase64 + ' <span class="milisecond-speed">milisecond</span>')

//     $('#panjangAES').html(enkripsiAE.length + ' <span class="milisecond-speed">Kata</span>')
// };

// async function enkripsiAESbase64(plaintext, kunci){
//     var resultEnkripsi = Base64.encode(CryptoJSAesJson.encrypt(plaintext, kunci));
//     return resultEnkripsi;
// };

// async function dekripsiAESbase64(plaintext, kunci){
//     var resultEnkripsi = Base64.encode(CryptoJSAesJson.encrypt(plaintext, kunci));
//     return resultEnkripsi;
// };
// // ---------------------------------------------------  AES & Base64 --------------------------------------------------------------



// // ---------------------------------------------------  BASE64 --------------------------------------------------------------
// async function base64s(plaintext, kunci){
//     // Enkripsi
    
//     var startEnkripsi = performance.now();
//     const enkripsiAE = await enkripsibase64s(plaintext , kunci);
//     var endEnkripsi = performance.now();
//     e_base64 = Math.round(endEnkripsi - startEnkripsi)
//     $('#enkripsiBase64').html(e_base64 + ' <span class="milisecond-speed">milisecond</span>')
//     // Dekripsi
//     var startDekripsi = performance.now();
//     await dekripsibase64s(plaintext , kunci);
//     var endDekripsi = performance.now();
//     d_base64 = Math.round(endDekripsi - startDekripsi)
//     $('#dekripsiBase64').html(d_base64 + ' <span class="milisecond-speed">milisecond</span>')

//     $('#panjangBase64').html(enkripsiAE.length + ' <span class="milisecond-speed">Kata</span>')
// };

// async function enkripsibase64s(plaintext, kunci){
//     var resultEnkripsi = Base64.encode(plaintext);
//     return resultEnkripsi;
// };

// async function dekripsibase64s(plaintext, kunci){
//     var resultEnkripsi = Base64.decode(plaintext);
//     return resultEnkripsi;
// };
// // ---------------------------------------------------  BASE64 --------------------------------------------------------------

// // ---------------------------------------------------  DES -----------------------------------------------------------------------
// async function DES(plaintext, kunci){
//     // Enkripsi
//     var startEnkripsi = performance.now();
//     const hasilEnkripsiDES = await enkripsiDES(plaintext, kunci)
//     var endEnkripsi = performance.now();
//     e_des = Math.round(endEnkripsi - startEnkripsi)
//     $('#enkripsiDES').html(e_des + ' <span class="milisecond-speed">milisecond</span>')

//     // Dekripsi
//     var startDekripsi = performance.now();
//     const hasilDekripsiDES = await dekripsiDES(hasilEnkripsiDES, kunci)
//     var endDekripsi = performance.now();
//     d_des = Math.round(endDekripsi - startDekripsi)
//     $('#dekripsiDES').html(d_des + ' <span class="milisecond-speed">milisecond</span>')

//     $('#panjangDES').html(hasilEnkripsiDES.length + ' <span class="milisecond-speed">Kata</span>')
// };

// async function enkripsiDES(plainText, kunci) {
//     return resultEnkripsi = CryptoJS.enc.Base64.stringify(CryptoJS.DES.encrypt(window.btoa(plainText), CryptoJS.enc.Utf8.parse(kunci), { iv: CryptoJS.lib.WordArray.create([0, 0])}).ciphertext);
// }

// async function dekripsiDES(enkripsiDES, kunci) {
//     var resultDekripsi = CryptoJS.enc.Base64.parse(CryptoJS.DES.decrypt({ciphertext: CryptoJS.enc.Base64.parse(enkripsiDES)}, CryptoJS.enc.Utf8.parse(kunci), { iv: CryptoJS.lib.WordArray.create([0, 0]) }).toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8);
//     return resultDekripsi;
// }
// // ---------------------------------------------------  DES -----------------------------------------------------------------------

// // ---------------------------------------------------  TRIPLE DES ----------------------------------------------------------------
// async function tripleDES(plaintext, kunci){
//     // Enkripsi
//     var startEnkripsi = performance.now();
//     const hasilEnkripsiTripleDES = await enkripsiTripleDES(plaintext, kunci)
//     var endEnkripsi = performance.now();
//     e_3des = Math.round(endEnkripsi - startEnkripsi)
//     $('#enkripsiTripleDES').html(e_3des + ' <span class="milisecond-speed">milisecond</span>')

//     // Dekripsi
//     var startDekripsi = performance.now();
//     const hasilDekripsiTripleDES = await dekripsiTripleDES(hasilEnkripsiTripleDES, kunci)
//     var endDekripsi = performance.now();
//     d_3des = Math.round(endDekripsi - startDekripsi)
//     $('#dekripsiTripleDES').html(d_3des + ' <span class="milisecond-speed">milisecond</span>')

//     $('#panjangTripleDES').html(hasilEnkripsiTripleDES.toString().length + ' <span class="milisecond-speed">Kata</span>')
// };

// async function enkripsiTripleDES(plaintext, kunci){
//     var resultEnkripsi = CryptoJS.TripleDES.encrypt(plaintext, kunci)
//     return resultEnkripsi;
// };

// async function dekripsiTripleDES(plaintext, kunci){
//     var resultDekripsi = CryptoJS.TripleDES.decrypt(plaintext, kunci).toString(CryptoJS.enc.Utf8);
//     return resultDekripsi;
// };
// // ---------------------------------------------------  TRIPLE DES ----------------------------------------------------------------

// // ---------------------------------------------------  RABBIT --------------------------------------------------------------------
// async function Rabbit(plaintext, kunci){
//     // Enkripsi
//     var startEnkripsi = performance.now();
//     const hasilEnkripsiRabbit = await enkripsiRabbit(plaintext, kunci)
//     var endEnkripsi = performance.now();
//     e_rabbit = Math.round(endEnkripsi - startEnkripsi)
//     $('#enkripsiRabbit').html(e_rabbit + ' <span class="milisecond-speed">milisecond</span>')

//     // Dekripsi
//     var startDekripsi = performance.now();
//     const hasilDekripsiRabbit = await dekripsiRabbit(hasilEnkripsiRabbit, kunci)
//     var endDekripsi = performance.now();

//     d_rabbit = Math.round(endDekripsi - startDekripsi)
//     $('#dekripsiRabbit').html(d_rabbit + ' <span class="milisecond-speed">milisecond</span>')

//     $('#panjangRabbit').html(hasilEnkripsiRabbit.toString().length + ' <span class="milisecond-speed">Kata</span>')
// };

// async function enkripsiRabbit(plaintext, kunci){
//     var resultEnkripsi = CryptoJS.Rabbit.encrypt(plaintext, kunci);
//     return resultEnkripsi;
// };

// async function dekripsiRabbit(plaintext, kunci){
//     var resultDekripsi = CryptoJS.Rabbit.decrypt(plaintext, kunci);
//     return resultDekripsi;
// };
// // ---------------------------------------------------  RABBIT --------------------------------------------------------------------



// // ---------------------------------------------------  RC4 -----------------------------------------------------------------------
// async function RC4Drop(plaintext, kunci){
//     // Enkripsi
//     var startEnkripsi = performance.now();
//     const hasilEnkripsiRC4Drop = await enkripsiRC4Drop(plaintext, kunci)
//     var endEnkripsi = performance.now();

//     e_drop = Math.round(endEnkripsi - startEnkripsi)
//     $('#enkripsiRC4Drop').html(endEnkripsi - startEnkripsi + ' <span class="milisecond-speed">milisecond</span>')

//     // Dekripsi
//     var startDekripsi = performance.now();
//     const hasilDekripsiRC4Drop = await dekripsiRC4Drop(hasilEnkripsiRC4Drop, kunci)
//     var endDekripsi = performance.now();

//     d_drop = Math.round(endDekripsi - startDekripsi)
//     $('#dekripsiRC4Drop').html(d_drop + ' <span class="milisecond-speed">milisecond</span>')

//     $('#panjangRC4Drop').html(hasilEnkripsiRC4Drop.toString().length + ' <span class="milisecond-speed">Kata</span>')
// };

// async function enkripsiRC4Drop(plaintext, kunci){
//     var resultEnkripsi = CryptoJS.RC4Drop.encrypt(plaintext, kunci);
//     return resultEnkripsi;
// };

// async function dekripsiRC4Drop(plaintext, kunci){
//     var resultDekripsi = CryptoJS.RC4Drop.decrypt(plaintext, kunci);
//     return resultDekripsi;
// };
// // ---------------------------------------------------  RC4 -----------------------------------------------------------------------

// Chart

var chartEnkripsi;
var chartDekripsi;
function initChartEnkripsi() {
    var tercepat;
    var colorAES = '#FF6384';
    var colorRC4 = '#FF6384';
    if (e_aes < e_rc4) {
        colorAES = '#00F9FF';
        colorRC4 = '#FF6384';
        var hitung = e_rc4 - e_aes
        tercepat = '<span style="color: #00F9FF">Advanced Encryption Standard (AES)</span> lebih cepat <span style="color: #00F9FF">' + hitung.toFixed(3) + ' ms</span> dari <span style="color: #FF6384">Rivest Code 4 (RC4)</span>';
    } else if (e_aes > e_rc4) {
        colorAES = '#FF6384';
        colorRC4 = '#00F9FF';
        var hitung = e_aes - e_rc4
        tercepat = '<span style="color: #00F9FF">Rivest Code 4 (RC4)</span> lebih cepat <span style="color: #00F9FF">' + hitung.toFixed(3) + ' ms</span> dari <span style="color: #FF6384">Advanced Encryption Standard (AES)</span>';
    } else {
        colorAES = '#FF6384';
        colorRC4 = '#FF6384';
    }

    $('#enkrpsi-paling-cepat').html(tercepat)

    var ctx = $('#chartEnkripsi');
    const labels = [
        'AES',
        'RC4',
      ];
      const data = {
            labels: labels,
            datasets: [{
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            barThickness: 15,
            minBarLength: 1,
            label: 'Kecepatan Enkripsi',
            backgroundColor: [colorAES, colorRC4],
            borderColor: [colorAES, colorRC4],
            data: [e_aes, e_rc4],
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

    if (d_aes < d_rc4) {
        colorAES = '#00F9FF';
        colorRC4 = '#FF6384';
        var hitung = d_rc4 - d_aes
        tercepat = '<span style="color: #00F9FF">Advanced Encryption Standard (AES)</span> lebih cepat <span style="color: #00F9FF">' + hitung.toFixed(3) + ' ms</span> dari <span style="color: #FF6384">Rivest Code 4 (RC4)</span>';
    } else if (d_aes > d_rc4) {
        colorAES = '#FF6384';
        colorRC4 = '#00F9FF';
        var hitung = d_aes - d_rc4
        tercepat = '<span style="color: #00F9FF">Rivest Code 4 (RC4)</span> lebih cepat <span style="color: #00F9FF">' + hitung.toFixed(3) + ' ms</span> dari <span style="color: #FF6384">Advanced Encryption Standard (AES)</span>';
    } else {
        colorAES = '#FF6384';
        colorRC4 = '#FF6384';
    }

    $('#dekripsi-paling-cepat').html(tercepat)

    const labels = [
        'AES',
        'RC4',
      ];
      const data = {
            labels: labels,
            datasets: [{
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            barThickness: 15,
            minBarLength: 1,
            label: 'Kecepatan Dekripsi',
            backgroundColor: [colorAES, colorRC4],
            borderColor: [colorAES, colorRC4],
            data: [d_aes, d_rc4],
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