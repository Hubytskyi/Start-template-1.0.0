document.addEventListener("DOMContentLoaded", function() {

	const menuList = document.querySelector('.menu__list')
	const menuBtn = document.querySelector('.mobile-menu__btn')
	const menuListMob = document.querySelector('.menu__list')
	const menuListItem = document.querySelectorAll('.menu__list-item')
	const menuLinkMobOpen = document.querySelector('.menu__list--submenu')
	const subMenuListMob = document.querySelector('.submenu__list-services')

	// __ Start Menu work and animation __
	let menuOpen = false
	menuBtn.addEventListener('click', () => {
		if(!menuOpen){
			menuListMob.classList.add('menu__list-mobile--open')
			document.body.style='overflow:hidden'
			menuBtn.innerHTML = 'Close'

			// Start menu items animation
			let count = 0
			for(let i = 0; i < menuList.children.length; i++){
				count += 200
				menuList.children[i].style.animation=`menuItemAnim 500ms ease-out ${count}ms forwards`
			}
			// End menu items animation

			// Start submenu
			let menuMobOpen = false
			menuLinkMobOpen.addEventListener('click', () => {
				if(!menuMobOpen){
					subMenuListMob.classList.add('servises__sub-mobile--open')
					menuLinkMobOpen.style='color:#4857DF; opacity:1'
					menuList.lastElementChild.style='padding-bottom:20vh; opacity:1'
					menuMobOpen = true
				} else {
					subMenuListMob.classList.remove('servises__sub-mobile--open')
					menuLinkMobOpen.style='color:#222; opacity:1'
					menuList.lastElementChild.style='padding-bottom:0; opacity:1'
					menuMobOpen = false
				}
			})
			// End submenu

			menuOpen = true

		} else {
			menuListMob.classList.remove('menu__list-mobile--open')
			document.body.style='overflow:auto'
			menuBtn.innerHTML = 'Menu'

			// Start menu items animation reset
			menuListItem.forEach( (menuListItem) => {
				menuListItem.style.animation='none'
			})
			// End menu items animation reset

			// Start submenu reset
			menuLinkMobOpen.style='opacity:0'
			subMenuListMob.classList.remove('servises__sub-mobile--open')
			menuList.lastElementChild.style='opacity:0'
			// End submenu reset

			menuOpen = false
		}
	})


	// __ Add and remove skew hover effect __
	const menuLink = document.querySelectorAll('.menu__link')
	const goToBox = document.querySelectorAll('.go-to__box')
	if(document.body.clientWidth < 768){
		menuLink.forEach( (menuLink) => {
			menuLink.classList.remove('item__skew--hover')
		})
		goToBox.forEach( (goToBox) => {
			goToBox.classList.remove('item__skew--hover')
		})
	} else {
		menuLink.forEach( (menuLink) => {
			menuLink.classList.add('item__skew--hover')
		})
		goToBox.forEach( (goToBox) => {
			goToBox.classList.add('item__skew--hover')
		})
	}

	// Willa circle animation
	const circle = document.querySelectorAll(".svg-circle");
	circle.forEach( (el) => {
		window.addEventListener('scroll', function() {
			el.style = `transform:rotate(${window.pageYOffset / 2}deg)`;
			});
	})

	// Slider
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

	// Title size for About Page
	const bioHeader = document.querySelector('.bio__header')
	const widthContainer = document.querySelector('.container').clientWidth
	if(document.body.clientWidth >= 768){
		bioHeader.style=`font-size: ${widthContainer / 7.7}px; line-height: ${widthContainer / 9.3}px`;
	} else if (document.body.clientWidth <= 414){
		bioHeader.style=`font-size: ${widthContainer / 8.4}px; line-height: ${widthContainer / 9.5}px`;
	} else {
		bioHeader.style=`font-size: ${widthContainer / 8}px; line-height: ${widthContainer / 9.3}px`;
	}
	

});

