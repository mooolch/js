const usersMoneyAmount = parseFloat(prompt('Скільки ви маєте грошей (грн.)?', '9'));
const productPrice = parseFloat(prompt('Введіть вартість товару, який ви хочете придбати (грн.):', '3'));

const LOTTERY_TICKET_PRICE = 4;

let el = document.querySelector('.task__body');
let enterLottery;

if (usersMoneyAmount >= productPrice) {
	// Перевіряємо, чи достатньо у користувача коштів для здійсненя покупки
    let usersMoneyReminder = usersMoneyAmount - productPrice;
    
	// Якщо так, вирахвоуємо залишок коштів
    alert('Оплата пройшла успішно.')
        ;
	if (usersMoneyReminder >= LOTTERY_TICKET_PRICE) {
		// Якщо залишка коштів вистачає на лотерею, пропонуємо зіграти
		enterLottery = confirm(`Бажаєте зіграти в безвиграшну лотерею за ${LOTTERY_TICKET_PRICE} грн.?)`);
		if (enterLottery === true) {
            // Якщо отримуємо згоду від користувача - граємо
			alert('Вам не пощастило (а ми ж попереджали про це))), приходьте ще!');
        } else {
			// Якщо користувач відмовляється від лотереї
			alert('Дякуємо за покупку! приходьте ще!');
		}
	} else {
		// Якщо покупка успішна, але коштів на лотерею не вистачає
		alert('Дякуємо за покупку! приходьте ще!');
	}
} else if (usersMoneyAmount >= LOTTERY_TICKET_PRICE) {
	// Якщо коштів на покупку немає, але вистачає на гру в лотерею
	enterLottery = confirm(
		`Вибачте, у вас недостатньо коштів, але ви можете зіграти в безвиграшну лотерею за ${LOTTERY_TICKET_PRICE} грн. Бажаєте зіграти?)`
	);
	if (enterLottery === true) {
		// Якщо отримуємо згоду від користувача - граємо
		alert('Вам не пощастило (а ми ж попереджали про це))), приходьте ще!');
	} else {
		alert('Допобачення! приходьте ще!');
	}
} else {
	// Якщо коштів не вистачає ні на торвар, ні на лотерею
	alert('Вибачте, у вас недостатньо коштів для здійснення покупки.');
}
