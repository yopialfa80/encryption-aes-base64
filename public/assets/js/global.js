// var ServeUrl = "http://localhost/myskripsi/public/api";
// var BaseUrl = "http://localhost/myskripsi/public";

var ServeUrl = "http://127.0.0.1:8000/api";
var BaseUrl = "http://127.0.0.1:8000";

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
var imagePath = BaseUrl + '/assets/images/';
var csrf_token = $('meta[name="csrf-token"]').attr('content');

function encrypt(value, kunci) {
    return Base64.encode(CryptoJSAesJson.encrypt(value, kunci));
}

function decrypt(value, kunci) {
    return CryptoJSAesJson.decrypt(Base64.decode(value), kunci);
}

function encryptOnlyAES(value, kunci) {
    return CryptoJSAesJson.encrypt(value, kunci);
}

function decryptOnlyAES(value, kunci) {
    return CryptoJSAesJson.decrypt(value, kunci);
}

function encryptOnlyBase64(value, kunci) {
    return Base64.encode(value);
}

function decryptOnlyBase64(value, kunci) {
    return Base64.decode(value);
}

function makeRandomText(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function startLoading() {
    $.LoadingOverlay("show", {
        image : BaseUrl + '/assets/images/loading/main-loading.gif',
        zIndex : 1000000,
        imageAnimation: "0ms",
        fade: [0, 0],
        size: 200,
        maxSize: 200,
        background: "#d6eaff52"
    });
}

function stopLoading() {
    $.LoadingOverlay("hide");
}

function makeRandomText(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// console.log(`teks`, makeRandomText(16))