document.write('<table>')
let cell = 1
let counter = 0
for (let row = 0; row < 3; row++) {
	document.write('<tr>')
	for (; cell <= 9; cell++) {
		counter++
		if (counter > 3) {
			counter = 0
			break
		} else document.write(`<td> ${cell} </td>`)
	}
	document.write('</tr>')
}
document.write('</table>')

//========================================================================================================================================================
/* 
document.write('<table>')
let rows = 3
let cells = 3
let counter = 0

for (let j = 0; j < rows; j++) {
	document.write('<tr>')
	for (let i = 0; i < 3; i++) {
		counter++
		document.write(`<td> ${counter} </td>`)
	}
	document.write('</tr>')
}
document.write('</table>')
 */
