//Отримуємо значення чисел
let productPrice = parseFloat(prompt('Введiть вартiсть товару (грн)', '0'));
let productQuantity = parseFloat(prompt('Введiть к-сть', '0'));

//Робимо підрахунки
const tax = 0.05;
let productsTotatSum = productQuantity * productPrice;
let productsComissionSum = productsTotatSum * tax;

//Виводимо результат
let el = document.querySelector('.task__body');
el.innerHTML = `
<p>
    Загальна вартість товару = ${productsTotatSum.toFixed(2)}грн
</p>
<p>
    Комісія = ${productsComissionSum.toFixed(2)}грн
</p>
`;
