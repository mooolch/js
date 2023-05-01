'use strict'

const clients = [
	{
		id: new Date().getTime(),
		name: 'Ivan',
		balance: 15000,
		creditBalance: 10000,
		interestRate: 5,
	},
	{
		id: new Date().getTime(),
		name: 'Maria',
		balance: 20000,
		creditBalance: 12000,
		interestRate: 3.5,
	},
	{
		id: new Date().getTime(),
		name: 'Alex',
		balance: 30000,
		creditBalance: 15000,
		interestRate: 4,
	},
	{
		id: new Date().getTime(),
		name: 'Olga',
		balance: 25000,
	},
	{
		id: new Date().getTime(),
		name: 'Vladimir',
		balance: 18000,
		creditBalance: 12000,
		interestRate: 3,
	},
	{
		id: new Date().getTime(),
		name: 'Galina',
		balance: 10000,
	},
	{
		id: new Date().getTime(),
		name: 'Maxim',
		balance: 50000,
		creditBalance: 25000,
		interestRate: 6,
	},
	{
		id: new Date().getTime(),
		name: 'Anna',
		balance: 12000,
	},
	{
		id: new Date().getTime(),
		name: 'Denis',
		balance: 15000,
		creditBalance: 8000,
		interestRate: 4,
	},
	{
		id: new Date().getTime(),
		name: 'Sofia',
		balance: 20000,
	},
]

class Client {
	constructor({ id, name, balance }) {
		this.id = id
		this.name = name
		this.balance = balance
	}
	replenishBalance(value) {
		if (value >= 0) {
			this.balance += value
		} else {
			throw new Error('This value can`t be negative')
		}
	}
	withdrawCash(value) {
		if (value >= 0) {
			if (value <= this.balance) {
				this.balance -= value
			} else {
				throw new Error('Not enough money on balance')
			}
		} else {
			throw new Error('This value can`t be negative')
		}
	}
	toString() {
		return `Client name: ${this.name}<br>Client id: ${this.id}<br>Client balance: ${this.balance} $`
	}
}

class GoldenClient extends Client {
	#allowedCreditBlance
	constructor({ id, name, balance, creditBalance, interestRate }) {
		super({ id, name, balance })
		this.creditBalance = creditBalance
		this.interestRatePerMonth = interestRate
		this.AllowedCreditBlance = creditBalance
	}
	set AllowedCreditBlance(val) {
		if (val > 0) this.#allowedCreditBlance = val
	}
	get AllowedCreditBlance() {
		return this.#allowedCreditBlance
	}
	replenishBalance(value) {
		if (value >= 0) {
			// Сначала гасим кредит, а потом пополняем основной баланс
			const creditSumToPay = this.AllowedCreditBlance - this.creditBalance
			if (creditSumToPay > 0) {
				this.creditBalance += value
				if (this.creditBalance > this.AllowedCreditBlance) {
					this.balance += this.creditBalance - this.AllowedCreditBlance
					this.creditBalance = this.AllowedCreditBlance
				}
			} else this.balance += value
		} else {
			throw new Error('This value can`t be negative')
		}
	}
	withdrawCash(value) {
		if (value >= 0) {
			try {
				if (value <= this.balance) {
					this.balance -= value
				} else {
					throw new Error('Not enough money on balance')
				}
			} catch (err) {
				let totalBalance = this.balance + this.creditBalance
				if (totalBalance >= value) {
					// тут можно спросить хочет ли пользователь снять деньги с кредитного счета прежде чем продолжать
					totalBalance -= value
					this.balance = 0
					this.creditBalance = totalBalance
				} else {
					throw new Error('Not enough money on balance')
				}
			}
		} else {
			throw new Error('This value can`t be negative')
		}
	}
	calcCreditCostPenalty(moneySum, periodInMonths) {
		return (moneySum * (this.interestRatePerMonth * periodInMonths)) / 100
	}
	toString() {
		return `Client name: ${this.name}<br>Client id: ${this.id}<br>Client balance: ${this.balance} $<br>Credit balance: ${this.creditBalance} $<br>Interest rate: ${this.interestRatePerMonth} %`
	}
}

class Bank {
	constructor(clientsDataObj_arr) {
		this.clientsList = []
		this.createClient(clientsDataObj_arr)
	}
	createClient(clientsDataObj_arr) {
		for (const client of clientsDataObj_arr) {
			if ('creditBalance' in client) {
				this.clientsList.push(new GoldenClient(client))
			} else {
				this.clientsList.push(new Client(client))
			}
		}
	}
	getGoldenClientsList() {
		return this.clientsList.filter(client => 'creditBalance' in client)
	}
	getRegularClientsList() {
		return this.clientsList.filter(client => !('creditBalance' in client))
	}
	calcTotalBankBalance() {
		return this.clientsList.reduce((sum, client) => sum + client.balance, 0)
	}
}

const bank = new Bank(clients)

console.log(bank)
console.log(bank.getGoldenClientsList())
console.log(bank.getRegularClientsList())
console.log(bank.calcTotalBankBalance())
