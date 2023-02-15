const userSallary = parseFloat(prompt('Введіть розмір вашої заробітної плати (у грн.)', '0'));
const livingWage = parseFloat(prompt('Введіть розмір прожиткового мінімуму (у грн.)', '0'));

// Вираховуємо різницю зарплати і прожиткового мінімуму
const suggestedFinancicalAid = userSallary - livingWage;

// Вираховуемо можливу фін допомогу
const financicalAid =
	suggestedFinancicalAid < 0 ? Math.abs(suggestedFinancicalAid) + ' грн' : 'Соц. виплата вам не потрібна';

let el = document.querySelector('.task__body');
el.innerHTML = `
<p>Ваша зарплата: ${userSallary} грн</p>
<p>Прожитковий мінумум ${livingWage} грн.</p>
<p>Розмір соц. виплати = ${financicalAid}</p>
`;
