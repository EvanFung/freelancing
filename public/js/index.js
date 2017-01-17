

function validateEmail(email) {
	var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	if (email == '' || !re.test(email))
	{
	    $("#lb_err_message").addClass("wrongEmail");
		$("#lb_err_message").html("<i class='fa fa-times' aria-hidden='true'></i> Please enter a vaild email address!");
	}else{
		document.getElementById("form_signup").submit();
	}
}

$("#form_signup").submit(function(e){
	e.preventDefault();
	var email = $("#txt_email").val();
	validateEmail(email);
});