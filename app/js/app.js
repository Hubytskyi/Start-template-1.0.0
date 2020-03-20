document.addEventListener("DOMContentLoaded", function() {

	const circle = document.querySelectorAll(".svg-circle");
	circle.forEach( (el) => {
		window.addEventListener("scroll", function() {
			el.style = `transform:rotate(${window.pageYOffset}deg)`;
			});
	})

	
	const aboutFontSize = document.querySelector('.bio__about span')
	const widthContainer = document.querySelector('.container').clientWidth
	aboutFontSize.style=`font-size: ${widthContainer / 8.8}px; line-height: ${widthContainer / 10.7}px`;


	// const podcastTitle = document.querySelector('.podcast__title')
	// const podcastTitleItem = podcastTitle.firstElementChild
	// podcastTitleItem.innerHTML = `${podcastTitleItem.innerHTML} +`

});
