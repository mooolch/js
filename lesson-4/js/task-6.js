let c = 1
let counter = 0
// t = table
// tr = tableRow
// c = tableCell

for (let t = 0; t < 3; t++) {
	document.write('<table>')
	for (let tr = 0; tr < 3; tr++) {
		document.write('<tr>')
		for (; c <= 27; c++) {
			counter++
			if (counter > 3) {
				counter = 0
				break
			} else document.write(`<td> ${c} </td>`)
		}
		document.write('</tr>')
	}
	document.write('</table>')
}

//========================================================================================================================================================
/* 
let tQ = 3 // tablesQuantity
let trQ = 3 // trQuantity
let tdQ = 3 // tdQuantity

for (let t = 0; t < tQ; t++) {
	document.write('<table>')
	for (let tr = 0; tr < trQ; tr++) {
		document.write('<tr>')
		for (let td = 0; td < tdQ; td++) {
			counter++
			document.write(`<td> ${counter} </td>`)
		}
		document.write('</tr>')
	}
	document.write('</table>')
}
*/