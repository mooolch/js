'use strict'

const banknotesList = [
	{
		denomination: 5,
		quantity: 10,
	},
	{
		denomination: 10,
		quantity: 10,
	},
	{
		denomination: 20,
		quantity: 10,
	},
	{
		denomination: 50,
		quantity: 40,
	},
	{
		denomination: 100,
		quantity: 50,
	},
	{
		denomination: 200,
		quantity: 60,
	},
]

class TBankomat {
	constructor(banknotesList) {
		this.banknotesList = banknotesList
	}
	maxPossiblePayment() {
		return banknotesList.reduce((sum, banknote) => sum + banknote.denomination * banknote.quantity, 0)
	}
	minPossiblePayment() {
		for (const banknote of banknotesList) {
			if (banknote.quantity > 0) return banknote.denomination
		}
	}
	cashWithdrawal(sum) {
		if (sum % 5 !== 0) throw new Error('The entered amount of money must be a multiple of five.')
		if (this.maxPossiblePayment() < sum) throw new Error('Not enough money in ATM')
		let reminder = sum
		const end = this.banknotesList.length - 1
		for (let i = end; i >= 0; i--) {
			while (reminder / this.banknotesList[i].denomination >= 1 && this.banknotesList[i].quantity > 0) {
				this.banknotesList[i].quantity--
				reminder -= this.banknotesList[i].denomination
			}
		}
		if (reminder > 0) throw new Error('There are no bills available for dispensing this amount.')
		return reminder
	}
	toString() {
		return `Banknotes in stock: <br>
        ${this.banknotesList[0].denomination} UAH - ${this.banknotesList[0].quantity} pcs. <br>
        ${this.banknotesList[1].denomination} UAH - ${this.banknotesList[1].quantity} pcs. <br>
        ${this.banknotesList[2].denomination} UAH - ${this.banknotesList[2].quantity} pcs. <br>
        ${this.banknotesList[3].denomination} UAH - ${this.banknotesList[3].quantity} pcs. <br>
        ${this.banknotesList[4].denomination} UAH - ${this.banknotesList[4].quantity} pcs. <br>
        ${this.banknotesList[5].denomination} UAH - ${this.banknotesList[5].quantity} pcs. <br>
        `
	}
}

const ATM = new TBankomat(banknotesList)

//======================
function func1() {
	const moneyAmount = parseInt(prompt('Введите сумму для снятия денег (кратную 5-ти)', '0'))
	if (moneyAmount === 0 || isNaN(moneyAmount)) {
		alert('Операция отменена')
		return
	}
	ATM.cashWithdrawal(moneyAmount)

	const el = (document.querySelector('.task__body--main').innerHTML = ATM.toString())
	const el2 = (document.querySelector(
		'.task__body--maxBalance'
	).innerHTML = `Текущий остаток средств в банкомате - ${ATM.maxPossiblePayment()} UAH`)
	const el3 = (document.querySelector(
		'.task__body--minBalance'
	).innerHTML = `Минимальная доступная к выдаче сумма - ${ATM.minPossiblePayment()} UAH`)
	alert('Операция успешна.')
}
