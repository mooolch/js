const elementQuantity = parseInt(
	prompt('Введіть кількість елементів, які ви хочете розмістити на екрані (у шт.)', '0')
);

//Отримуємо інформацію про корисну ширину дісплея користувача 
const screenWidth = document.documentElement.clientWidth;

// Вираховуємо к-сть елементів
const maxWholeElementsCount = screenWidth / elementQuantity;

let el = document.querySelector('.task__body');
el.innerHTML = `
<p>Ширина екрану вашого пристрою ${screenWidth} рх</p>
<p>Кількість елементів які потрібно розмістити на екрані ${elementQuantity} шт.</p>
<p>При такій кількості, максимально можлива ширина елемену складає = ${maxWholeElementsCount.toFixed(3)} px </p>
`;
