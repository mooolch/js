'use strict'

class CompetitionManager {
	constructor(playersList, grenArrowSrc, redArrowSrc) {
		this.playersList = playersList
		this.grenArrowSrc = grenArrowSrc
		this.redArrowSrc = redArrowSrc
	}

	createPlayerItem(name) {
		const playerCard = document.createElement('div')
		playerCard.classList.add('player')
		playerCard.setAttribute('ingame', 'no')

		const span = document.createElement('span')
		span.innerText = name

		const img = document.createElement('img')
		img.src = this.grenArrowSrc

		img.onclick = function () {
			if (playerCard.getAttribute('ingame') === 'no') {
				img.src = this.redArrowSrc
				playerCard.setAttribute('ingame', 'yes')
				playerCard.remove()
				document.querySelector('.ingame').append(playerCard)
			} else if (playerCard.getAttribute('ingame') === 'yes') {
				img.src = this.grenArrowSrc
				playerCard.setAttribute('ingame', 'no')
				playerCard.remove()
				document.querySelector('.all').append(playerCard)
			}
		}.bind(this, playerCard)

		// способ №2 c отдельным методом, но там проблемы с заменой картинки(
		// img.onclick = this.spawPlayer.bind(playerCard)

		playerCard.append(span)
		playerCard.append(img)
		return playerCard
	}

	//========================================================================================================================================================
	// spawPlayer() {
	// 	if (this.getAttribute('ingame') === 'no') {
	// 		this.setAttribute('ingame', 'yes')
	// 		this.remove()
	// 		this.querySelector('img').src = '../img/arrow_red.png'
	// 		// приходится передавать вручную, потому что this тут это сама карточка игрока
	// 		document.querySelector('.ingame').append(this)
	// 	} else if (this.getAttribute('ingame') === 'yes') {
	// 		this.querySelector('img').src = '../img/arrow_green.png'
	// 		this.setAttribute('ingame', 'no')
	// 		this.remove()
	// 		document.querySelector('.all').append(this)
	// 	}
	// }
	//========================================================================================================================================================

	render(parentSelector) {
		const div_all = document.createElement('div')
		const h_all = (document.createElement('h2').innerText = 'Загальний список')
		div_all.append(h_all)
		div_all.className = 'palyers-list all'

		const div_ingame = document.createElement('div')
		const h_ingame = (document.createElement('h2').innerText = 'Обрані до змагання')
		div_ingame.append(h_ingame)
		div_ingame.className = 'palyers-list ingame'

		for (const player of this.playersList) {
			const plr = this.createPlayerItem(player)
			div_all.append(plr)
		}

		document.querySelector(parentSelector).append(div_all)
		document.querySelector(parentSelector).append(div_ingame)
	}
}

const tt = new CompetitionManager(
	['Player_1', 'Player_2', 'Player_3', 'Player_4', 'Player_5', 'Player_6'],
	'../img/arrow_green.png',
	'../img/arrow_red.png'
)

tt.render('.task__body')
