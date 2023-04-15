'use strict'

class TableCreator {
	constructor(rows, columns, minNum, maxNum) {
		this.rows = rows
		this.columns = columns
		this.minNum = minNum
		this.maxNum = maxNum
	}
	getRandomNum() {
		return this.minNum + Math.floor(Math.random() * (this.maxNum - this.minNum + 1))
	}
	createTable() {}
	render(parentSelector) {
		const table = document.createElement('table')
		table.classList.add('my-table')
		for (let row = 0; row < this.rows; row++) {
			const row = document.createElement('tr')
			for (let col = 0; col < this.columns; col++) {
				const cell = document.createElement('td')
				cell.innerText = this.getRandomNum()
				row.append(cell)
			}
			table.append(row)
		}
		const targetEl = document.querySelector(parentSelector)
		targetEl.append(table)
	}
}

const ttt = new TableCreator(3, 4, 11, 33)

ttt.render('.task__body')
