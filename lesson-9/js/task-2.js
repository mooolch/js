'use strict'

function generateShopsProfitInPeriod(numberOfShops, period) {
	const shopsProfit = []
	for (let i = 0; i < numberOfShops; i++) {
		const shopProfit = []
		for (let i = 0; i < period; i++) {
			const randomNum = 100 + Math.floor(Math.random() * (500 - 100 + 1))
			shopProfit.push(randomNum)
		}
		shopsProfit.push(shopProfit)
	}
	return shopsProfit
}

const shopsProfitPerWeek = generateShopsProfitInPeriod(5, 7)
console.log(shopsProfitPerWeek)

//========================================================================================================================================================
//1 загальний прибуток кожного магазину за тиждень;

let i = 0 // Каунтер только для понятного вывода в консоль

for (const element of shopsProfitPerWeek) {
	let shopProfitSum = 0
	for (const innerEl of element) {
		shopProfitSum += innerEl
	}
	i++ // Каунтер только для понятного вывода в консоль
	console.log(`Прибуток ${i}-го магазину за тиждень ${shopProfitSum}`)
}

//========================================================================================================================================================
//2 Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

function totalSumPerDay(day) {
	let daySum = 0
	for (let i = 0; i < shopsProfitPerWeek.length; i++) {
		daySum += shopsProfitPerWeek[i][day - 1]
	}
	return daySum
}
//Получаем общую прибыль всех магазинов за конкретный день
console.log(`Загальний прибуток за конкретний день ${totalSumPerDay(6)}`)

//========================================================================================================================================================
//3 загальний прибуток за робочі дні

let totalWorkingDaysSum = 0

for (const element of shopsProfitPerWeek) {
	for (let i = 0; i < 5; i++) {
		totalWorkingDaysSum += element[i]
	}
}
console.log(`Загальний прибуток за робочі дні ${totalWorkingDaysSum}`)

//========================================================================================================================================================
//4 загальний прибуток за вихідні дні

let totaldayOffSum = 0

for (const element of shopsProfitPerWeek) {
	for (let i = 5; i < element.length; i++) {
		totaldayOffSum += element[i]
	}
}
console.log(`Загальний прибуток за вихiднi дні ${totaldayOffSum}`)

//========================================================================================================================================================
//5 максимальний прибуток за середу

function getMaxProfitPerDeay(day) {
	let maxWednesdayProfit = 0
	for (const element of shopsProfitPerWeek) {
		element[day - 1] > maxWednesdayProfit ? (maxWednesdayProfit = element[day - 1]) : maxWednesdayProfit
	}
	return maxWednesdayProfit
}
console.log(`Максимальний прибуток за середу ${getMaxProfitPerDeay(3)}`)

//========================================================================================================================================================
//6 сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

const moreThan200Values = []

for (const element of shopsProfitPerWeek) {
	for (const innerEl of element) {
		if (innerEl > 200) moreThan200Values.push(innerEl)
	}
}
console.log(`Список значень бiльших за 200 ${moreThan200Values}`)

//========================================================================================================================================================
//7 відсортувати кожен тиждень за зростанням

for (const element of shopsProfitPerWeek) {
	element.sort((el1, el2) => el1 - el2)
}
console.log(shopsProfitPerWeek)

//========================================================================================================================================================
//8 відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

shopsProfitPerWeek.sort((el1, el2) => Math.max(...el2) - Math.max(...el1))
console.log(shopsProfitPerWeek)

//========================================================================================================================================================
//9  упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

shopsProfitPerWeek.sort((el1, el2) => el2.reduce((sum, el) => (sum += el)) - el1.reduce((sum, el) => (sum += el)))
console.log(shopsProfitPerWeek)
