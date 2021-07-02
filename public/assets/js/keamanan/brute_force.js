$('#stopBruteForce').hide();
var canceled = false;
function cancelBruteForce() {
    canceled = true;
    clearInterval(interval);
    $('#kunci').attr('disabled', false);
    $('#startBruteForce').attr('disabled', false)
    $('#startBruteForce').html('Mulai Brute Force');
    $('#startBruteForce').addClass('btn-danger');
    $('#startBruteForce').removeClass('btn-info');
    $('#stopBruteForce').hide();

    $('#hasil-chippertext-teks').css('color', 'white');

    $('#kunci-enkripsi-teks').attr('disabled', false);
    $('#plaintext-enkripsi-teks').attr('disabled', false);
}

var interval ;
function startTimer() {
    var startTime = Date.now();
    interval = setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        document.getElementById("waktu-aes").innerHTML = 'Waktu: ' + (elapsedTime / 1000).toFixed(3);
        document.getElementById("waktu-rc4").innerHTML = 'Waktu: ' + (elapsedTime / 1000).toFixed(3);
    }, 100);
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const list = [1, 2, 3, 4]
const doSomething = async (kunci) => {
    for (let i = parseInt("a", 36); i <= parseInt('zzzzzzzzzzzzzzzzzzzzzzz', 36); i++) {
        $('#hasil-plainteks-aes').fadeOut();
        $('#hasil-plainteks-rc4').fadeOut();
        await sleep(50)
        $('#cracking-password-rc4').html(i.toString(36))
        $('#cracking-password-aes').html(i.toString(36))
        
        var hasilDekripsiRc4 = openDekRc4();
        var hasilDekripsiAes = openDekAes();
        
        if (hasilDekripsiAes == $('#plaintext-enkripsi-teks').val() || hasilDekripsiRc4 == $('#plaintext-enkripsi-teks').val()) {
            $('#hasil-plainteks-aes').html(hasilDekripsiAes)
            $('#hasil-plainteks-rc4').html(hasilDekripsiAes)
            cancelBruteForce()
            return
        } else if (canceled == false) {
            $('#percobaan-aes').html('Percobaan: ' + i)
            $('#percobaan-rc4').html('Percobaan: ' + i)
            if (hasilDekripsiAes == '') {
                $('#hasil-plainteks-aes').html('Error: Malformed UTF-8 data')
            } else {
                $('#hasil-plainteks-aes').html(hasilDekripsiAes)
                $('#hasil-plainteks-rc4').html(hasilDekripsiRc4)
            }

            if (hasilDekripsiRc4 == '') {
                $('#hasil-plainteks-rc4').html('Error: Malformed UTF-8 data')
            } else {
                $('#hasil-plainteks-aes').html(hasilDekripsiAes)
                $('#hasil-plainteks-rc4').html(hasilDekripsiRc4)
            }
        } else {
           
            return
        }
    }
    clearInterval(interval);
    $('#kunci').attr('disabled', false);
    $('#startBruteForce').attr('disabled', false)
    $('#startBruteForce').html('Mulai Brute Force');
    $('#startBruteForce').addClass('btn-danger');
    $('#startBruteForce').removeClass('btn-info');
    $('#stopBruteForce').hide();
}

function startBruteForce() {
    canceled = false;
    $('#stopBruteForce').fadeIn(1000);
    var kunci = $('#kunci').val();
    $('#kunci').attr('disabled', true);
    $('#startBruteForce').attr('disabled', true);
    $('#startBruteForce').html('Mencari ...');
    $('#startBruteForce').removeClass('btn-danger');
    $('#startBruteForce').addClass('btn-info');
    $('#hasil-chippertext-teks').css('color', '#00F9FF');

    $('#kunci-enkripsi-teks').attr('disabled', true);
    $('#plaintext-enkripsi-teks').attr('disabled', true);
    
    
    doSomething(kunci)
    startTimer();
}

function bruteForce(kunci) {
    var password = kunci,
		passwordLength = 3,
		alphabetLength = 36,
		numberOfTries = 1000000,
		printAfter = 1000,
		startFrom = 1;
	count = Math.pow(passwordLength, alphabetLength);
	var thing = [];
    for (i = startFrom; i < (numberOfTries+startFrom); i++){
        
		if (i % printAfter == 0){
			thing.push("" + i.toString(alphabetLength) + " ");
		}
		if (password == i.toString(alphabetLength)) {
            $('#perkiraan').html('Perkiraan: ' + i + ' percobaan')
		}
	}
}

function enkripsi_teks() {
    var kunci_enkripsi = $('#kunci-enkripsi-teks').val();
    var plaintext_enkripsi = $('#plaintext-enkripsi-teks').val();
    $('#hasil-chippertext-teks-aes').html(enkripsiAdvancedEncryptionStandard(plaintext_enkripsi, kunci_enkripsi).toString().split('U2FsdGVkX1')[1]);
    $('#hasil-chippertext-teks-rc4').html(enkripsiRivestCode4(plaintext_enkripsi, kunci_enkripsi).toString().split('U2FsdGVkX1')[1]);
    $('.hidden-hasils').fadeIn(1000);
}

function openDekAes() {
    var kunci_dekripsi = $('#cracking-password-aes').html().trim();
    var chippertext_dekripsi = $('#hasil-chippertext-teks-aes').html().trim();
    $('#hasil-plainteks-aes').fadeIn();
    try {
        var plainteks = dekripsiAdvancedEncryptionStandard("U2FsdGVkX1"+chippertext_dekripsi, kunci_dekripsi)
        $('#hasil-plainteks-aes').html(plainteks)
        return plainteks
    }
    catch(err) {
        $('#hasil-plainteks-aes').html(err.message)
    }
}

function openDekRc4() {
    var kunci_dekripsi = $('#cracking-password-rc4').html().trim();
    var chippertext_dekripsi = $('#hasil-chippertext-teks-rc4').html().trim();
    $('#hasil-plainteks-rc4').fadeIn();
    try {
        var plainteks = dekripsiAdvancedEncryptionStandard("U2FsdGVkX1"+chippertext_dekripsi, kunci_dekripsi)
        $('#hasil-plainteks-rc4').html(plainteks)
        return plainteks
    }
    catch(err) {
        $('#hasil-plainteks-rc4').html(err.message)
    }
}