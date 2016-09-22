$(document).ready(function(){
    var emailAddress= document.getElementById("email").value;

	if (emailAddress == ""){$("#submit").click(function () {
    	alert("Please enter your email address!")     
 }); } else {
    	$("#thankEmailMessage").removeClass("hidden");
    };
});