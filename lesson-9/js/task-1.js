'use strict'

const testArr = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
]
console.log(testArr)

//========================================================================================================================================================
// 1
let firstQuarterSum = 0
for (let i = 0; i < testArr.length / 2; i++) {
	for (let j = 0; j < testArr[i].length / 2; j++) {
		firstQuarterSum += testArr[i][j]
	}
}
console.log(`Сумма элементов в 1-й четверти ${firstQuarterSum}`)

//========================================================================================================================================================
// 2
let secondQuarterSum = 0
for (let i = 0; i < testArr.length / 2; i++) {
	for (let j = 2; j < testArr[i].length; j++) {
		secondQuarterSum += testArr[i][j]
	}
}
console.log(`Сумма элементов во 2-й четверти ${secondQuarterSum}`)

//========================================================================================================================================================
// 3
let thierdQuarterSum = 0
for (let i = 2; i < testArr.length; i++) {
	for (let j = 0; j < testArr[i].length / 2; j++) {
		thierdQuarterSum += testArr[i][j]
	}
}
console.log(`Сумма элементов в 3-й четверти ${thierdQuarterSum}`)

//========================================================================================================================================================
// 4
let fourthQuarterSum = 0
for (let i = 2; i < testArr.length; i++) {
	for (let j = 2; j < testArr[i].length; j++) {
		fourthQuarterSum += testArr[i][j]
	}
}
console.log(`Сумма элементов в 4-й четверти ${fourthQuarterSum}`)

//========================================================================================================================================================
// 5 Суму парних рядків

let evenRowsSum = 0

for (let i = 1; i <= testArr.length; i++) {
	if (i % 2 !== 0) {
		for (let j = 0; j < testArr[i].length; j++) {
			evenRowsSum += testArr[i][j]
		}
	}
}
console.log(`Сума парних рядків ${evenRowsSum}`)

//========================================================================================================================================================
// 6 Суму непарних стовпців

let oddRowsSum = 0

for (let i = 0; i < testArr.length; i++) {
	if (i % 2 === 0) {
		for (const j of testArr[i]) {
			oddRowsSum += j
		}
	}
}
console.log(`Сума непарних рядків ${oddRowsSum}`)

//========================================================================================================================================================
//7 У парних рядках – непарні стовпці, у непарних – парні.

for (let i = 0; i < testArr.length; i++) {
	if (i % 2 !== 0) {
		for (let j = 0; j < testArr[i].length; j++) {
			if (j % 2 === 0) console.log(`Парный рядок, непарный столбец - ${testArr[i][j]}`)
		}
	} else {
		for (let j = 0; j < testArr[i].length; j++) {
			if (j % 2 !== 0) console.log(`Непарный рядок, парный столбец - ${testArr[i][j]}`)
		}
	}
}
