'use strict'

class TMoney {
	#accountBalance_usd
	#walletCourse_usd_uah
	constructor(usdBalance, walletCourse) {
		this.AccountBalance_usd = usdBalance
		this.WalletCourse_usd_uah = walletCourse
	}
	get AccountBalance_usd() {
		return this.#accountBalance_usd
	}
	get WalletCourse_usd_uah() {
		return this.#walletCourse_usd_uah
	}
	set AccountBalance_usd(value) {
		if (value < 0) throw new Error("This value can't be negitive")
		this.#accountBalance_usd = value
	}
	set WalletCourse_usd_uah(value) {
		if (value <= 0) throw new Error("This value can't be non-positive")
		this.#walletCourse_usd_uah = value
	}
	toString() {
		return `Current account balance ${this.#accountBalance_usd.toFixed(
			2
		)}, current USD course ${this.#walletCourse_usd_uah.toFixed(2)}`
	}
	withdrawal_UAH(uah_amount) {
		if (uah_amount < 0) throw new Error("This value can't be negitive")
		const withdrawalRequest = uah_amount / this.WalletCourse_usd_uah
		if (withdrawalRequest > this.AccountBalance_usd) throw new Error('Not enough money in the bank account.')
		this.AccountBalance_usd -= withdrawalRequest
	}
	replenishment_UAH(uah_amount) {
		if (uah_amount < 0) throw new Error("This value can't be negitive")
		this.AccountBalance_usd += uah_amount / this.WalletCourse_usd_uah
	}
	getProfit(sum) {
		let prSum = sum * this.WalletCourse_usd_uah + 100
		let res = prSum / sum
		return res
	}
	//=========================================================================================
}
const myBankAcc = new TMoney(1000, 37.4648)
console.log(myBankAcc)

// Возможно я не совсем правильно понял это задание.
// Функция считает при каком курсе я смогу получить нужную надбавку, если вложу определенную сумму по сегодняшнему курсу.
function calcNewExchangeCourse(investmenutSum, profitSum, currentCourse) {
	const newCourse = (investmenutSum + profitSum) / (investmenutSum / currentCourse)
	return newCourse
}
// Вкладываю 200 грн по курсу 37 и хочу забрать 300 грн через какое-то время.
// 300 я смогу забрать грн когда курс доллара достигнет 55.5 грн

console.log(calcNewExchangeCourse(200, 100, 37).toFixed(2))
