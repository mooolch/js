'use strict'

function guessWord(word, wordDesk) {
	let guessedLetters = 0
	return function guessed() {
		for (let i = 1; i <= word.length; i++) {
			const letter = word[i - 1]
			const userLetter = prompt(
				`Введіть на англ. мові у нижньому регістрі ${i}-шу букву слова яке означає :\n${wordDesk}`
			)
			if (userLetter === letter) {
				guessedLetters++
			}
		}
		return guessedLetters
	}
}

const word = 'water'
const wordDesk = 'Речовина з якої складається більше ніж 60% тіла людини'

const result = guessWord(word, wordDesk)

let el = (document.querySelector('.task__body').innerHTML = `
<p>Загадане слово було ${word}</p>
<p>Ви вгадали ${result()} букв з ${word.length}</p>
`)

// Либо я не так понял и выполнил задание, либо я не понял практический смысл от замыкания. Ведь мы получим тот же результат удалив функцию guessed из кода и просто ретурнув сам каунтер... так в чем тогда смысл лишней функции?