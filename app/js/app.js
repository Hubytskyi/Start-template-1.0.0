document.addEventListener("DOMContentLoaded", function() {

	const circle = document.querySelectorAll(".svg-circle");
	circle.forEach( (el) => {
		window.addEventListener("scroll", function() {
			el.style.transform = "rotate("+window.pageYOffset+"deg)";
			});
	})


});
