'use strict'

const randomNum = (minNum, maxNum) => minNum + Math.floor(Math.random() * (maxNum - minNum + 1))

function additionTrainer(minNum, maxNum) {
	setTimeout(() => {
		const randomNum_1 = randomNum(minNum, maxNum)
		const randomNum_2 = randomNum(minNum, maxNum)
		const randomNumsSum = randomNum_1 + randomNum_2
		const userAnswer = parseInt(
			prompt(`Введіть результат додавання цих двох чисел.\n${randomNum_1} + ${randomNum_2} = ?`)
		)
		if (userAnswer === randomNumsSum) alert('Правильна відповідь!')
		else alert(`Ви помилилися. Результатом складання ${randomNum_1} та ${randomNum_2} буде число ${randomNumsSum}`)
		additionTrainer(minNum, maxNum)
	}, 5000)
}

additionTrainer(1, 10)
