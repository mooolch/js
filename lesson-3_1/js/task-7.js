alert(
    'Гра в кості.Правила гри:\n1. Ви кидаєте кості (не більше двох разів) та вирішуете сами робити другий кидок чи ні.\n2. якщо випадає парне число, то кількість балів збільшується на це число;\n3. якщо випадає непарне число, то кількість балів зменшується на це число;\n4. виграє той, у кого кількість балів більша.'
)
const DICE_MIN = 1
const DICE_MAX = 6

let firstPlayerDice_1
let firstPlayerDice_2
let firstPlayerTotal

let secondPlayerDice_1
let secondPlayerDice_2
let secondPlayerTotal

alert('Гравець 1. Кидайте кості.')
firstPlayerDice_1 = DICE_MIN + Math.floor(Math.random() * DICE_MAX - DICE_MIN + 1)

let playAgain = confirm(`Гравець 1.\nВипало ${firstPlayerDice_1}.\nКинути кості ще раз?`)
if (playAgain === true) {
    firstPlayerDice_2 = DICE_MIN + Math.floor(Math.random() * DICE_MAX - DICE_MIN + 1)
    if (firstPlayerDice_2 % 2 === 0) {
        firstPlayerTotal = firstPlayerDice_1 + firstPlayerDice_2
        alert(
            `Випало ${firstPlayerDice_2} - це парное число, ваш результат збільшено на ${firstPlayerDice_2}.\nГравець 1 - ваш загальний результат = ${firstPlayerTotal}.`
        )
    } else {
        firstPlayerTotal = firstPlayerDice_1 - firstPlayerDice_2
        if (firstPlayerTotal > 0) {
            alert(
                `Випало ${firstPlayerDice_2} - це непарне число, ваш результат зменшено на ${firstPlayerDice_2}.\nГравець 1 - ваш загальний результат = ${firstPlayerTotal}.`
            )
        } else {
            firstPlayerTotal = 0
            alert(
                `Випало ${firstPlayerDice_2} - це непарне число, ваш результат зменшено на ${firstPlayerDice_2}.\nГравець 1 - ваш загальний результат довелось округлити до ${firstPlayerTotal}.`
            )
        }
    }
} else {
    firstPlayerTotal = firstPlayerDice_1
    alert(`Гравець 1 - ваш загальний результат = ${firstPlayerTotal}.`)
}

alert('Гравець 2. Кидайте кості.')
secondPlayerDice_1 = DICE_MIN + Math.floor(Math.random() * DICE_MAX - DICE_MIN + 1)
playAgain = confirm(`Гравець 2.\nВипало ${secondPlayerDice_1}.\nКинути кості ще раз?`)

if (playAgain === true) {
    secondPlayerDice_2 = DICE_MIN + Math.floor(Math.random() * DICE_MAX - DICE_MIN + 1)
    if (secondPlayerDice_2 % 2 === 0) {
        secondPlayerTotal = secondPlayerDice_1 + secondPlayerDice_2
        alert(
            `Випало ${secondPlayerDice_2} - це парное число, ваш результат збільшено на ${secondPlayerDice_2}.\nГравець 2 - ваш загальний результат = ${secondPlayerTotal}.`
        )
    } else {
        secondPlayerTotal = secondPlayerDice_1 - secondPlayerDice_2
        if (secondPlayerTotal > 0) {
            alert(
                `Випало ${secondPlayerDice_2} - це непарне число, ваш результат зменшено на ${secondPlayerDice_2}.\nГравець 2 - ваш загальний результат = ${secondPlayerTotal}.`
            )
        } else {
            secondPlayerTotal = 0
            alert(
                `Випало ${secondPlayerDice_2} - це непарне число, ваш результат зменшено на ${secondPlayerDice_2}.\nГравець 2 - ваш загальний результат довелось округлити до ${secondPlayerTotal}.`
            )
        }
    }
} else {
    secondPlayerTotal = secondPlayerDice_1
    alert(`Гравець 2 - ваш загальний результат = ${secondPlayerTotal}.`)
}

if (firstPlayerTotal > secondPlayerTotal) alert(`Гравець 1 переміг із результатом - ${firstPlayerTotal}.`)
else if (firstPlayerTotal < secondPlayerTotal) alert(`Гравець 2 переміг із результатом -  ${secondPlayerTotal}.`)
else alert('Нічия!\nОновіть сторінку щоб розпочати другий раунд гри, та визначити переможця.')
