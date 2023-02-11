//Отримуємо значення чисел
let a = parseFloat(prompt('Введіть число "a"', '0'));
let b = parseFloat(prompt('Введіть число "b"', '0'));
let c = parseFloat(prompt('Введіть число "c"', '0'));

//Декларуємо завчасно відому константу
const CONST_NUMBER = 12;

//Робимо підрахунки

// 1
let resultPlus = a + CONST_NUMBER + b;

// 2
let resultSqrt = Math.sqrt((a + b) / (a * 2));

// 3
let resultCbrt = Math.cbrt((a + b) * c);

// 4
let resultSin = Math.sin(a / -b);

// Виводимо результат
let el = document.querySelector('.task__body');
el.innerHTML = `
<p>
Результат:
</p>
<p> 
S<sub>1</sub> = ${resultPlus}
</p>
<p> 
S<sub>2</sub> = ${resultSqrt}
</p>
<p> 
S<sub>3</sub> = ${resultCbrt}
</p>
<p> 
S<sub>4</sub> = ${resultSin}
</p>
`;
