'use strict'

class TableCreator {
	constructor(minRandNum, MaxRandNum) {
		this.minRandNum = minRandNum
		this.MaxRandNum = MaxRandNum
	}
	getRandomNum() {
		return this.minRandNum + Math.floor(Math.random() * (this.MaxRandNum - this.minRandNum + 1))
	}
	render(parentSelector, numberOfTables) {
		for (let i = 1; i <= numberOfTables; i++) {
			const container = document.createElement('div')
			container.classList.add('cont')

			const title = document.createElement('h2')
			title.innerText = `Table #${i}`
			container.append(title)

			const span = document.createElement('span')
			span.classList.add('click-counter')
			span.setAttribute('clicks', 0)
			span.innerText = 0
			title.append(span)

			const table = document.createElement('table')
			container.append(table)
			for (let i = 0; i < 3; i++) {
				const tr = document.createElement('tr')

				table.append(tr)

				for (let i = 0; i < 3; i++) {
					const td = document.createElement('td')
					td.innerText = this.getRandomNum()
					tr.append(td)
				}
			}
			document.querySelector(parentSelector).append(container)
		}
	}
}

const table = new TableCreator(1, 10)
table.render('.tables_3x3', 3)

window.onload = function () {
	document.querySelector('.tables_3x3').addEventListener('click', function (e) {
		const tables = document.querySelectorAll('.cont')
		for (const table of tables) {
			table.classList.remove('_focus_')
		}
		if (e.target.tagName === 'TD') {
			e.target.closest('.cont').classList.add('_focus_')
			const span = e.target.closest('.cont').querySelector('.click-counter')
			const newClicks = parseInt(span.getAttribute('clicks')) + 1
			span.setAttribute('clicks', `${newClicks}`)
			span.innerText = `${newClicks}`
		}
	})
}
