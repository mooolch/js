'use strict'

// Задача 11.
// Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.

function setInitBgColor() {
	const body = document.querySelector('body')
	if (!localStorage.getItem('bgcolor')) localStorage.setItem('bgcolor', 'black')
	body.style.backgroundColor = localStorage.getItem('bgcolor')
}
function changeBgColor(e) {
	const color = e.target.value
	localStorage.setItem('bgcolor', color)
	document.querySelector('body').style.backgroundColor = color
	colorChangeHistory()
}
function colorChangeHistory() {
	const changesNum = parseInt(sessionStorage.getItem('bgColorChanges')) || 0
	sessionStorage.setItem('bgColorChanges', changesNum + 1)
	document.querySelector('#res').innerText = changesNum + 1
}

document.getElementById('colorInp').addEventListener('input', changeBgColor)

//========================================================================================================================================================

// Задача 12.
// Зберігати у пам’яті список справ, які користувачу треба виконати(зберігати у localStorage).Періодично випадковим чином вибирати якусь з справ і виводити користувачу(з використанням confirm).Якщо користувач натискає на «Ок», то видаляти цю задачу.

const tasks = [
	'Розв`язати приклад: 2+2',
	'Вимити посуд після обіду',
	'Перевірити та оновити список покупок перед візитом в супермаркет',
	'Зробити коротку зарядку для очей та тіла',
	'Послухати відпочивальну музику або медитувати',
	'Приготувати собі чашку чаю або кави',
	'Вивчити нову корисну комбінацію клавіш на клавіатурі',
	'Посортувати свої відходи для переробки',
	'Провести коротку перерву на свіжому повітрі',
	'Написати короткий список завдань на завтрашній день',
]

function addTasks(tasks) {
	for (let i = 0; i < tasks.length; i++) {
		localStorage.setItem(`task_${i + 1}`, tasks[i])
	}
}

const randomLocalStorEl = () => Math.floor(Math.random() * localStorage.length)

function getRandomTask(tasksNum) {
	let compleetedTasks = 0
	const element = localStorage.key(randomLocalStorEl())
	if (/task/.test(element)) {
		const isCompletedTask = confirm(`${localStorage.getItem(`${element}`)}`)
		if (isCompletedTask) localStorage.removeItem(element)
		compleetedTasks++
	}

	const repeat = setTimeout(getRandomTask, 5000)
	if (!/task/.test(JSON.stringify(localStorage))) {
		alert('Всі завдання виконано')
		clearTimeout(repeat)
	}
}

window.onload = () => {
	setInitBgColor()
	document.querySelector('#res').innerText = sessionStorage.getItem('bgColorChanges') || 0
	document.getElementById('colorInp').value = localStorage.getItem('bgcolor')
	//====================
	addTasks(tasks)
	setTimeout(getRandomTask, 3000, tasks.length)
}
