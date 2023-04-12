'use strict'

class Author {
	constructor(fullName, dateOfBirth, description) {
		this.name = fullName
		this.dateOfBirth = dateOfBirth
		this.description = description
	}
	toString() {
		return `Author name: ${this.name} <br> Date of birth: ${this.dateOfBirth} <br> Description: ${this.description}`
	}
}

class Publisher {
	constructor(publisherName, regNumber, establishmentDate) {
		this.name = publisherName
		this.regNumber = regNumber
		this.establishment = establishmentDate
	}
	toString() {
		return `Publisher name: ${this.name} <br> Reg. number: ${this.regNumber} <br> Establishment date : ${this.establishment}`
	}
}

class Book {
	constructor({
		name,
		genre,
		authorName,
		dateOfBirth,
		description,
		publisherName,
		regNumber,
		establishmentDate,
		theme, // Разделы библиотеки
		available, // Статус доступна ли она в данный момент
		origin,
	}) {
		this.name = name
		this.genre = genre
		this.author = new Author(authorName, dateOfBirth, description)
		this.publisher = new Publisher(publisherName, regNumber, establishmentDate)
		this.theme = theme
		this.available = available
		this.origin = origin
	}
	toString() {
		return `<br> Book name: ${this.name} <br> Book genre: ${this.genre} <br> Book author: ${this.author} <br> Book publisher: ${this.publisher} <br> Book theme: ${this.theme} <br> Available for reading: ${this.available} <br> Book origin: ${this.origin}<br>`
	}
}

class Library {
	constructor(initData) {
		this.books = this.createLibrary(initData)
	}
	createLibrary(initData) {
		return initData.map((el) => new Book(el))
	}
	deleteBook(name) {
		this.books = this.books.filter((book) => book.name !== name)
	}
	addBook(initData) {
		this.books.push(new Book(initData))
	}
	getBookByName(name) {
		return this.books.reduce((targetBook, book) => {
			if (book.name === name && book.available) targetBook = book
			if (targetBook === undefined) throw new Error('No books found')
			return targetBook
		}, undefined)
	}
	getBooksByAuthor(name) {
		const books = this.books.filter((book) => book.author.name === name && book.available)
		if (books.length === 0) throw new Error('No books found')
		return books
	}
	getBooksByPublisher(name) {
		const books = this.books.filter((book) => book.publisher.name === name && book.available)
		if (books.length === 0) throw new Error('No books found')
		return books
	}
	// Реалiзувати роздiли бiблiотеки
	getBooksByTheme(themeName) {
		const books = this.books.filter((book) => book.theme === themeName && book.available)
		if (books.length === 0) throw new Error('No books found')
		return books
	}
	toString() {
		return `${this.books}`
	}
}

const arr = [
	{
		name: 'Book 1',
		genre: 'Fantasy',
		authorName: 'Author 1',
		dateOfBirth: 1978,
		description: 'Fantasy book by Author 1',
		publisherName: 'Publisher 1',
		regNumber: 12345,
		establishmentDate: 2000,
		theme: 'Theme 7',
		available: true,
		origin: 'Acquired from a local bookstore',
	},
	{
		name: 'Book 2',
		genre: 'Science Fiction',
		authorName: 'Author 2',
		dateOfBirth: 1985,
		description: 'Science Fiction book by Author 2',
		publisherName: 'Publisher 2',
		regNumber: 67890,
		establishmentDate: 1995,
		theme: 'Theme 2',
		available: true,
		origin: 'Gift from a friend',
	},
	{
		name: 'Book 3',
		genre: 'Drama',
		authorName: 'Author 3',
		dateOfBirth: 1960,
		description: 'Drama book by Author 3',
		publisherName: 'Publisher 1',
		regNumber: 12345,
		establishmentDate: 2000,
		theme: 'Theme 3',
		available: true,
		origin: 'Borrowed from a library',
	},
	{
		name: 'Book 4',
		genre: 'Mystery',
		authorName: 'Author 4',
		dateOfBirth: 1975,
		description: 'Mystery book by Author 4',
		publisherName: 'Publisher 3',
		regNumber: 54321,
		establishmentDate: 1980,
		theme: 'Theme 4',
		available: true,
		origin: 'Purchased online',
	},
	{
		name: 'Book 5',
		genre: 'Fantasy',
		authorName: 'Author 5',
		dateOfBirth: 1990,
		description: 'Fantasy book by Author 5',
		publisherName: 'Publisher 4',
		regNumber: 98765,
		establishmentDate: 2005,
		theme: 'Theme 5',
		available: true,
		origin: 'Inherited from a family member',
	},
	{
		name: 'Book 6',
		genre: 'Science Fiction',
		authorName: 'Author 2',
		dateOfBirth: 1985,
		description: 'Science Fiction book by Author 2',
		publisherName: 'Publisher 5',
		regNumber: 24680,
		establishmentDate: 2010,
		theme: 'Theme 6',
		available: true,
		origin: 'Found at a second-hand bookstore',
	},
	{
		name: 'Book 7',
		genre: 'Mystery',
		authorName: 'Author 6',
		dateOfBirth: 1982,
		description: 'Mystery book by Author 6',
		publisherName: 'Publisher 6',
		regNumber: 13579,
		establishmentDate: 2000,
		theme: 'Theme 7',
		available: true,
		origin: 'Donated by a colleague',
	},
	{
		name: 'Book 8',
		genre: 'Fantasy',
		authorName: 'Author 7',
		dateOfBirth: 1978,
		description: 'Fantasy book by Author 7',
		publisherName: 'Publisher 7',
		regNumber: 86420,
		establishmentDate: 1990,
		theme: 'Theme 8',
		available: true,
		origin: 'Donated by a colleague',
	},
]
const lbrr = new Library(arr)
console.log(lbrr)

