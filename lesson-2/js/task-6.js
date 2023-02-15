// Отримуємо вартість та к-сть товарів
let firstProductPrice = parseFloat(prompt('Введiть вартiсть Яблук (грн)', '0'));
let firstProductQuantity = parseFloat(prompt('Введiть кількість (шт. кг)', '0'));
let secondProductPrice = parseFloat(prompt('Введiть вартiсть Молока (грн)', '0'));
let secondProductQuantity = parseFloat(prompt('Введiть кількість (шт. кг)', '0'));
let thirdProductPrice = parseFloat(prompt('Введiть вартiсть Морозива (грн)', '0'));
let thirddProductQuantity = parseFloat(prompt('Введiть кількість (шт. кг)', '0'));

// Визначаємо суму по кожному з товарів
let firstProductSum = firstProductPrice * firstProductQuantity;
let secondProducSum = secondProductPrice * secondProductQuantity;
let thirdProductSum = thirdProductPrice * thirddProductQuantity;

// Визначаємо загальну вартість покупок
let totalSum = firstProductSum + secondProducSum + thirdProductSum;

// Вививодимо результат у "чек"
let el = document.querySelector('.task__body');
el.innerHTML = `
        <table>
            <tr>
                <th>Найменування товарів</th>
                <th>Вартість</th>
                <th>К-сть кг, шт.</th>
                <th>Сума, грн.</th>
            </tr>
            <tr>
                <td>Ябулка</td>
                <td>${firstProductPrice}</td>
                <td>${firstProductQuantity}</td>
                <td>${firstProductSum}</td>
            </tr>
            <tr>
                <td>Молоко</td>
                <td>${secondProductPrice}</td>
                <td>${secondProductQuantity}</td>
                <td>${secondProducSum}</td>
            </tr>
            <tr>
                <td>Морозиво</td>
                <td>${thirdProductPrice}</td>
                <td>${thirddProductQuantity}</td>
                <td>${thirdProductSum}</td>
            </tr>
            <tr>
                <th colspan="3">Загалом:</th>
                <td>${totalSum}грн</td>
            </tr>
        </table>
`;
