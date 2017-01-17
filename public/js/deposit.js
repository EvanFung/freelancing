var isContinue = true;

$(".selection").removeClass("selection-active");
$(".selection:eq(1)").addClass("selection-active");
$(".selection:eq(2)").addClass("selection-active");
$(".billing-list").show();

$("#deposit-bank-form").submit(function(e){
	e.preventDefault();
	isContinue = true;
	$(".email").remove();
	$(".normal-text").remove();
	var $bank_type = $("#bank_type"),
		$date = $("#date"),
		$time = $("#time"),
		$email = $("#email"),
        $fileName = $("#fileName");
        
	var items = [$bank_type, $date, $time, $email, $fileName];
	items.forEach(function(item){
		checkEmpty(item);
	});
	
	if (isContinue){
	    document.getElementById("deposit-bank-form").submit();
	}
});

$("#deposit-paypal-form").submit(function(e){
	e.preventDefault();
	isContinue = true;
	$(".email").remove();
	$(".normal-text").remove();
	var $amount = $("#amount");
	
	if ($amount.val() == ""){
		isContinue = false;
		showErrMessage("This field is required.", $amount, "normal-text");
	}else if (isNaN($amount.val())==false && $amount.val() >= 1 && isContinue){
	    $("#processModel").modal();
	    socket.emit("payment", {urlPath: window.location.pathname});
	    document.getElementById("deposit-paypal-form").submit();
	    $amount.val("");
	}else {
	    showErrMessage("The amount can only be a integer and larger than 0.", $amount, "normal-text");
	}
});

$("#model-close-btn").click(function(){
    $("#loader").removeClass();
    $("#loader").addClass("loader");
    $("#loader").html("");
    $("#loader-text").text("Waiting for payment");
});

socket.on("payment-result", function(data){
    console.log(data.status);
    if (data.status == "success"){
        $("#loader").removeClass("loader");
        $("#loader").addClass("loader-finish");
        $("#loader").html("&#10004;");
        $("#loader-text").text("Payment Recieved")
        setTimeout(closeModel, 3000);
    }
});
         
socket.on("paymentData", function(data){
    $("#invoiceNo").html("Transaction ID: <u>" + data.invoiceNo + "</u>");
    $("#paymentUrl").attr("href", data.paymentUrl);
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

function closeModel(){ 
    $('#processModel').modal('hide');
}

