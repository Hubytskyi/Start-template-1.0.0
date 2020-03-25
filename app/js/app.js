document.addEventListener("DOMContentLoaded", function() {

	const circle = document.querySelectorAll(".svg-circle");
	circle.forEach( (el) => {
		window.addEventListener("scroll", function() {
			el.style = `transform:rotate(${window.pageYOffset}deg)`;
			});
	})

	
	const bioHeader = document.querySelector('.bio__header')
	const widthContainer = document.querySelector('.container').clientWidth
	bioHeader.style=`font-size: ${widthContainer / 8.586}px; line-height: ${widthContainer / 10.25}px`;


	// const podcastTitle = document.querySelector('.podcast__title')
	// const podcastTitleItem = podcastTitle.firstElementChild
	// podcastTitleItem.innerHTML = `${podcastTitleItem.innerHTML} +`

});
