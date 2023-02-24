const minInterval = parseInt(
	prompt('Задайте інтервал у якому потрібно порахувати суму 5 непарних чисел.\nВведіть початок проміжку', '1')
)
const maxInterval = parseInt(prompt('Введіть кінець числового проміжку', '15'))

let startInterval = minInterval
let endInterval = maxInterval
let oddNumbersSum = 0
let oddNumbersCounter = 0

// Если границы интервала не должны учитываться, а только нечетные числа МЕЖДУ ними - расскомментировать else
if (minInterval % 2 === 0) startInterval = minInterval + 1

// else {
// 	startInterval = minInterval + 2
// 	endInterval = maxInterval - 1
// }

for (let oddNumber = startInterval; oddNumber <= endInterval; oddNumber += 2) {
	if (startInterval % 2 !== 0 && oddNumbersCounter < 5) {
		oddNumbersCounter++
		oddNumbersSum += oddNumber
	}
}

//========================================================================================================================================================
/* 
for (
	let oddNumber = minInterval + (1 - (minInterval % 2));
	oddNumber <= maxInterval && oddNumbersCounter < 5;
	oddNumber += 2, oddNumbersCounter++
) {
	oddNumbersSum += oddNumber
}
*/

alert(`Сума 5 непарних чисел в проміжку від ${minInterval} до ${maxInterval} (включно) дорівнює - ${oddNumbersSum}.`)
