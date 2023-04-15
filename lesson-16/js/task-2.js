'use strict'

class Converter {
	constructor(usdRate, eurRate) {
		this.usdRate = usdRate
		this.eurRate = eurRate
	}
	usdToUah(uah) {
		return uah / this.usdRate
	}
	eurToUah(uah) {
		return uah / this.eurRate
	}
	runConverter(input_id, output1_id, output2_id) {
		const uah = parseFloat(document.getElementById(input_id).value)
		document.getElementById(output1_id).value = this.usdToUah(uah).toFixed(2)
		document.getElementById(output2_id).value = this.eurToUah(uah).toFixed(2)
	}
}

const converter = new Converter(37, 40)

document.getElementById('run').onclick = () => converter.runConverter('uah', 'usd', 'eur')
