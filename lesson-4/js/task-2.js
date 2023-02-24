const el = document.querySelector('.task__body2')

for (let i = 1; i <= 10; i++) {
	const input = document.createElement('div')
	input.innerHTML = `
    <label for="product${i}">Продукт №${i}</label>
    <input id="product${i}" type="number">
    `
	el.appendChild(input)
}
