$(document).ready(function(){
$("#login").click(function(){

var username=$("#username").val();
var password=$("#password").val();

if(username==""||password==""){
	$('input[type=text],[type=password]').css("border"," 2px solid red");
	$('input[type=text],[type=password]').css("box-shadow","0 0 3px red")
alert("Please fill all Fields");

}
else if(username=="u460197"&&password=="admin"){
$(location).prop('href','adminPage.html');

}
else {
alert("Username or Password is Wrong");
}
});
});
