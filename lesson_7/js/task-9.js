'use strict'

const names = [
	'Alice',
	'Bob',
	'Charlie',
	'David',
	'Emily',
	'Frank',
	'Grace',
	'Henry',
	'Isabella',
	'Jack',
	'Kate',
	'Liam',
	'Mia',
	'Nathan',
	'Olivia',
	'Peter',
	'Quinn',
	'Rose',
	'Sophia',
	'Thomas',
]

const firstLetters = names.map((el) => el[0])

// const firstLetters = names.map((el) => el.slice(0, 1))

/* 
const newArr = []
for (const el of names) firstLetters.push(el[0])
*/

/* 
const newArr = []
names.forEach((el) => firstLetters.push(el[0])) 
*/

console.log(firstLetters)
