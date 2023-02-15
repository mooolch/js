const sallary = parseFloat(prompt('Введіть заробітну плату робітника (грн.)', '0'));

// Фіксована комісія фірми
const FIRM_TAX = 0.2;

// Розрахунок
const totalWorkerSallary = (sallary - sallary * FIRM_TAX).toFixed(2);

let el = document.querySelector('.task__body');
el.innerHTML = `
<p>Загальна сума заробітної плати  ${sallary} грн.</p>
<p>З урахуванням комісії фірми (20%), сума до отримання складає - ${totalWorkerSallary} грн.</p>
`;