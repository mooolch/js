function Car(brand, gasTank, fuelLevel, seats, passengers) {
	this.brand = brand
	this.gasTank = gasTank
	this.fuelLevel = fuelLevel
	this.seats = seats
	this.passengers = passengers
}

// Заправка
Car.prototype.carRefueling = function (addFuel) {
	// Короткая запись. Если хотят заправить больше топлива, просто возвращаем старое значение, либо можем выдать ошибку
	return this.fuelLevel + addFuel > this.gasTank ? this.fuelLevel : (this.fuelLevel += addFuel)
}

// Посадка
Car.prototype.boarding = function (addPassengers) {
	return this.passengers + addPassengers > this.seats ? this.passengers : (this.passengers += addPassengers)
}

// Высадка
Car.prototype.unboarding = function (removePassengers) {
	return this.passengers < removePassengers ? this.passengers : (this.passengers -= removePassengers)
}

// Выводим число пассажиров в виде строки
Car.prototype.getPassengersNum = function () {
	return `У авто зараз ${this.passengers} пасажирiв.`
}

const car1 = new Car('zhiguli', 70, 20, 4, 2)
car1.carRefueling(49)
car1.unboarding(2)
car1.boarding(3)

console.log(car1)

const currentPassengersNum = car1.getPassengersNum()

const el = (document.querySelector('.task__body').innerHTML = currentPassengersNum)

//=========================================================================================
/* 
// Заправка
Car.prototype.carRefueling = function () {
	// для наглядности берем кол-то топлива через промпт, а не через параметры ф-ци
	let currentFuel = this.fuelLevel
	let fuelToFull = this.gasTank - currentFuel
	const addFuel = parseFloat(
		prompt(
			`В безнобацi зараз ${currentFuel} л. пального, до повного баку потрiбно ще ${fuelToFull}л.\nСкiльки бажаєте залити пального?`,
			'15'
		)
	)
	currentFuel += addFuel
	if (currentFuel > this.gasTank) {
		const fuelOverflow = currentFuel - this.gasTank
		this.fuelLevel = this.gasTank
		alert(`Авто заправлене до повногу баку, надлишок пального у ${fuelOverflow} л. можна забрати у канiстрах.`)
	} else {
		this.fuelLevel = currentFuel
		alert(`Авто заправлене, зараз у баку ${currentFuel} л. пального`)
	}
	return this.fuelLevel
}

// Высадка
Car.prototype.boarding = function () {
	// для наглядности берем кол-то топлива через промпт, а не через параметры ф-ци
	const freeSeats = this.seats - this.passengers
	if (freeSeats === 0) {
		alert('У авто нема вiльних мiсць.')
	} else {
		const addPassengers = parseInt(
			prompt(`У авто э ${freeSeats} мiсць, скiлькох пасажирiв потрiбно розсадити?`, '1')
		)
		if (addPassengers > freeSeats) {
			const addPassengers = confirm(
				`У авто нема стiльки вiльних мiсць. Бажаєте розсадити тiльки ${freeSeats}х пасажирiв?`
			)
			if (addPassengers === true) {
				this.passengers += freeSeats
				alert('Посадку виконано')
			} else alert('Посадку скасовано')
		} else {
			this.passengers += addPassengers
			alert('Посадку виконано')
		}
	}
	return this.passengers
}
*/
