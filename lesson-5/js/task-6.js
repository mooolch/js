'use strict'

const trQuantity = parseInt(prompt('Введіть к-ть рядів таблиці', '3'))
const tdQuantity = parseInt(prompt('Введіть к-ть комірок таблиці', '5'))
const content = prompt('Введіть текст для заповнення комірки', 'Lorem, ipsum dolor.')

function createTable(trQuantity, tdQuantity, content) {
	document.write('<table>')
	//Создаем ряды
	for (let i = 0; i < trQuantity; i++) {
		document.write('<tr>')
		//Создаем колонки
		for (let j = 0; j < tdQuantity; j++) {
			document.write('<td>')
			document.write(content)
			document.write('</td>')
		}
		document.write('</tr>')
	}
	document.write('</table>')
}

createTable(trQuantity, tdQuantity, content)
