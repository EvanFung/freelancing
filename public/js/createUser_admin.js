$(document).ready(function() {
  var isContinue = true;
  var $username = $("#username"),
      $firstname = $("#firstname"),
      $lastname = $("#lastname"),
      $password = $("#password"),
      $retype_pass = $("#retype-password"),
      $email = $("#email"),
      $country = $("#country");

  var items = [$firstname, $lastname, $username, $password, $retype_pass,$country,$email];

  $("#create-form").submit(function(e){
    e.preventDefault();
    $(".email").remove();
    $(".normal-text").remove();
    items.forEach(function(item){
      checkEmpty(item);
    });

    $.when(validateEmail($email)).done(function(){
      if (isContinue){
        document.getElementById("create-form").submit();
      }
    });
  });

  $(".btn-delete").click(function() {
      $("#user_id").val($(this).closest("tr").attr("data-userid"));
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


  function showErrMessage(msg, item, className){
    item.parent().append("<i class='fa fa-exclamation-triangle form-control-feedback "+ className +"' id='error-icon' ></i>\
  							<div class='error_message " + className +"'><small>"+ msg +"</small></div>\
  						");
  }

  function validateEmail(email) {
  	var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  	if (email.val() == '' || !re.test(email.val())){
  		isContinue = false;
  	    showErrMessage("Please enter a vaild email address!", email, "email");
  	}
  }

  function checkEmpty(item){
  	if (item.val() == ""){
  		isContinue = false;
  		showErrMessage("This field is required.", item, "normal-text");
  	}
  }
});
