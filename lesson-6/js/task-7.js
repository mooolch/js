'use strict'

//Находит сумму за указанный период, можно просто выставляя период и шаг подсчета найти все 7 пунктов в задаче
function getPaymentsSumForPeriod(startPeriod, endPeriod, step, ...payments) {
	startPeriod--
	let paymentsSum = 0
	for (; startPeriod < endPeriod; startPeriod += step) {
		paymentsSum += payments[startPeriod]
	}
	return paymentsSum
}

console.log(135, 247, 368, 422, 167, 486, 271, 425, 179, 399, 414, 344) //Платежки за год
//За весь год
console.log(getPaymentsSumForPeriod(1, 12, 1, 135, 247, 368, 422, 167, 486, 271, 425, 179, 399, 414, 344))
//За первую половину
console.log(getPaymentsSumForPeriod(1, 6, 1, 135, 247, 368, 422, 167, 486, 271, 425, 179, 399, 414, 344))
//За вторую половину
console.log(getPaymentsSumForPeriod(6, 12, 1, 135, 247, 368, 422, 167, 486, 271, 425, 179, 399, 414, 344))
//За лето
console.log(getPaymentsSumForPeriod(6, 8, 1, 135, 247, 368, 422, 167, 486, 271, 425, 179, 399, 414, 344))
//За 2 квартал
console.log(getPaymentsSumForPeriod(4, 6, 1, 135, 247, 368, 422, 167, 486, 271, 425, 179, 399, 414, 344))
//За парные месяца (каждый второй)
console.log(getPaymentsSumForPeriod(2, 12, 2, 135, 247, 368, 422, 167, 486, 271, 425, 179, 399, 414, 344))
//За начальные месяца сезонов (каждый третий)
console.log(getPaymentsSumForPeriod(1, 12, 3, 135, 247, 368, 422, 167, 486, 271, 425, 179, 399, 414, 344))