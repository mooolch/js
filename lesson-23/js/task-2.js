'use strict'


class Product {
	constructor(productData) {
		Object.assign(this, productData)
	}
	[Symbol.toPrimitive](hint) {
		switch (hint) {
			case 'string':
				return `${this.name} - ${this.price * this.quantity}`
			case 'number':
				return this.price * this.quantity
			default:
				return `${this.name}<br> Ціна: ${this.price}<br> К-сть: ${this.quantity}<br>`
		}
	}
}

const pr = [
	new Product({
		name: 'Product_1',
		price: 800,
		quantity: 50,
	}),
	new Product({
		name: 'Product_2',
		price: 200,
		quantity: 75,
	}),
	new Product({
		name: 'Product_3',
		price: 600,
		quantity: 30,
	}),
	new Product({
		name: 'Product_4',
		price: 1320,
		quantity: 12,
	}),
]


class Shop {
	constructor(productslist) {
		this.productsList = productslist
	}
	[Symbol.iterator]() {
		this.currentIdx = 0
		return this
	}
	next() {
		if (this.currentIdx < this.productsList.length) {
			this.currentIdx++
			return { done: false, value: String(this.productsList[this.currentIdx - 1]) }
		} else return { done: true }
	}
}

const shop = new Shop(pr)

for (const prod of shop) {
	console.log(prod)
}
