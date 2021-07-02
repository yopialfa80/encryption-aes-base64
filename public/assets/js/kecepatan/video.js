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
            AES(e.target.result, kunci);
            RC4(e.target.result, kunci);
            setTimeout(() => {
                initChartEnkripsi()
                initChartDekripsi()
            }, 100);

        };
        reader.readAsDataURL(dataVideo.files[0]);
    }

    $('.result-card').fadeIn('slow');
}

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
    // $('#panjangAES1').html(enkripsiAE.length + ' <span class="milisecond-speed">Kata</span>')
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