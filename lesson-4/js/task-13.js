const maxInterval = parseInt(prompt('Гра морський бій.\nЗадайте довжину ігрового поля', '10'))
const minInterval = 1
// Расчитываем количество снарядов в зависимости от длины поля, либо минимум 2 снаряда
// const ammo = Math.round(maxInterval / 2.5) < 2 ? 2 : Math.round(maxInterval / 2.5) - такой вариант хуже? дважды пересчитываю результат
let ammo = Math.round(maxInterval / 2.5)
ammo = ammo < 2 ? 2 : ammo

alert(`У вас ${ammo} снарядів, приготуйтесь до першого пострілу!`)
const shipPosition = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)

let shots = 1,
	messageMiss = 'Промазав. Приготуйся до наступного пострілу.',
	messageWin = 'Пряме влучання! Ти переміг.',
	messageloose = 'Снаряди скінчилися, а корабель так і не пошкоджено. Ти програв.',
	usersShot = parseInt(prompt(`Cпроба ${shots}. Введіть клітинку для пострілу`, '3'))

//========================================================================================================================================================
// Мне кажется это самый удобный вариант решения

// while (shots < ammo && usersShot !== shipPosition) {
// 	shots++
// 	alert(messageMiss)
// 	usersShot = parseInt(prompt(`Cпроба ${shots}. Введіть клітинку для пострілу`, '3'))
// }

//========================================================================================================================================================

/* 
do {
	// Закомментировать prompt в переменной usersShoot в начале страницы, для адекватной работы цикла, оставить только объявление
	usersShot = parseInt(prompt(`Cпроба ${shots}. Введіть клітинку для пострілу`, '3'))
	shots++
	if (usersShot !== shipPosition) alert(messageMiss) //Двойная проверка, иначе выводится сообщения о промахе, даже если попал
} while (shots <= ammo && usersShot !== shipPosition)
 */

//========================================================================================================================================================


shots++ //Без этого не могу понять как мне в alert отображать правильный номер попытки в начале цикла. Выводит дважды попытку №1
for (; shots <= ammo && usersShot !== shipPosition; shots++) {
	alert(messageMiss)
	usersShot = parseInt(prompt(`Cпроба ${shots}. Введіть клітинку для пострілу`, '3'))
}


if (usersShot === shipPosition) alert(messageWin)
else alert(messageloose)
