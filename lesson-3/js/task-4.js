const userAge = parseInt(prompt('Введіть вік Миколи', '13'));

const MAX_PRESCHOOL_AGE = 3;
const MAX_SCHOOLKID_AGE = 16;
const MAX_STUDENT_AGE = 22;
const MAX_EMPLOYEE_AGE = 62;

if (userAge <= 0 || userAge > 100) {
	alert(`Помилка при вводі віку, оновіть сторінку та спробуйте ще раз.`);
} else if (userAge <= MAX_PRESCHOOL_AGE) {
	alert(`Миколі ${userAge}р. і він ще відвідує дитсадок.`);
} else if (userAge <= MAX_SCHOOLKID_AGE) {
	alert(`Миколі ${userAge}р. і він ще школяр.`);
} else if (userAge <= MAX_STUDENT_AGE) {
	alert(`Миколі ${userAge}р. і він студент.`);
} else if (userAge <= MAX_EMPLOYEE_AGE) {
	alert(`Миколі ${userAge}р. і він вже працює.`);
} else {
	alert(`Миколі ${userAge}р. і він вже вийшов на пенсію.`);
}
