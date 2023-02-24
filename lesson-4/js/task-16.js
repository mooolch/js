const numberOfWeeks = parseInt(prompt('Введіть к-сть тижнів за які потрібно порахувати прибуток', '3'))

let totalProfit = 0
let i = 1

for (; i <= numberOfWeeks; i++) {
	let totalWeekSum = 0
	for (let j = 1; j <= 7; j++) {
		const dayProfit = parseFloat(prompt(`Внесіть суму прибутку за ${j} день ${i}-го тижня`, '33'))
		totalWeekSum += dayProfit
	}
	document.write(`<p>Прибуток за ${i}-й тиждень = ${totalWeekSum.toFixed(2)} грн.</p>`)
	totalProfit += totalWeekSum
}
document.write(`<p>Загальна сума прибутку за ${numberOfWeeks} тижнів = ${totalProfit.toFixed(2)} грн.</p>`)
