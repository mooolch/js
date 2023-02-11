//Отримуємо значення чисел
let a = parseFloat(prompt('Введіть число "a"', '0'));
let b = parseFloat(prompt('Введіть число "b"', '0'));

//Робимо підрахунки
let resultPlus = a + b;
let resultMultiply = a * b;
let resultDivide = a / b;

//Виводимо результат у вигляді таблиці
let el = document.querySelector('.task__body');
el.innerHTML = `
    <table>
        <tr>
            <td>Сума</td>
            <td>${parseFloat(resultPlus.toFixed(3))}</td>
        </tr>
        <tr>
            <td>Добуток</td>
            <td>${parseFloat(resultMultiply.toFixed(3))}</td>
        </tr>
        <tr>
            <td>Ділення</td>
            <td>${parseFloat(resultDivide.toFixed(3))}</td>
        </tr>
    </table>
    `;
