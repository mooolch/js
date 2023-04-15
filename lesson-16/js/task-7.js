'use strict'

class TripCalculator {
	constructor(formId) {
		this.parentId = formId
	}
	printTotalPrice(outputId) {
		const selects = document.querySelectorAll(`#${this.parentId} select`)
		const inputs = document.querySelectorAll(`#${this.parentId} input`)
		let total_sum = 0
		for (const select of selects) {
			total_sum += parseFloat(select.value)
		}
		for (const inp of inputs) {
			if (inp.checked) total_sum += parseFloat(inp.value)
		}
		document.getElementById(outputId).innerText = total_sum
	}
}

const tripCacl = new TripCalculator('tr-c')

document.getElementById('tr-c').onchange = () => tripCacl.printTotalPrice('price')
