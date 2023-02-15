const monthSequenceNumber = parseInt(prompt('Введіть номер місяця (від 1 до 12)', '4'));

if (monthSequenceNumber <= 0 || monthSequenceNumber > 12) {
	alert('Помилка, у одному році тільки 12 місяців.');
} else if (monthSequenceNumber <= 2 || monthSequenceNumber === 12) {
	alert(`${monthSequenceNumber}й - це зимовий місяць `);
} else if (monthSequenceNumber <= 5) {
	alert(`${monthSequenceNumber}й - це весняний місяць `);
} else if (monthSequenceNumber <= 8) {
	alert(`${monthSequenceNumber}й - це літній місяць `);
} else {
	alert(`${monthSequenceNumber}й - це осінній місяць `);
}
