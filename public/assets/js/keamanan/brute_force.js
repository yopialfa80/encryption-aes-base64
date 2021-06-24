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
        document.getElementById("waktu").innerHTML = 'Waktu: ' + (elapsedTime / 1000).toFixed(3);
    }, 100);
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const list = [1, 2, 3, 4]
const doSomething = async (kunci) => {
    for (let i = parseInt("a", 36); i <= parseInt('zzzzzzzzzzzzzzzzzzzzzzz', 36); i++) {
        $('#hasil-plainteks').fadeOut();
        await sleep(50)
        $('#cracking-password').html(i.toString(36))
        
        var hasilDekripsi = openDek();
        if (hasilDekripsi == $('#plaintext-enkripsi-teks').val()) {
            $('#hasil-plainteks').html(hasilDekripsi)
            cancelBruteForce()
            return
        } else if (canceled == false) {
            $('#percobaan').html('Percobaan: ' + i)
            console.log('te');
            
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
    $('#hasil-chippertext-teks').html(encrypt(plaintext_enkripsi, kunci_enkripsi));
    $('.hidden-hasils').fadeIn(1000);
}

function openDek() {
    var kunci_dekripsi = $('#cracking-password').html().trim();
    var chippertext_dekripsi = $('#hasil-chippertext-teks').html().trim();
    $('#hasil-plainteks').fadeIn();
    try {
        var plainteks = decrypt(chippertext_dekripsi, kunci_dekripsi)
        $('#hasil-plainteks').html(plainteks)
        return plainteks
    }
    catch(err) {
        $('#hasil-plainteks').html(err.message)
    }
}
