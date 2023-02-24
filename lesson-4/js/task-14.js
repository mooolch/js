const productPrice = 25000 + Math.floor(Math.random() * (35000 - 25000 + 1))
alert(
	`Дякую за оформлення замовлення на Ігровий комп'ютер ARTLINE Gaming X39.\nВартість покупки - ${productPrice} грн.\nПройдіть на касу для оплати.`
)
let userPayment = parseFloat(
	prompt(
		'Внесіть суму оплати для першої транзакції.\n(вводьте суму форматі з крапкою, без грн. та пробілів, наприклад - 15321.15)',
		'10999'
	)
)
let totalUserPayment = userPayment
//========================================================================================================================================================

while (totalUserPayment < productPrice) {
	let productPriceReminder = productPrice - totalUserPayment
	alert(`Оптата здійснана успішно. Залишок суми до оплати = ${productPriceReminder.toFixed(2)} грн.`)
	userPayment = parseFloat(prompt('Внесіть суму доплати', '3333'))
	totalUserPayment += userPayment
}

//========================================================================================================================================================

/* 
for (; totalUserPayment < productPrice; totalUserPayment += userPayment) {
	let productPriceReminder = productPrice - totalUserPayment
	alert(`Оптата здійснана успішно. Залишок суми до оплати = ${productPriceReminder.toFixed(2)} грн.`)
	userPayment = parseFloat(prompt('Внесіть суму доплати', '3333'))
}
*/

//========================================================================================================================================================
if (totalUserPayment > productPrice) {
	let userReminder = totalUserPayment - productPrice
	alert(`Покупка повністю cплачена. Візьміть вашу решту - ${userReminder.toFixed(2)} грн.`)
} else alert('Покупка повністю cплачена. Приходьте ще.')



