$(document).ready(function(){
	
 $('#display').hide();
 $('#display2').hide();
 $('#displayNull').hide();
 $('#displayNullPass').hide();

var user = "mavnyin88@gmail.com";
var pass = "12345";
$('#submit').click(function(e){
	var username = $('#username').val();
 	var password = $('#password').val();
 	if(user===username && pass===password){
 		e.preventDefault();
 		window.location.href = "new.html"
 	}
 	else if(username===""){
 		e.preventDefault();
		 $('#displayNull').show(1000);
	}
	else if(password==="" ){
		e.preventDefault();
		$('#displayNullPass').show(1000);
	}
	else if(username!=user && password!=pass){
		e.preventDefault();
		$('#display').show(1000);
		$('#display2').show(1000);
		
	}
	else if(username!=user){
		e.preventDefault();
		$('#display').show(1000);
	}
	else if(password!=pass){
		e.preventDefault();
		$('#display2').show(1000);

	}
})

}) // end doc ready