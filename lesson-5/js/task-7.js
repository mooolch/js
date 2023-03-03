'use strict'
/* 
// Генерируем рандоную сылку на картинку
function getRandomImgLink() {
	let randomImgNum = Math.floor(Math.random() * 4)
	let randomImgLink
	switch (randomImgNum) {
		case 0:
			randomImgLink = '../img/angry.png'
			break
		case 1:
			randomImgLink = '../img/happy.png'
			break
		case 2:
			randomImgLink = '../img/error.png'
			break
		case 3:
			randomImgLink = '../img/sad.png'
			break
	}
	return randomImgLink
}
// Сохраняем сылку на картинку в переменную
let imgLink = getRandomImgLink()

// Передаем ссылку на рандоную картинку в ф-цию вывода на экран
function showRandomImg(imgLink) {
	document.write(`<div class="picture"><img src="${imgLink}" alt="Image"></div>`)
}

showRandomImg(imgLink)
 */
//========================================================================================================================================================

//Варинат 2. Где ф-ция выбирает и выводит из готового перечня картинок

function showRandomPic(imgSource1, imgSource2, imgSource3, imgSource4) {
	let randomPicNum = Math.floor(Math.random() * 4)
	let randomPicLink
	switch (randomPicNum) {
		case 0:
			randomPicLink = imgSource1
			break
		case 1:
			randomPicLink = imgSource2
			break
		case 2:
			randomPicLink = imgSource3
			break
		case 3:
			randomPicLink = imgSource4
			break
	}
	document.write(`<div class="picture"><img src="${randomPicLink}" alt="Image"></div>`)
}

showRandomPic(
	'https://i.pinimg.com/originals/d8/55/9f/d8559f57d2cfcc8db35f032b424f1fe8.gif',
	'https://thumbs.gfycat.com/PalatableForkedAfricanwilddog-max-1mb.gif',
	'../img/error.png',
	'https://thumbs.gfycat.com/MeanSmallHamadryas-max-1mb.gif'
)
