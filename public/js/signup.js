var isContinue = true;
$("#signup-form").submit(function(e){
	e.preventDefault();
	$(".email").remove();
	$(".normal-text").remove();
	var $first_name = $("#first_name"),
		$last_name = $("#last_name"),
		$country = $("#country"),
		$email = $("#email"),
		$username = $("#username"),
		$password= $("#password"),
		$reTypePassword = $("#retype-password"),
		$type = $("#type");

	var items = [$first_name, $last_name, $username, $password, $reTypePassword];
	items.forEach(function(item){
		checkEmpty(item);
	});

	$.when(validateEmail($email)).done(function(){
		if (isContinue){
			document.getElementById("signup-form").submit();
		}
	});
});

$("#retype-password").bind('input', function(e){
	checkPassword(e, [$(this), $("#password")]);
});

$("#password").bind('input', function(e){
	checkPassword(e, [$(this), $("#retype-password")]);
});

function checkPassword(e, items){
	var password = "";
	if (e == "password"){
		$password = $("#retype-password").val();
	}else {
		$password = $("#password").val();
	}
	items.forEach(function(item){
		isContinue = true;
		item.siblings(".form-control-feedback").remove();
		item.siblings(".error_message").remove();
		if (e.target.value !== $password){
			isContinue = false;
			showErrMessage("Password is not same.", item, "passowrd");	
		}	
	});
}

function validateEmail(email) {
	var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	if (email.val() == '' || !re.test(email.val())){
		isContinue = false;
	    showErrMessage("Please enter a vaild email address!", email, "email"); 
	}
}

function showErrMessage(msg, item, className){
	item.parent().append("<i class='fa fa-exclamation-triangle form-control-feedback "+ className +"' id='error-icon' ></i>\
							<div class='error_message " + className +"'><small>"+ msg +"</small></div>\
						");
}

function checkEmpty(item){
	if (item.val() == ""){
		isContinue = false;
		showErrMessage("This field is required.", item, "normal-text");
	}
}


