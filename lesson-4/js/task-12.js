let pear = 0,
	peach = 0,
	apple = 0,
	pinaple = 0,
	prize,
	fruit

for (let i = 0; i < 3; i++) {
	let randomNum = 1 + Math.floor(Math.random() * 4 - 1 + 1)
	switch (randomNum) {
		case 1:
			fruit = 1
			pear++
			break
		case 2:
			fruit = 2
			peach++
			break
		case 3:
			fruit = 3
			apple++
			break
		case 4:
			fruit = 4
			pinaple++
			break
	}
	document.write(`<div class="img"><img src="../img/${fruit}.png" alt="Fruit"></div>`)
}

if (peach === 3) prize = '100грн !!!'
else if (pear === 3) prize = '200грн !!!'
else if (apple === 3) prize = '500грн !!!'
else if (pinaple === 3) prize = '1000грн !!!'
else prize = 'дешеву цукерку на паличці.'

let message = `Ви виграли - ${prize}`
let el = (document.querySelector('.task__body').innerHTML = `<p>${message}</p>`)
