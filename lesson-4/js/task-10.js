const minInterval = parseInt(
	prompt('Задайте інтервал у якому потрібно порахувати суму всіх непарних чисел.\nВведіть початок проміжку', '1')
)
const maxInterval = parseInt(prompt('Введіть кінець числового проміжку', '10'))

let startInterval = minInterval
let endInterval = maxInterval
let oddNumbersSum = 0

// Если границы интервала не должны учитываться, а только нечетные числа МЕЖДУ ними - расскомментировать else
if (minInterval % 2 === 0) startInterval = minInterval + 1
/* 
else {
	startInterval = minInterval + 2
	endInterval = maxInterval - 1
} 
*/

for (let oddNumber = startInterval; oddNumber <= endInterval; oddNumber += 2) {
	oddNumbersSum += oddNumber
}

//========================================================================================================================================================
/* 
for (let oddNumber = minInterval + (1 - (minInterval % 2)); oddNumber <= maxInterval; oddNumber += 2) {
	oddNumbersSum += oddNumber
} 
*/

alert(`Сума всіх непарних чисел в проміжку від ${minInterval} до ${maxInterval} (включно) дорівнює - ${oddNumbersSum}.`)
