let a = parseFloat(prompt('Введіть числове значення змінної а', '0'));
let b = parseFloat(prompt('Введіть числове значення змінної b', '0'));
let c = parseFloat(prompt('Введіть числове значення змінної c', '0'));

// Тимчасова змінна
let temporaryVarValue = a;

// Виводимо результат до зміни
let el = document.querySelector('.task__body--before-mix');
el.innerHTML = `
<p>Значення змінної <b>a</b> до перемішування = ${a};</p>
<p>Значення змінної <b>b</b> до перемішування = ${b};</p>
<p>Значення змінної <b>c</b> до перемішування = ${c};</p>
`;

alert('Зачекайте, відбувається магія');

// Обмінуюємо значення змінниї
a = b;
b = c;
c = temporaryVarValue;

let el2 = document.querySelector('.task__body--after-mix');
el2.innerHTML = `
<p>Значення змінної <b>a</b> після перемішування = ${a};</p>
<p>Значення змінної <b>b</b> після перемішування = ${b};</p>
<p>Значення змінної <b>c</b> після перемішування = ${c};</p>
`;


