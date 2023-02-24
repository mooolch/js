document.write('<table>')
for (let tableRow = 0; tableRow < 3; tableRow++) {
	document.write('<tr>')
	for (let tableCell = 1; tableCell <= 7; tableCell++) {
		document.write(`<td> ${tableCell} </td>`)
	}
	document.write('</tr>')
}
document.write('</table>')