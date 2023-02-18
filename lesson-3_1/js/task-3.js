alert(
    "Гра вгадай число (у проміжку 1-10 включно).\n2 користувача дають варіанти відповіді. Той чиє число ближче до загаданого комп'ютером - переміг"
)
const MIN_INTERVAL = 1
const MAX_INTERVAL = 10
const randomNumber = MIN_INTERVAL + Math.floor(Math.random() * (MAX_INTERVAL - MIN_INTERVAL + 1))

const firstUserNumber = parseInt(prompt('Гравець №1\nВведіть ваше число', '3'))
const secondUserNumber = parseInt(prompt('Гравець №2\nВведіть ваше число', '5'))
// Проверяем на корректность числа игроков
if ((firstUserNumber, secondUserNumber >= MIN_INTERVAL && firstUserNumber, secondUserNumber <= MAX_INTERVAL)) {
    // Проверяем чтобы числа игроков отличались друг от друга
    if (secondUserNumber !== firstUserNumber) {
        if (firstUserNumber === randomNumber) alert(`Гравець №1 переміг!\nВипадкове число було ${randomNumber}`)
        else if (secondUserNumber === randomNumber) alert(`Гравець №2 переміг!\nВипадкове число було ${randomNumber}`)
        else {
            const firstUserDistanceToRandomNum = Math.abs(randomNumber - firstUserNumber)
            const secondtUserDistanceToRandomNum = Math.abs(randomNumber - secondUserNumber)
            if (firstUserDistanceToRandomNum < secondtUserDistanceToRandomNum)
                alert(`Гравець №1 переміг!\nВипадкове число було ${randomNumber}`)
            else if (firstUserDistanceToRandomNum > secondtUserDistanceToRandomNum)
                alert(`Гравець №2 переміг!\nВипадкове число було ${randomNumber}`)
            else {
                alert(
                    `Йой, числа обох гравців рівновіддалені від випадкового.\nВипадкове число було ${randomNumber}\nОновіть сторінку щоб почати другий раунд та визначити переможця.`
                )
            }
        }
    } else alert('Помилка. Гравці мають вказати різні варіанти чисел. Оновіть сторунку щоб розпочати нову гру.')
} else
    alert('Помилка. Гравці мають вказати значення чисел в межах від 1 до 10. Оновіть сторунку щоб розпочати нову гру.')
