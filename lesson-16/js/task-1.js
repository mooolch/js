'use strict'

class Calculator {
	constructor(inp1, inp2, output) {
		this.inp1 = inp1
		this.inp2 = inp2
		this.output = output
	}
	sum() {
		const num1 = parseFloat(document.getElementById(this.inp1).value)
		const num2 = parseFloat(document.getElementById(this.inp2).value)
		const sum = num1 + num2
		document.getElementById(this.output).value = sum
	}
	diff() {
		const num1 = parseFloat(document.getElementById(this.inp1).value)
		const num2 = parseFloat(document.getElementById(this.inp2).value)
		const sum = num1 - num2
		document.getElementById(this.output).value = sum
	}
	mult() {
		const num1 = parseFloat(document.getElementById(this.inp1).value)
		const num2 = parseFloat(document.getElementById(this.inp2).value)
		const sum = num1 * num2
		document.getElementById(this.output).value = sum
	}
	div() {
		const num1 = parseFloat(document.getElementById(this.inp1).value)
		const num2 = parseFloat(document.getElementById(this.inp2).value)
		const sum = num1 / num2
		document.getElementById(this.output).value = sum.toFixed(3)
	}
	clear() {
		document.getElementById(this.inp1).value = ''
		document.getElementById(this.inp2).value = ''
		document.getElementById(this.output).value = ''
	}
}

const calculator = new Calculator('num1', 'num2','res')

document.getElementById('sum').onclick = () => calculator.sum()
document.getElementById('diff').onclick = () => calculator.diff()
document.getElementById('mult').onclick = () => calculator.mult()
document.getElementById('div').onclick = () => calculator.div()
document.getElementById('del').onclick = () => calculator.clear()
