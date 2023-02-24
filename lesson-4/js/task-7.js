const paragraphsNumber = parseInt(prompt('Введіть потрібну кількість абзаців:', '4'))

for (let i = 1; i <= paragraphsNumber; i++) {
	document.write(`<h1>Заголовок ${i}</h1>`)
	for (let j = 1; j <= i; j++) document.write(`<p>Розділ ${i}, параграф ${j}</p>`)
}
