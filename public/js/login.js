var isContinue = true;
$("#login-form").submit(function(e){
    e.preventDefault();
    isContinue = true;
	$(".normal-text").remove();
    var $username = $("#username"),
        $password = $("#password");
        
    checkEmpty($username);
    checkEmpty($password);
    
    if (isContinue){
        document.querySelector("#login-form").submit();
    }
});
    
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