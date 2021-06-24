console.log('hello');

function crackingPassword() {

    // for(i=parseInt("aaaa", 36);i++<=parseInt("zzzzzz", 36);console.log(i.toString(36)));
    // var currentPassword  = "ABC";

    // var defaultPassword = "A";
    // var templatePassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // $('#cracking-password').html('hahah')
    // console.log(templatePassword.charAt(25));

    // for (let i = 0; i < 25; i++) {
    //     templatePassword.charAt(i)
    // }
}
// crackingPassword();

function secondBruteForce() {
    for (let i = parseInt("aaaa", 36); i <= parseInt("zzzz", 36); i++) {$('#cracking-password').html(i.toString(36))}
}

function loopHandle() {
    // var startSecond=new Date().getSeconds();
    // var string = 'for (let i = parseInt("aaaa", 36); i <= parseInt("zzzzzz", 36); i++) {$("#cracking-password").append("&emsp;"+i.toString(36))}';
    // var match = string.match(/(?:(for|while|do)\s*\([^\{\}]*\))\s*\{([^\{\}]+)\}/)[2];
    // var replaceStr = match + ';if(startSecond < new Date().getSeconds())break;';
    // eval(string.replace(match, replaceStr));
    // alert("The loop has run for: "+$('br').length + ' times instead of '+ 5000*50000);

    var max=190000000, start=0;
    var string = 'for (let i = parseInt("a", 36); i <= parseInt("zzzz", 36); i++) {$("#cracking-password").append("&emsp;"+i.toString(36))}';
    var match = string.match(/(?:(for|while|do)\s*\([^\{\}]*\))\s*\{([^\{\}]+)\}/)[2];
    var replaceStr = match + ';start+=1;if(start>max)break;';
    eval(string.replace(match, replaceStr));
    alert("The loop has run for: "+$('br').length + ' times instead of '+ 5000*50000);
}
// loopHandle()
// secondBruteForce()

function bruteForce() {
    var password = 'abcdef',
		passwordLength = 6,
		alphabetLength = 36,
		numberOfTries = 10000000,
		printAfter = 1000,
		startFrom = 1;

	count = Math.pow(passwordLength, alphabetLength);

	// document.write('<strong>Number of required tries in worst case:</strong> ' + count + '<br>');
	// document.write('<strong>Print every</strong> ' + printAfter + 'th try:' + '<br><br>');

	var thing = [];

    for (i = startFrom; i < (numberOfTries+startFrom); i++){

		if (i % printAfter == 0){
			thing.push("" + i.toString(alphabetLength) + " ");
		}

		if (password == i.toString(alphabetLength)){
			alert('Found password on ' + i + 'th try! Here it is: ' + i.toString(alphabetLength));
		}

        $("#cracking-password").append('&emsp;' + i.toString(alphabetLength));
	}

	// document.write(thing.join(''));
    // document.write('<br><br>Last is: a' + i.toString(alphabetLength));
    // $('#cracking-password').html('<br><br>Last is: a' + i.toString(alphabetLength))
}
// bruteForce()

function bruteForce3() {
    var chars = ["a","b","c","d","e","f","g","h","i","j,","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
    while(document.getElementById("answerResult").innerHtml != "Correct Answer"){
    var len = Math.floor(Math.random() * 20);
    var str = "";
    while(str.length < len){
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementId("answer").value = str;
    document.getElementById("level").submit();
    }
}



//criar fors[d=dicionario de caracteres,q=quantidade de caracteres da seha,cb=função callback]
function createFor(d,q,cb){ 
	
	var a = d.split('');
	var f='';//inicio dos fors
	var f1='';//parte final dos fors 
	var ni='';//n contadores
	var fc='';//fors completos


	for (var i = 0; i < q; i++) {
		f +=  'for(var i'+i+' = 0; i'+i+' < a.length; i'+i+'++){';
		if(i>0){ ni += '+';}
		ni += 'a[i'+i+']';
		f1 += '}';
	}
	fc = f+cb+'('+ni+')'+f1;
	eval(fc);
}

function testar(s){
	console.log(s);
}


function testar2(s){
	// document.querySelector('#senhas').innerHTML += s+' ';
    $("#cracking-password").append(s+' ');
}



function botao(){
	var dic = 'abcdefghijklmnopqrstuvwxyz';//dicionario de caracterres
  	var qc = 4;//quantidade de caracterres da senha

  	var start = new Date();//para testar o tempo que demora
  	
  	createFor(dic,qc,'testar2');
  	
  	var time = new Date() - start;
      console.log(`time`, time)
	// document.querySelector('#tempo').innerHTML = 'Pronto em '+time+'ms';
    
}
// botao()

var charset = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
function crack(knownPassword) {

    var start = (new Date()).getTime(),
        guess = '',
        c;

    while(guess !== knownPassword) {
        for(var i = 0; i < charset.length; i++) {
            c = charset.charAt(i);
            if (c === knownPassword.charAt(guess.length)) {
                guess += c;
                console.log(guess);
                break;
            }
        }

    }

    console.log('mycrack', ((new Date()) * 1) - start, 'ms');
};
// crack('hUG1MNWkvhc')