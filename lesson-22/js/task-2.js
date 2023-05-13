'use strict'

// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
const studentAges = [19, 21, 22, 20, 23, 19, 20, 18, 21, 22, 20, 19, 20, 21, 19, 18, 23, 22, 19, 20]

function countNumberOfUsersAgesAndFindMax(usersAgesArr) {
	const agesStats = new Map()
	let maxAge = 0
	for (const age of studentAges) {
		if (agesStats.has(age)) {
			agesStats.set(age, agesStats.get(age) + 1)
		} else {
			agesStats.set(age, 1)
			maxAge = age > maxAge ? age : maxAge
		}
	}
	return { agesStats, maxAge }
}

console.log(countNumberOfUsersAgesAndFindMax(studentAges))

// ну или можно посчитать макс возраст отдельнно

// function countNumberOfUsersAges(usersAgesArr) {
// 	const agesStats = new Map()
// 	for (const age of studentAges) {
// 		if (agesStats.has(age)) {
// 			agesStats.set(age, agesStats.get(age) + 1)
// 		} else agesStats.set(age, 1)
// 	}
// 	return agesStats
// }

// const result = countNumberOfUsersAges(studentAges)
// const maxAge = Math.max(...result.keys())

// console.log(result)
// console.log(maxAge)
//========================================================================================================================================================

// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
const books = [
	{
		name: 'name_1',
		publIshed: 2007,
		author: 'Author_1',
	},
	{
		name: 'name_2',
		publIshed: 2014,
		author: 'Author_2',
	},
	{
		name: 'name_3',
		publIshed: 2000,
		author: 'Author_3',
	},
	{
		name: 'name_4',
		publIshed: 200,
		author: 'Author_1',
	},
	{
		name: 'name_5',
		publIshed: 1997,
		author: 'Author_2',
	},
	{
		name: 'name_6',
		publIshed: 1777,
		author: 'Author_3',
	},
	{
		name: 'name_7',
		publIshed: 2001,
		author: 'Author_4',
	},
	{
		name: 'name_8',
		publIshed: 1987,
		author: 'Author_1',
	},
	{
		name: 'name_9',
		publIshed: 2007,
		author: 'Author_3',
	},
	{
		name: 'name_10',
		publIshed: 2007,
		author: 'Author_2',
	},
]

function calcBooksByAuthor(booksArr) {
	const booksByAuthor = new Map()
	booksArr.forEach(book => {
		if (booksByAuthor.has(book.author)) {
			const numberOfBooks = booksByAuthor.get(book.author)
			booksByAuthor.set(book.author, numberOfBooks + 1)
		} else {
			booksByAuthor.set(book.author, 1)
		}
	})
	return booksByAuthor
}

console.log(calcBooksByAuthor(books))
//========================================================================================================================================================
// Задача 7.
// Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

const siteVisitorsHistory = [
	{
		login: 'user_1',
	},
	{
		login: 'user_2',
	},
	{
		login: 'user_1',
	},
	{
		login: 'user_2',
	},
	{
		login: 'user_3',
	},
	{
		login: 'user_4',
	},
	{
		login: 'user_4',
	},
	{
		login: 'user_1',
	},
	{
		login: 'user_2',
	},
	{
		login: 'user_3',
	},
]

function calcVisitsPerUser(visitsHistory) {
	const visitors = new Map()

	for (const visitor of visitsHistory) {
		if (visitors.has(visitor.login)) {
			const visitsNumber = visitors.get(visitor.login)
			visitors.set(visitor.login, visitsNumber + 1)
		} else {
			visitors.set(visitor.login, 1)
		}
	}
	return visitors
}

console.log(calcVisitsPerUser(siteVisitorsHistory))
//========================================================================================================================================================

// Задача 8.
// Дано масив студентів(піб, курс, факультет).Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

const studentsInfo = [
	{
		name: 'Ivanov V. A.',
		course: 'Computer Science',
		faculty: 'Faculty of Mathematics',
	},
	{
		name: 'Petrov A. G.',
		course: 'Computer Science',
		faculty: 'Faculty of Mathematics',
	},
	{
		name: 'Sidorova E. M.',
		course: 'Applied Linguistics',
		faculty: 'Faculty of Philology',
	},
	{
		name: 'Smirnov S. V.',
		course: 'Journalism',
		faculty: 'Faculty of Communications',
	},
	{
		name: 'Kuznetsova N. D.',
		course: 'Computer Science',
		faculty: 'Faculty of Mathematics',
	},
	{
		name: 'Kozlov I. P.',
		course: 'Marketing',
		faculty: 'Faculty of Economics',
	},
	{
		name: 'Golubeva O. V.',
		course: 'Applied Linguistics',
		faculty: 'Faculty of Philology',
	},
	{
		name: 'Zaytseva L. A.',
		course: 'Computer Science',
		faculty: 'Faculty of Mathematics',
	},
	{
		name: 'Fedorov P. V.',
		course: 'Journalism',
		faculty: 'Faculty of Communications',
	},
	{
		name: 'Popova A. M.',
		course: 'Marketing',
		faculty: 'Faculty of Economics',
	},
]

const numberOfFaculties = new Set()
studentsInfo.forEach(student => {
	numberOfFaculties.add(student.faculty)
})

console.log(`К-сть різних факультетів - ${numberOfFaculties.size}`)
console.log(numberOfFaculties)

const courseInfo = new Map()
for (const student of studentsInfo) {
	if (courseInfo.has(student.course)) {
		const studentsOnCourse = courseInfo.get(student.course)
		courseInfo.set(student.course, studentsOnCourse + 1)
	} else {
		courseInfo.set(student.course, 1)
	}
}
console.log(courseInfo)
//========================================================================================================================================================

// Задача 9.
// Дано масив показів температур.Підрахувати кількість входжень кожного із показів
// Заокруглити вверх значення та підрахувати кількість різних показів.

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

const roundedTemps = temperatures.map(temp => Math.ceil(temp))
const unicTemps = new Set(roundedTemps)
console.log(`К-сть різних температур - ${unicTemps.size}`)
console.log(unicTemps)

const temperaturesCount = new Map()
temperatures.forEach(temp => {
	const tempVal = temperaturesCount.get(temp) || 0
	temperaturesCount.set(temp, tempVal + 1)
})

console.log(temperaturesCount)
//========================================================================================================================================================

// Задача 10.
// Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики.
// Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const history = ['John', 'Mary', 'David', 'Linda', 'William', 'Emma', 'Thomas', 'Sophia', 'Charles', 'Jacob']
const mathematics = ['Olivia', 'Jack', 'Mary', 'William', 'Emma', 'Jacob', 'Sophia']

function findMatches(arr1, arr2) {
	return arr1.reduce((matches, el) => {
		if (arr2.includes(el)) return matches + 1
		return matches
	}, 0)
}

const attendingStudentsCount = new Set([...history, ...mathematics])

console.log(`${findMatches(history, mathematics)} студентів з гуртка з історії також відвідують гурток з математики`)
console.log(`${attendingStudentsCount.size} студентів відвідують хоча б один гурток.`)
