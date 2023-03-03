'use strict'

//========================================================================================================================================================
// Значения "по умолчанию" через || в промпте тут введены как "костыль" только для визуального оформления))
// Я знаю про значения по умолчанию для параметров ф-ции, просто они не работают при пустом промпте.
let t = 'Відпустка на Карибських о-вах.'
let i = 'https://images.lucentcms.com/iyc_website/2020/12/5fea07e8729e2-caribbean-luxury-yacht-charter-min.jpg'
let l =
	'https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%9A%D0%B0%D1%80%D0%B8%D0%B1%D1%81%D0%BA%D0%B8%D1%85_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%B2_%D0%BF%D0%BE_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8'

// 
const bannerTitle = prompt('Введіть назву для рекламного банеру') || t
const bannerImage = prompt('Додайте посилання на фонове зображення (у форматі https://image.jpg)') || i
const bannerLink = prompt('Додайте адресу посилання вашого банеру (у форматі https://link.com)') || l
//========================================================================================================================================================

function createBanner(title, bckgImage, link) {
	document.write(`<a class="banner" target="_blank" href="${link}">`)
	document.write(`<h1>${title}</h1>`)
	document.write(`<img src="${bckgImage}" alt="Image">`)
	document.write(`</a>`)
}

createBanner(bannerTitle, bannerImage, bannerLink)
