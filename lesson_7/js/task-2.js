'use strict'

const elementsNumber = parseInt(prompt('Введіть к-ть елементів массиву що необхідно створити', '7'))

const arr = new Array(elementsNumber)

//"Читабельно" ли это без дополнительно переменной? значаение само поп себе округляется в меньшую сторону мез math.floor
// const halfOfLength = arr.length / 2

arr.fill(1, 0, arr.length / 2).fill(7, arr.length / 2)

console.log(arr)
