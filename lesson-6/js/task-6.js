'use strict'

const usersMoney = parseFloat(prompt('Введіть сумму грошей яка є у вас в наявності, грн. коп.', '535.50'))
const productNames = [
	'консерви',
	'молоко',
	'йогурт',
	'сир',
	'масло',
	'яйця',
	'борошно',
	'цукор',
	'рис',
	'крупи',
	'хліб',
	"м'ясо",
	'риба',
	'яблука',
	'картопля',
]
const productPrices = [35, 400, 78, 48, 42, 60, 43, 270, 80, 85, 130, 200, 50, 350, 36]

// Получаем список продуктов которые может купить пользователь в виде массива с массивами(Я думаю так с данными будет намного проще работать дальше. Насколько это хорошее решение?)
function getAllowedProductsList(usersMoney, productPrices, productNames) {
	const allowedProductsList = []
	for (let i = 0; i < productPrices.length; i++) {
		if (usersMoney >= productPrices[i]) {
			allowedProductsList.push([productNames[i], productPrices[i]])
		}
	}
	return allowedProductsList
}
const productsList = getAllowedProductsList(usersMoney, productPrices, productNames)

//Из спика продуктов уже формируем сообщение
function printMessage(productsList) {
	let el = document.querySelector('.task__body')
	let message = ''
	if (productsList.length > 0) {
		message += '<p>Ви можете придбати :</p>'
		for (let i = 0; i < productsList.length; i++) {
			message += `${productsList[i][0]} - ${productsList[i][1]} грн. <br>`
		}
	} else message = `<p>Грошей не вистачить на жоден з продуктів :<</p>`
	el.innerHTML = `${message}`
}
printMessage(productsList)

//========================================================================================================================================================
// Тут функция 2 в 1 и находим продукт и сразу формируем сообщение в виде строки. Все намного проще, но мне такое решение не сильно нравится так как имеем на выходе сроку

/* function printAllowedProductsList(usersMoney, productPrices, productNames) {
	let allowedProductsList = ''
	for (let i = 0; i < productPrices.length; i++) {
		if (usersMoney >= productPrices[i]) {
			allowedProductsList += `${productNames[i]} - ${productPrices[i]} грн. <br>`
		}
	}
	return allowedProductsList
}

let productsList = printAllowedProductsList(usersMoney, productPrices, productNames)
if (!productsList) productsList = 'Грошей не вистачить на жоден з продуктів :<'
let el = (document.querySelector('.task__body').innerHTML = `
<p>Ви можете придбати :</p>
<p>${productsList}</p>
`)
 */