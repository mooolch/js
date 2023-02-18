const MIN_NUM_INTERVAL = 1
const MAX_NUM_INTERVAL = 100
const randomNumber = MIN_NUM_INTERVAL + Math.floor(Math.random() * (MAX_NUM_INTERVAL - MIN_NUM_INTERVAL + 1))

// Определяем случайный промежуток чисел
const num1 = MIN_NUM_INTERVAL + Math.floor(Math.random() * (MAX_NUM_INTERVAL - MIN_NUM_INTERVAL + 1))
const num2 = MIN_NUM_INTERVAL + Math.floor(Math.random() * (MAX_NUM_INTERVAL - MIN_NUM_INTERVAL + 1))

let minInterval
let maxInterval

// Определяем переменные с началом и концом случайного промежутка чисел
if (num1 > num2) {
    maxInterval = num1
    minInterval = num2
} else {
    maxInterval = num2
    minInterval = num1
}

const userNumber = parseInt(prompt('Введіть ваше число', '3'))

if (userNumber >= minInterval - 10 && userNumber <= maxInterval + 10)
    alert(
        `Вітамємо ви вгадали! Ваше число було ${userNumber} а випадковий інтервал чисел від ${minInterval} до ${maxInterval}.`
    )
else
    alert(
        `Ви не вгадали. Ваше число було ${userNumber} а випадковий інтервал чисел від ${minInterval} до ${maxInterval}.`
    )
