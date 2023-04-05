'use strict'

class Foundation {
	#month
	#year
	constructor(month, year) {
		this.#month = month
		this.#year = year
	}
	get Month() {
		return this.#month
	}
	get Year() {
		return this.#year
	}
	toString() {
		return `Сompany founded: ${this.Month}.${this.Year}<br>`
	}
}
const foundationDate = new Foundation(3, 1997)
//========================================================================================================================================================

class Services {
	#price
	constructor(price, name, deadline) {
		this.Price = price
		this.name = name
		this.deadline = deadline
	}
	get Price() {
		return this.#price
	}
	set Price(value) {
		if (value <= 0) throw new Error('Price can`t be zero or less.')
		this.#price = value
	}
	toString() {
		return `Service name: ${this.name}<br> Price: ${this.Price}<br> Deadline: ${this.deadline}<br>`
	}
}
const arrOfServices = [
	new Services(500, 'Moo', 5),
	new Services(300, 'Meow', 7),
	new Services(200, 'Quack', 2),
	new Services(700, 'Roar', 12),
	new Services(400, 'Bark', 8),
]

//========================================================================================================================================================

class Branches {
	constructor(country, city, street, building) {
		this.country = country
		this.city = city
		this.street = street
		this.building = building
	}
	toString() {
		return `Branch adress: ${this.country}, ${this.city}, ${this.street}, ${this.building}<br>`
	}
}
const arrOfBranches = [
	new Branches('UKR', 'city_1', 'street_1', 'building_11'),
	new Branches('UKR', 'city_1', 'street_2', 'building_22'),
	new Branches('UKR', 'city_1', 'street_3', 'building_33'),
	new Branches('POL', 'city_2', 'street_2', 'building_2'),
	new Branches('USA', 'city_3', 'street_3', 'building_3'),
]
//========================================================================================================================================================

class Firm {
	#name
	constructor(firmName, foundationDate, servicesList, branchesList) {
		this.Name = firmName
		this.foundation = foundationDate
		this.services = servicesList
		this.branches = branchesList
	}
	get Name() {
		return this.#name
	}
	set Name(value) {
		if (value.length === 0) throw new Error('Name can`t be empty')
		this.#name = value
	}
	getCompanyAge() {
		const nowYear = new Date().getFullYear()
		return nowYear - this.foundation.Year
	}
	getBranchesList(city) {
		let branches = []
		for (const branch of this.branches) {
			if (branch.city === city) branches.push(branch)
		}
		return branches.length === 0 ? (branches = 'No branches in this city') : branches
	}
	findServices(price, deadline) {
		let services = []
		for (const service of this.services) {
			if (service.Price <= price && service.deadline <= deadline) services.push(service)
		}
		return services.length === 0 ? (services = 'No services found by there options') : services
	}
	toString() {
		return `
        ${this.Name} <br>
        ${this.foundation} <br>
        ${this.services} <br>
        ${this.branches} <br>
        `
	}
}

const testCompany = new Firm('Roga i Kopyta LLC', foundationDate, arrOfServices, arrOfBranches)
//========================================================================================================================================================
const el = (document.querySelector('.task__body').innerHTML = testCompany)
