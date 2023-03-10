'use strict'

const elementsNumber = parseInt(prompt('Введіть к-ть елементів массиву що необхідно створити', '7'))

const arr = new Array(elementsNumber).fill(0, 0, 7)
console.log(arr)
