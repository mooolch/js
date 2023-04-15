'use strict'

const wishlist = [
	"Здоров'я та щастя родині",
	'Вдосконалення особистих навичок',
	'Цікаву роботу',
	'Подорожі до нових місць',
	'Гарний відпочинок',
	'Нові цікаві знайомства',
	'Покращення фінансового становища',
	'Більше вільного часу для хобі',
	'Подарунки для близьких',
	'Мир у світі',
]

class WishesCreator {
	constructor(wishlist) {
		this.wishlist = wishlist
		this.wishlistCopy = JSON.parse(JSON.stringify(this.wishlist))
	}
	getRandomWishes() {
		// если пожелания закончислись, заново заполняем массив
		if (this.wishlistCopy.length === 0) this.wishlistCopy = JSON.parse(JSON.stringify(this.wishlist))
		const random = Math.floor(Math.random() * this.wishlistCopy.length)
		const randomWish = this.wishlistCopy[random]
		// удаляем пожелание которое уже было оспользовано
		this.wishlistCopy.splice(random, 1)
		return randomWish
	}
	render(parentSelector) {
		const block = document.createElement('div')
		block.classList.add('wish')
		block.innerText = this.getRandomWishes()
		document.querySelector(parentSelector).append(block)
	}
}

function showWishesOnLoad(wishesNum) {
	const wish = new WishesCreator(wishlist)
	for (let i = 0; i < wishesNum; i++) {
		wish.render('.task__body--wishes')
	}
}

window.onload = function () {
	document.querySelector('.task').classList.add('loaded')

}
// Если заакинуть внутрь функции, то перестает работать анимация появления пожеланий
showWishesOnLoad(3)