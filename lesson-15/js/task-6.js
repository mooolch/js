'use strict'

class TestData {
	constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
		this.firstNum = firstNum
		this.secondNum = secondNum
		this.operation = operation
		this.userAnswer = userAnswer
		this.correctAnswer = correctAnswer
	}
	toString() {
		return `First number: ${this.firstNum}, Second number: ${this.secondNum}, Operation: ${this.operation}, User answer: ${this.userAnswer}, Correct answer: ${this.correctAnswer}`
	}
}

class MultChecker {
	constructor() {}
	randomNum() {
		return 2 + Math.floor(Math.random() * (9 - 2 + 1))
	}
	runTest() {
		const num1 = this.randomNum()
		const num2 = this.randomNum()
		const res = num1 + num2
		const userAnswer = this.getUserAnswer(num1, num2)
		return new TestData(num1, num2, '*', userAnswer, res)
	}
	getUserAnswer(val1, val2) {
		return parseInt(prompt(`Скільки буде ${val1} * ${val2} ?`))
	}
}

class AddChecker {
	constructor(minNum, maxNum) {
		if (minNum >= maxNum) throw new Error('minNum must be less than maxNum')
		if (!isFinite(minNum) || !isFinite(maxNum)) throw new Error('minNum and maxNum must be numbers!')
		this.minNum = minNum
		this.maxNum = maxNum
	}
	randomNum() {
		return this.minNum + Math.floor(Math.random() * (this.maxNum - this.minNum + 1))
	}
	runTest() {
		const num1 = this.randomNum()
		const num2 = this.randomNum()
		const res = num1 + num2
		const userAnswer = this.getUserAnswer(num1, num2)
		return new TestData(num1, num2, '+', userAnswer, res)
	}
	getUserAnswer(val1, val2) {
		return parseInt(prompt(`Скільки буде ${val1} + ${val2} ?`))
	}
}

class History {
	static historyRef
	static testList = []
	constructor() {
		if (History.historyRef) return History.historyRef
		History.historyRef = this
	}
	static addResult(result) {
		History.testList.push(result)
	}
	static toString() {
		return `${History.testList}`
	}
}

class TestManager {
	constructor(numberOfTests) {
		this.numberOfTests = numberOfTests
	}
	runTest() {
		const el = document.querySelector('.task__body')
		for (let i = 0; i < this.numberOfTests; i++) {
			setTimeout(() => {
				if (Math.floor(Math.random() * 2)) {
					const mult = new MultChecker()
					const result = mult.runTest()
					const res = document.createElement('p')
					res.innerHTML = result
					el.append(res)
					History.addResult(result)
				} else {
					const add = new AddChecker(2, 50)
					const result = add.runTest()
					const res = document.createElement('p')
					res.innerHTML = result
					el.append(res)
					History.addResult(result)
				}
			}, 2000)
		}
	}
}

const test = new TestManager(5)
test.runTest()

//========================================================================================================================================================
/* 
class MultChecker {
	constructor() {}
	static randomNum() {
		return 2 + Math.floor(Math.random() * (9 - 2 + 1))
	}
	static runTest() {
		const num1 = MultChecker.randomNum()
		const num2 = MultChecker.randomNum()
		const res = num1 * num2
		const userAnswer = this.getUserAnswer(num1, num2)
		History.addResult({
			firstNum: num1,
			secondNum: num2,
			operation: '*',
			userAnswer: userAnswer,
			correctAnswer: res,
		})
	}
	static getUserAnswer(val1, val2) {
		return parseInt(prompt(`Скільки буде ${val1} * ${val2} ?`))
	}
}

class AddChecker {
	constructor(minNum, maxNum) {
		if (minNum >= maxNum) throw new Error('minNum must be less than maxNum')
		if (!isFinite(minNum) || !isFinite(maxNum)) throw new Error('minNum and maxNum must be numbers!')
		this.minNum = minNum
		this.maxNum = maxNum
	}
	randomNum() {
		return this.minNum + Math.floor(Math.random() * (this.maxNum - this.minNum + 1))
	}
	runTest() {
		const num1 = this.randomNum()
		const num2 = this.randomNum()
		const res = num1 + num2
		const userAnswer = this.getUserAnswer(num1, num2)
		History.addResult({
			firstNum: num1,
			secondNum: num2,
			operation: '+',
			userAnswer: userAnswer,
			correctAnswer: res,
		})
	}
	getUserAnswer(val1, val2) {
		return parseInt(prompt(`Скільки буде ${val1} + ${val2} ?`))
	}
}

class History {
	static historyRef
	static testList = []
	constructor() {
		if (History.historyRef) return History.historyRef
		History.historyRef = this
	}
	static addResult(result) {
		History.testList.push(result)
	}
	static toString() {
		let msg = ''
		for (let i = 0, arr = History.testList; i < arr.length; i++) {
			msg += `First number: ${arr[i].firstNum}, Second number: ${arr[i].secondNum},
				Operation: ${arr[i].operation}, User answer: ${arr[i].userAnswer}, Correct answer: ${arr[i].correctAnswer}<br>`
		}
		return msg
	}
}

class TestManager {
	constructor(numberOfTests) {
		this.numberOfTests = numberOfTests
	}
	runTest() {
		for (let i = 0; i < this.numberOfTests; i++) {
			setTimeout(() => {
				if (Math.floor(Math.random() * 2)) {
					const addChecker = new AddChecker(2, 50)
					addChecker.runTest()
				} else {
					MultChecker.runTest()
				}
			}, 2000)
		}
	}
}
*/
