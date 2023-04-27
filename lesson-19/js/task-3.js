'use strict'

const data = { minRandNum: 1, MaxRandNum: 100, minLiCount: 1, maxLiCount: 10 }

class ListCreator {
	constructor(dataObj) {
		Object.assign(this, dataObj)
	}
	getRandomNum() {
		return this.minRandNum + Math.floor(Math.random() * (this.MaxRandNum - this.minRandNum + 1))
	}
	getRandomLiNum() {
		return this.minLiCount + Math.floor(Math.random() * (this.maxLiCount - this.minLiCount + 1))
	}
	createList() {
		const ol = document.createElement('ol')
		for (let i = 0; i < this.getRandomLiNum(); i++) {
			const li = document.createElement('li')
			li.innerText = this.getRandomNum()
			ol.append(li)
		}
		return ol
	}
	render(parentSelector, listsNum) {
		for (let i = 0; i < listsNum; i++) {
			document.querySelector(parentSelector).append(this.createList())
		}
	}
}

const obj1 = new ListCreator(data)
obj1.render('.lists-container', 5)

//=========================================================================================

document.getElementById('btn').addEventListener('click', function () {
	const lists = document.querySelectorAll('ol')
	for (const ol of lists) {
		ol.children.length % 2 ? ol.classList.add('odd') : ol.classList.add('even')
	}
})
