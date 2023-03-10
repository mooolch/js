'use strict'

const elementsNumber = parseInt(prompt('Введіть к-ть елементів массиву що необхідно створити', '7'))

const arr = new Array(elementsNumber).fill(1, 0, 5).fill(7, 5)

console.log(arr)
