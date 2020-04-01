document.addEventListener("DOMContentLoaded", function() {

	const menuBtn = document.querySelector('.mobile-menu__btn')
	const menuListMob = document.querySelector('.menu__list')
	let menuOpen = false
	menuBtn.addEventListener('click', () => {
		if(!menuOpen){
			menuListMob.classList.add('menu__list-mobile--open')
			document.body.style='overflow:hidden'
			menuBtn.innerHTML = 'Close'
			menuOpen = true
		} else {
			menuListMob.classList.remove('menu__list-mobile--open')
			document.body.style='overflow:auto'
			menuBtn.innerHTML = 'Menu'
			menuOpen = false
		}
	})

	const menuLinkMobOpen = document.querySelector('.menu__list--submenu')
	const subMenuListMob = document.querySelector('.submenu__list-services')
	let menuMobOpen = false
	menuLinkMobOpen.addEventListener('click', () => {
		if(!menuMobOpen){
			subMenuListMob.classList.add('servises__sub-mobile--open')
			menuLinkMobOpen.style='color:#4857DF'
			menuMobOpen = true
		} else {
			subMenuListMob.classList.remove('servises__sub-mobile--open')
			menuLinkMobOpen.style='color:#222'
			menuMobOpen = false
		}
	})

	const menuLink = document.querySelectorAll('.menu__link')
	if(document.body.clientWidth < 768){
		menuLink.forEach( (el) => {
			el.classList.remove('item__skew--hover')
		})
	} else {
		menuLink.forEach( (el) => {
			el.classList.add('item__skew--hover')
		})
	}


	const circle = document.querySelectorAll(".svg-circle");
	circle.forEach( (el) => {
		window.addEventListener('scroll', function() {
			el.style = `transform:rotate(${window.pageYOffset / 2}deg)`;
			});
	})


	const consultancySlider = document.querySelector('.consultancy__slider')
	const speakingSlider = document.querySelector('.speaking__slider')
	const workshopsSlider = document.querySelector('.workshops__slider')
	if(consultancySlider || speakingSlider || workshopsSlider){
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
	}

	const bioHeader = document.querySelector('.bio__header')
	const widthContainer = document.querySelector('.container').clientWidth
	if(document.body.clientWidth >= 768){
		bioHeader.style=`font-size: ${widthContainer / 7.7}px; line-height: ${widthContainer / 9.3}px`;
	} else {
		bioHeader.style=`font-size: ${widthContainer / 8.1875}px; line-height: ${widthContainer / 9.3}px`;
	}
	


});

