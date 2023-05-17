'use strict'

const text = prompt('Insert your hello message', 'Hello :)')

const apis = {
	catPic: `https://cataas.com/cat/gif/says/${text}`,
	catFact: 'https://cat-fact.herokuapp.com/facts',
}

function removeLoader() {
	document.querySelector('.loader').remove()
}

async function getCatPicture() {
	return new Promise((resolve, reject) => {
		fetch(apis.catPic)
			.then(res => res.url)
			.then(imgUrl => resolve(imgUrl))
			.catch(err => console.log(err))
	})
}

async function getСatsFacts() {
	return new Promise((resolve, reject) => {
		fetch(apis.catFact)
			.then(res => res.json())
			.then(data => resolve(data))
			.catch(err => console.log(err))
	})
}

async function printImage(url) {
	const parent = document.querySelector('.task__body')

	const div = document.createElement('div')
	div.classList.add('image')
	const img = document.createElement('img')
	img.src = url
	div.append(img)
	parent.append(div)
}

function printFact(facts) {
	const parent = document.querySelector('.task__body')
	facts.forEach((fact, idx) => {
		const div = document.createElement('div')
		div.classList.add('fact')
		div.innerText = `${idx + 1}__ ${fact.text}`
		parent.append(div)
	})
}

async function render() {
	const url = await getCatPicture()
	const facts = await getСatsFacts()
	printImage(url)
	printFact(facts)
	removeLoader()
}

render()
