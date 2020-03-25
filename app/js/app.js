document.addEventListener("DOMContentLoaded", function() {

	const circle = document.querySelectorAll(".svg-circle");
	circle.forEach( (el) => {
		window.addEventListener("scroll", function() {
			el.style = `transform:rotate(${window.pageYOffset}deg)`;
			});
	})

	
	const bioHeader = document.querySelector('.bio__header')
	const widthContainer = document.querySelector('.container').clientWidth
	bioHeader.style=`font-size: ${widthContainer / 7.7}px; line-height: ${widthContainer / 9.3}px`;


	// const podcastTitle = document.querySelector('.podcast__title')
	// const podcastTitleItem = podcastTitle.firstElementChild
	// podcastTitleItem.innerHTML = `${podcastTitleItem.innerHTML} +`

});
