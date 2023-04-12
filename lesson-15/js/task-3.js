'use strict'

const result = document.querySelector('.task__body')

class Reminder {
	static reminder
	#remindersDone = 0
	constructor(reminderText, delay) {
		if (Reminder.reminder) return Reminder.reminder
		this.text = reminderText
		this.delay = delay
		this.run
		Reminder.reminder = this
	}
	get RemindersDone() {
		return this.#remindersDone
	}
	set RemindersDone(value) {
		if (value < 0) throw new Error('Incorrect value')
		this.#remindersDone = value
	}
	changeMessage(newMessage) {
		this.text = newMessage
	}
	start() {
		this.run = setInterval(() => {
			this.RemindersDone++
			const newLine = document.createElement('div')
			newLine.textContent = `Нагадування №${this.RemindersDone}\n${this.text}`
			result.appendChild(newLine)
		}, this.delay * 1000)
	}
	stop() {
		clearInterval(this.run)
	}
}

const r1 = new Reminder('Текст нагадування', 1)

r1.start()

setTimeout(() => {
	r1.changeMessage('Текст було змінено')
}, 3000)

setTimeout(() => {
	r1.stop()
	alert('Нагадувач було зупинено')
}, 8000)
