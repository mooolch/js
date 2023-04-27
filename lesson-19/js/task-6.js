'use strict'

class LiveSearch {
	constructor(dataArr, cssStylesObj) {
		this.dataArr = dataArr
		this.styles = {
			container: 'search-container',
			row: 'search-container__row',
			input: 'search-container__input',
			result: 'search-container__result',
			...(cssStylesObj ?? {}),
		}
	}
	createEl() {
		const container = document.createElement('div')
		container.classList.add(this.styles.container)

		const row = document.createElement('div')
		row.classList.add(this.styles.row)
		container.append(row)

		const label = document.createElement('label')
		label.innerText = 'Пошук'
		row.append(label)

		const inp = document.createElement('input')
		inp.classList.add(this.styles.input)
		label.append(inp)
		inp.oninput = this.search.bind(this)

		this.result = document.createElement('div')
		this.result.classList.add(this.styles.result)
		container.append(this.result)

		return container
	}
	search(e) {
		const inpVal = e.target.value.toLowerCase()
		const resArr = []
		for (const name of names) {
			if (name.toLowerCase().includes(inpVal)) {
				resArr.push(name)
			}
			this.udateRes(resArr, inpVal)
		}
	}
	udateRes(resArr, inpVal) {
		const ul = document.createElement('ul')
		for (const res of resArr) {
			const li = document.createElement('li')
			li.innerText = res
			ul.append(li)
		}
		this.result.replaceChildren(ul)
		if (inpVal.length === 0) this.result.innerHTML = ''
	}
	render(parentSelector) {
		document.querySelector(parentSelector).append(this.createEl())
	}
}

const names = [
	'Андрусенко А. А.',
	'Білоусов Б. В.',
	'Василюк В. І.',
	'Гончар Г. М.',
	'Данилюк Д. В.',
	'Євтушенко Є. П.',
	'Завадський З. В.',
	'Іваненко І. М.',
	'Карпенко К. І.',
	'Литвиненко Л. О.',
	'Мельник М. О.',
	'Нестеренко Н. А.',
	'Онопко О. В.',
	'Павлюк П. М.',
	'Радченко Р. С.',
	'Сидоренко С. І.',
	'Ткаченко Т. О.',
	'Усач У. П.',
	'Федоренко Ф. М.',
	'Харченко Х. А.',
	'Цимбалюк Ц. В.',
	'Черненко Ч. О.',
	'Шевченко Ш. М.',
	'Щербак Щ. П.',
	'Юрченко Ю. І.',
	'Яковенко Я. М.',
	'Коваленко К. В.',
	'Петренко П. В.',
	'Грищенко Г. О.',
	'Лисенко Л. М.',
]

const search = new LiveSearch(names)
search.render('.task__body')

//========================================================================================================================================================
/* 
document.querySelector('input').oninput = function (e) {
	const inpVal = e.target.value.toLowerCase()
	const res = []
	for (const name of names) {
		if (name.toLowerCase().includes(inpVal)) {
			res.push(name)
		}
		document.querySelector('.res').innerHTML = res
		if (inpVal.length === 0) document.querySelector('.res').innerHTML = ''
	}
} 
*/
