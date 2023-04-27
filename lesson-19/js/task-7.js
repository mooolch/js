'use strict'

// Костыль на костыле конечно, но кое как работает О_о
// точно нужно переписать с отдельным классом для создания html элементов
// Я видимо намудрил что-то в самом классе Product потому что по непонятной мне причние в методе рендер ProductManager'а теперь общарение нужно делать через el.el. Методом тыка нашел что это работает, но не понимаю почему и где ошибка

class Product {
	constructor({ imgSrc, productLink, productName, productPrice }) {
		this.el = this.createEl({ imgSrc, productLink, productName, productPrice })
		this.id = new Date().getTime()
	}
	increase() {
		const increaseProd = new CustomEvent('increase', {
			detail: {
				id: this.id,
				quantityEl: this.quantity,
				priceEL: this.prodPrice,
				price: this.price,
			},
		})
		this.el.dispatchEvent(increaseProd)
	}
	decrease() {
		const decreaseProd = new CustomEvent('decrease', {
			detail: {
				id: this.id,
				quantityEl: this.quantity,
				priceEL: this.prodPrice,
				price: this.price,
			},
		})
		this.el.dispatchEvent(decreaseProd)
	}
	remove() {
		const removeProd = new CustomEvent('remove', {
			detail: {
				id: this.id,
				priceEL: this.prodPrice,
			},
		})
		this.el.dispatchEvent(removeProd)
	}

	createEl({ imgSrc, productLink, productName, productPrice }) {
		const container = document.createElement('div')
		container.classList.add('product-cntnr')

		const col_1 = document.createElement('div')
		const img = document.createElement('img')
		img.src = imgSrc
		col_1.append(img)
		container.append(col_1)

		const col_2 = document.createElement('div')
		const link = document.createElement('a')
		link.href = productLink
		link.innerText = productName
		col_2.append(link)
		container.append(col_2)

		const col_3 = document.createElement('div')
		col_3.classList.add('product-btns')

		const btn_plus = document.createElement('button')
		btn_plus.innerText = '+'
		btn_plus.onclick = this.increase.bind(this)

		const btn_minus = document.createElement('button')
		btn_minus.innerText = '-'
		btn_minus.onclick = this.decrease.bind(this)

		this.quantity = document.createElement('span')
		this.quantity.innerText = 1

		col_3.append(btn_minus)
		col_3.append(this.quantity)
		col_3.append(btn_plus)
		container.append(col_3)

		const col_4 = document.createElement('div')
		col_4.innerText = 'До оплати: '

		const itemPrice = document.createElement('span')

		this.price = productPrice

		this.prodPrice = document.createElement('span')
		this.prodPrice.innerText = productPrice

		itemPrice.append(this.prodPrice)
		itemPrice.append(' грн.')
		col_4.append(itemPrice)
		container.append(col_4)

		const col_5 = document.createElement('div')
		const btn_del = document.createElement('button')
		btn_del.onclick = this.remove.bind(this)
		btn_del.innerText = 'X'
		col_5.append(btn_del)
		container.append(col_5)

		return container
	}
	render(parentSelector) {
		document.querySelector(parentSelector).append(this.el)
	}
}

class ProductManager {
	constructor(productsList) {
		this.productsList = productsList
	}
	increaseItem(e) {
		let curVal = parseInt(e.detail.quantityEl.innerText)
		if (curVal < 10) {
			e.detail.quantityEl.innerText = ++curVal
			e.detail.priceEL.innerText = e.detail.price * curVal
			this.price += e.detail.price
		}
		this.updateTotalPrice()
	}
	decreaseItem(e) {
		let curVal = parseInt(e.detail.quantityEl.innerText)
		if (curVal > 1) {
			e.detail.quantityEl.innerText = --curVal
			e.detail.priceEL.innerText = e.detail.price * curVal
			this.price -= e.detail.price
		}
		this.updateTotalPrice()
	}
	removeItem(e) {
		this.price -= parseInt(e.detail.priceEL.innerText)
		this.updateTotalPrice()
		e.target.remove()
	}
	totalPrice() {
		this.totalPriceEl = document.createElement('div')
		this.updateTotalPrice()
		return this.totalPriceEl
	}
	updateTotalPrice() {
		this.totalPriceEl.innerText = `Загалом до оплати : ${this.price} грн.`
	}
	render(parentSelector) {
		const parent = document.querySelector(parentSelector)
		this.price = 0
		for (const product of this.productsList) {
			const el = new Product(product)
			el.el.addEventListener('increase', this.increaseItem.bind(this))
			el.el.addEventListener('decrease', this.decreaseItem.bind(this))
			el.el.addEventListener('remove', this.removeItem.bind(this))
			parent.append(el.el)
			this.price += el.price
		}
		parent.append(this.totalPrice())
	}
}

const b1 = new ProductManager([
	{
		imgSrc: 'https://kartinkin.net/uploads/posts/2021-10/1633783915_9-kartinkin-net-p-utka-piksel-art-krasivo-9.jpg',
		productLink:
			'https://kartinkin.net/uploads/posts/2021-10/1633783915_9-kartinkin-net-p-utka-piksel-art-krasivo-9.jpg',
		productName: 'Duck 1',
		productPrice: 500,
	},
	{
		imgSrc: 'https://kartinkin.net/uploads/posts/2021-10/1633783915_9-kartinkin-net-p-utka-piksel-art-krasivo-9.jpg',
		productLink:
			'https://kartinkin.net/uploads/posts/2021-10/1633783915_9-kartinkin-net-p-utka-piksel-art-krasivo-9.jpg',
		productName: 'Duck 2',
		productPrice: 1000,
	},
	{
		imgSrc: 'https://kartinkin.net/uploads/posts/2021-10/1633783915_9-kartinkin-net-p-utka-piksel-art-krasivo-9.jpg',
		productLink:
			'https://kartinkin.net/uploads/posts/2021-10/1633783915_9-kartinkin-net-p-utka-piksel-art-krasivo-9.jpg',
		productName: 'Duck 3',
		productPrice: 1500,
	},
])

b1.render('.task__body')
