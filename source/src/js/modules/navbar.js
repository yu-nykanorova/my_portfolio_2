export default header;

$(document).ready(function() {
	$(".navbar-burger").click(function(event){
		$(".navbar-burger, .navbar").toggleClass("active");
		$("body").toggleClass("lock");
	});
}); 

document.getElementById("navbar__copyright").innerHTML = "&copy; " + new Date().getFullYear() + " All rights reserved";