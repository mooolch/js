'use strict'

class PhoneNumber {
	constructor(phoneNUmber) {
		this.phoneNUmber = phoneNUmber
	}
	showCarrierName() {
		let carrier
		switch (true) {
			case /^(050)|(066)|(095)|(099)/.test(this.phoneNUmber):
				carrier = 'MTC'
				break
			case /^(039)|(067)|(096)|(097)|(098)/.test(this.phoneNUmber):
				carrier = 'Kyivstar'
				break
			case /^(063)|(093)/.test(this.phoneNUmber):
				carrier = 'lifecell'
				break
			default:
				carrier = 'Невідомий оператор'
				break
		}
		carrier = `Ваш оператор - ${carrier}`
		return carrier
	}
	[Symbol.toPrimitive](hint) {
		switch (hint) {
			case 'string':
				return this.showCarrierName()
			case 'number':
				return Number(this.phoneNUmber)
			default:
				return `${this.phoneNUmber} - ${this.showCarrierName()}`
		}
	}
}

const num = new PhoneNumber(prompt('Введіть номер телефону у форматі "050 150 3223"'))
alert(num)

