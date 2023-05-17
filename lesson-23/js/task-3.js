'use strict'

function* evenNumsGenerator(quantity, evenMinNum, evenMaxNum) {
	const min = evenMinNum / 2
	const max = evenMaxNum / 2
	for (let i = 0; i < quantity; i++) {
		yield (min + Math.floor(Math.random() * (max - min + 1))) * 2
	}
}

const generator = evenNumsGenerator(10, 2, 40)

for (const num of generator) {
	console.log(num)
}
//========================================================================================================================================================
console.log('-----------------------')
//========================================================================================================================================================
class EvenNumsGenerator {
	constructor(quantity, evenMinNum, evenMaxNum) {
		this.quantity = quantity
		this.evenMinNum = evenMinNum
		this.evenMaxNum = evenMaxNum
	}
	*[Symbol.iterator]() {
		this.current = 0
		this.min = this.evenMinNum / 2
		this.max = this.evenMaxNum / 2
		while (this.current < this.quantity) {
			yield (this.min + Math.floor(Math.random() * (this.max - this.min + 1))) * 2
			this.current++
		}
	}
}

const classGenerator = new EvenNumsGenerator(10, 2, 40)

for (const num of classGenerator) {
	console.log(num)
}