let avgTemp = 0,
	monthNumber = 1,
	monthlyTemp = 0,
	calculatedMonths = 0

for (let tempSum = 0; monthNumber <= 12; monthNumber++, calculatedMonths++) {
	monthlyTemp = parseFloat(
		prompt(
			`Введіть температуру ${monthNumber}-го місяця.\nПоточна середня темперетура за ${calculatedMonths} міс. дорівнює ${avgTemp.toFixed(
				1
			)}℃.`
		)
	)
	if (isNaN(monthlyTemp)) break
	tempSum += monthlyTemp
	avgTemp = tempSum / monthNumber
}
alert(`Cередня темперетура за ${calculatedMonths} міс. дорівнює ${avgTemp.toFixed(1)}℃.`)
