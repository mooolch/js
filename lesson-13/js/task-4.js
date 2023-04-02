sites = [
	{
		url: 'https://commons.wikimedia.org/wiki/Commons:Quality_images',
		image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
	},
	{
		url: 'https://en.wikipedia.org/wiki/Squirrel',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGSRq0rHZeAd4qAuEr7gNWKUNhxYsBEmJyjOWC7HoghBkcTskV92Zm2ftpdj6pXcWScA&usqp=CAU',
	},
	{
		url: 'https://en.wikipedia.org/wiki/Pan_(genus)',
		image: 'https://images.pexels.com/photos/33787/chimpanzee-sitting-sad-mammal.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	},
	{
		url: 'https://www.akc.org/dog-breeds/french-bulldog/',
		image: 'https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	},
]

function Banner(sites) {
	this.sites = sites
}

// Получаем рандомный баннер
Banner.prototype.randomChoise = function () {
	const random = Math.floor(Math.random() * this.sites.length)
	return this.sites[random]
}

// Выводим баннер
Banner.prototype.print = function (banner) {
	const el = (document.querySelector('.task__body').innerHTML = `
	<a href="${banner.url}" target="_blank"><img src="${banner.image}" alt="Image"></a>`)
}

const test = new Banner(sites)
const banner = test.randomChoise()
test.print(banner)
