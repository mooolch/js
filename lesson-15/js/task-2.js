'use strict'

class CompanyCar {
	static companyCar
	constructor(viechleInfo) {
		if (CompanyCar.companyCar) return CompanyCar.companyCar
		Object.assign(this, viechleInfo)
		CompanyCar.companyCar = this
	}
	toString() {
		return `Driver name: ${this.driverName}<br> Viechle brand: ${this.model}<br> Registration number: ${this.regNumber}`
	}
}

const car1 = new CompanyCar({ driverName: 'Michael', model: 'Tesla model S', regNumber: 'AE 5312 PT' })
const car2 = new CompanyCar({ driverName: 'Miha', model: 'Zhiguli', regNumber: 'AE 5312 PT' })

console.log(car1)
console.log(car2)

const el = (document.querySelector('.task__body').innerHTML = car1)
