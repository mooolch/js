'use strict'

class GradesCalculator {
	renderTable(gradesNum, parentSelector) {
		this.inputClass = 'grades-inp'
		const table = document.createElement('table')
		for (let rows = 0; rows < gradesNum; rows++) {
			const tr = document.createElement('tr')
			const td = document.createElement('td')
			const inp = document.createElement('input')
			inp.setAttribute('type', 'number')
			inp.setAttribute('min', 1)
			inp.setAttribute('max', 12)
			inp.classList.add(this.inputClass)
			td.append(inp)
			tr.append(td)
			table.append(tr)
		}
		document.querySelector(parentSelector).replaceChildren(table)
		this.renderResultBtn(parentSelector)
	}
	calcAverage(outputSelector) {
		const grades = document.querySelectorAll(`.${this.inputClass}`)
		let sum = 0
		for (const inp of grades) {
			sum += parseInt(inp.value)
		}
		const average = sum / grades.length
		document.querySelector(outputSelector).innerText = `Середній бал: ${average.toFixed(1)}`
	}
	renderResultBtn(parentSelector) {
		const block = document.createElement('div')
		const btn = document.createElement('button')
		const res = document.createElement('div')
		btn.classList.add('grades-calc')
		btn.innerText = 'Розрахувати'
		res.classList.add('res')
		block.append(btn, res)
		document.querySelector(parentSelector).append(block)
		document.querySelector('.grades-calc').onclick = () => tt.calcAverage('.res')
		//можно ли так делать прямо внутри метода?
		// хотел кнопку результата тоже динамично вывести
	}
}

const tt = new GradesCalculator()

document.getElementById('create_btn').onclick = function () {
	const grades = parseInt(document.getElementById('grades').value)
	tt.renderTable(grades, '.table')
}
