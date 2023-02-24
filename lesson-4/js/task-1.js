const listItemsNum = parseInt(prompt('Ввведіть кількість елементів списку', '4'))
const el = document.querySelector('.task__body')

for (let i = 0; i < listItemsNum; i++) {
	const randomNum = 1 + Math.floor(Math.random() * (100 - 1 + 1))
	
	const listItem = document.createElement('li')
	listItem.textContent = randomNum
	el.appendChild(listItem)
}
