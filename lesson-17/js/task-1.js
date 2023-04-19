'use strict'
// { imageSrc, title, labelText, price, link }
class ProuctCards {
	constructor(itemData) {
		Object.assign(this, itemData)
	}
	removeClass() {
		const cards = document.querySelectorAll('.card')
		for (const card of cards) {
			card.classList.remove('active')
		}
	}
	addClass() {
		this.removeClass()
        this.card.classList.add('active')
        // или так?
		// this.card.classList.toggle('active')
	}
	render(parentID) {
		this.card = document.createElement('div')
		this.card.className = 'card'

		const label = document.createElement('div')
		label.className = 'card__label'
		label.innerText = this.labelText
		this.card.append(label)

		const img = document.createElement('img')
		img.src = this.imageSrc
		img.className = 'card__img'
		this.card.append(img)

		const title = document.createElement('a')
        title.href = this.link
        title.target='_blank'
		title.innerText = this.title
		title.className = 'card__title-link'
		this.card.append(title)

		const price = document.createElement('div')
		price.innerHTML = this.price
		price.className = 'card__price'
		this.card.append(price)

		document.getElementById(parentID).append(this.card)
		this.card.onclick = this.addClass.bind(this)
	}
}

window.onload = function () {
	for (let i = 0; i < 4; i++) {
		const tt = new ProuctCards({
			imageSrc:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRVnyvwbupGCCqE89a_HzSsjRSLjolbuUyA&usqp=CAU',
			title: 'CARD TITLE',
			labelText: 'label',
			price: 599.99,
			link: 'https://www.google.com',
		})
		tt.render('parent')
	}
}
