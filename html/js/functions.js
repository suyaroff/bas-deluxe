function open_window(link, w, h) { //opens new window
    var win = "width=" + w + ",height=" + h + ",menubar=no,location=no,resizable=yes,scrollbars=yes";
    newWin = window.open(link, 'newWin', win);
    newWin.focus();
}

function open_window_close(link, w, h) { //opens new window
    var win = "width=" + w + ",height=" + h + ",menubar=no,location=no,resizable=yes,scrollbars=yes";
    newWin = window.open(link, 'newWin', win);
    document.getElementById("viewform").onclick="";
}

function open_printable_version(link) { //opens new window
    var win = "menubar=no,location=no,resizable=yes,scrollbars=yes";
    newWin = window.open(link, 'perintableWin', win);
    newWin.focus();
}

function confirmDelete(id, ask, url) { //confirm order delete
    temp = window.confirm(ask);
    if (temp) { //delete
        window.location = url + id;
    }
}

function confirmUnsubscribe() { //unsubscription confirmation
	temp = window.confirm('Вы уверены, что хотите отменить регистрацию в магазине?');
    if (temp) { //delete
        window.location = "/index.php?killuser=yes";
    }
}

function validate() { // newsletter subscription form validation
    if (document.subscription_form.email.value.length < 1) {
		alert("Пожалуйста, вводите email правильно");
        return false;
    }
    if (document.subscription_form.email.value == 'Email') {
		alert("Пожалуйста, вводите email правильно");        return false;
    }
    return true;
}

function validate_disc() { // review form verification
    if (document.formD.nick.value.length < 1) {
		alert("Пожалуйста, введите ваше имя");
        return false;
    }
    if (document.formD.topic.value.length < 1) {
			alert("Пожалуйста, введите тему сообщения");
        return false;
    }

    return true;
}

function validate_search() {
    if (document.Sform.price1.value != "" && ((document.Sform.price1.value < 0) || isNaN(document.Sform.price1.value))) {
		alert("Цена должна быть положительным числом");
        return false;
    }
    if (document.Sform.price2.value != "" && ((document.Sform.price2.value < 0) || isNaN(document.Sform.price2.value))) {
		alert("Цена должна быть положительным числом");        return false;
    }

    return true;
}

	function PopupCenter(pageURL, title, w, h)
	{
		var left = (screen.width/2)-(w/2);
		var top = (screen.height/2)-(h/2);
		var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	}
	function PopupCenter2(pageURL, title, w, h)
	{
		var targetWin = window.open (pageURL, title);
	}



function toggle_form(a){
    if(a == 'foto'){
        $('#prod-foto-link').show();
        $('#prod-foto').show();
        $('#ask-form-link').hide();
        $('#ask-form').hide();
    } else {
        $('#prod-foto-link').hide();
        $('#prod-foto').hide();
        $('#ask-form-link').show();
        $('#ask-form').show();
    }
}

var req=null;
function InitXMLHttpRequest() {
	if (window.XMLHttpRequest) {
		req=new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		req=new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function FastAddToCart(addr, session) {
	document.getElementById("viewform").onclick="";
	InitXMLHttpRequest();

	if (req) {
		req.onreadystatechange=function() {
			if (req.readyState == 4) {
				params = req.responseText;
				var parr = params.split("<divider>");
				document.getElementById("cart_items_count").innerHTML=parr[0];
				document.getElementById("cart_total_amount").innerHTML=parr[1];
				document.getElementById("callme_cart").innerHTML=parr[2];
			}
		}

		req.open("GET", addr+"&fastorder=1", true);

		req.send(null);
	}
}

function productDetailSwitch(button){
    var swicthObj = $(button).parent('.switch');
    if(swicthObj.hasClass('back-foto')){
        swicthObj.removeClass('back-foto');
        $('#ask-box').hide();
        $('#foto-box').show();
    } else {
        swicthObj.addClass('back-foto');
        $('#ask-box').show();
        $('#foto-box').hide();
    }
}

function showFeedbackResult(){
    $('.product-detail .switch').addClass('back-foto');
    $('#ask-box').show();
    $('#foto-box').hide();
}

function one_click_buy(productId){
    var name = $('#click_buy_name').val();
    var phone = $('#click_buy_phone').val();
    if(name.length < 3) {
        alert('Введите имя');
    } else {
        if(phone.length < 5){
            alert('Введите номер телефона');
        }else{
            $.get('/callme/',{cname:name, cphone:phone, caddr:document.URL, cart:$('#callme_cart').html()}, function(data){
                $("#click_buy_result").html(data);
            })
        }
    }
}


$(function(){
    cuSel({changedEl:'.custom-select'});
});
