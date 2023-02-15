const dayNumber = parseInt(prompt('Введіть номер дня тижня (від 1 до 7)', '3'));

const MON_SEQUENCE_NUM = 1;
const TUE_SEQUENCE_NUM = 2;
const WED_SEQUENCE_NUM = 3;
const THU_SEQUENCE_NUM = 4;
const FRI_SEQUENCE_NUM = 5;
const SAT_SEQUENCE_NUM = 6;
const SUN_SEQUENCE_NUM = 7;

if (dayNumber == MON_SEQUENCE_NUM) {
	alert(`${dayNumber}й день тижня це - Понеділок.`);
} else if (dayNumber === TUE_SEQUENCE_NUM) {
	alert(`${dayNumber}й день тижня це - Вівторок.`);
} else if (dayNumber === WED_SEQUENCE_NUM) {
	alert(`${dayNumber}й день тижня це - Середа.`);
} else if (dayNumber === THU_SEQUENCE_NUM) {
	alert(`${dayNumber}й день тижня це - Четвер.`);
} else if (dayNumber === FRI_SEQUENCE_NUM) {
	alert(`${dayNumber}й день тижня це - П'ятниця.`);
} else if (dayNumber === SAT_SEQUENCE_NUM) {
	alert(`${dayNumber}й день тижня це - Субота.`);
} else if (dayNumber === SUN_SEQUENCE_NUM) {
	alert(`${dayNumber}й день тижня це - Неділя.`);
} else {
	alert('Помилка, у одному тижні тільки 7 днів.');
}

// Коротка форма
/* const dayName =
	dayNumber == MON_SEQUENCE_NUM
		? 'Понеділок'
		: false || dayNumber === TUE_SEQUENCE_NUM
		? 'Вівторок'
		: false || dayNumber === WED_SEQUENCE_NUM
		? 'Середа'
		: false || dayNumber === THU_SEQUENCE_NUM
		? 'Четвер'
		: false || dayNumber === FRI_SEQUENCE_NUM
		? "П'ятниця"
		: false || dayNumber === SAT_SEQUENCE_NUM
		? 'Субота'
		: false || dayNumber === SUN_SEQUENCE_NUM
		? 'Неділя'
		: false;
alert(`${dayNumber}й день тижня це - ${dayName}.`);
 */
