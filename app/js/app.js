document.addEventListener("DOMContentLoaded", function() {

	const circle = document.querySelectorAll(".svg-circle");
	circle.forEach( (el) => {
		window.addEventListener('scroll', function() {
			el.style = `transform:rotate(${window.pageYOffset / 2}deg)`;
			});
	})
	
	// const bioHeader = document.querySelector('.bio__header')
	// const widthContainer = document.querySelector('.container').clientWidth
	// bioHeader.style=`font-size: ${widthContainer / 7.7}px; line-height: ${widthContainer / 9.3}px`;
	
	var swiper = new Swiper('.swiper-container', {
		loop: true,
		pagination: {
      el: '.swiper-pagination',
    },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	// const menuLink = document.querySelectorAll('.menu__link')
	// menuLink.classList.remove('menu__link--active')
	// const path = location.pathname
	// menuLink.forEach( function() {
	// 	const href = this.attr('href')
	// 	if(path.slice(1).substring(0, href.length) === href){
	// 		menuLink.classList.add('menu__link--active')
	// 	}
	// })

	// const menuLink = document.querySelectorAll('.menu__link')
	// menuLink.forEach( (el) => {
	// 	menuLink.addEventListener('click', () => {
	// 		el.classList.add('menu__link--active')
	// 	})
	// })

	// const podcastTitle = document.querySelector('.podcast__title')
	// const podcastTitleItem = podcastTitle.firstElementChild
	// podcastTitleItem.innerHTML = `${podcastTitleItem.innerHTML} +`

});
