'use strict'

class Firm {
	constructor(name, regNumber) {
		this.name = name
		this.regNumber = regNumber
	}
	toString() {
		return `Name: ${this.name}, reg. number: ${this.regNumber}`
	}
}
const firm1 = new Firm('Tri bobra', 535432)
const firm2 = new Firm('Lelik i bolik', 1322)
//========================================================================================================================================================

class Product {
	constructor(name, unit, pcs, firm) {
		this.name = name
		this.unit = unit
		this.pcs = pcs
		this.firm = firm
	}
	toString() {
		return `Name: ${this.name}<br> Unit: ${this.unit}<br> Quantity: ${this.pcs}<br> Firm: ${this.firm}<br>`
	}
}
const productsList = [
	new Product('Milk', 'liters', 200, firm1),
	new Product('Cottage cheese', 'kg', 100, firm1),
	new Product('Butter', 'gr', 50, firm1),
	new Product('Milk', 'liters', 100, firm2),
	new Product('Bread', 'gr', 200, firm2),
	new Product('Beer', 'liters', 300, firm2),
]
//========================================================================================================================================================

class Warehouse {
	constructor(products) {
		this.products = products
	}
	// Отгрузка частичная, только нужное количество (имя поставщика нужно так как одинаковый товар может быть у многих поставщиков)
	shipment(productName, productFirm, productNum) {
		for (const product of this.products) {
			if (product.name === productName && product.firm.name === productFirm) {
				if (product.pcs < productNum) throw new Error('Not enough product in stock')
				product.pcs -= productNum
			}
		}
	}
	addProduct(product) {
		this.products.push(product)
	}
	// Просто вывод товаров по имени?
	filterByName(productName) {
		return this.products.reduce((acc, product) => {
			if (product.name === productName) acc.push(product)
			// Не знаю нужна ли эта проверка тут или нет?
			// if (acc.length === 0) throw new Error ('No products found by your request')
			return acc
		}, [])
	}
	filterByProducer(firmName) {
		return this.products.reduce((acc, product) => {
			if (product.firm.name === firmName) acc.push(product)
			return acc
		}, [])
	}
	toString() {
		return `${this.products}`
	}
}

const sklad = new Warehouse(productsList)
console.log(sklad)
