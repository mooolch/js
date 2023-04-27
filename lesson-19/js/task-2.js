'use strict'

document.querySelector('.inputs').addEventListener('input', function (e) {
	const val = parseFloat(e.target.value)
	e.target.setAttribute('main', 'true')

	// собираем все целевые инпуты
	const inputs = document.querySelectorAll('.trgt-inp')

	let mainInpIdx
	for (let i = 0; i < inputs.length; i++) {
		// запоминаем индекс "главного" инпута
		if (inputs[i].hasAttribute('main')) mainInpIdx = i
	}

	// обновляем значения для инпутов которые ниже "главного"
	for (let i = mainInpIdx + 1, j = val; i < inputs.length; i++) {
		inputs[i].value = ++j
	}

	// обновляем значения для инпутов которые выше "главного"
	for (let i = mainInpIdx - 1, j = val; i >= 0; i--) {
		inputs[i].value = --j
	}

	// убираем атрибут у "главного" инпута, чтобы при новом вводе числа в другом инпуте ф-ция заново отработала корректно
	inputs[mainInpIdx].removeAttribute('main')
})

//========================================================================================================================================================
// этот вариант вроде и проще, а вроде и нет. но вроде как быстрее будет работать?
// смущает чистабельность моих обращений к родителю родителя и потомку потомка)
// мне кажется выглядит это как-то дико

// какой из варинтов лучше?

/* 
document.querySelector('.inputs').addEventListener('input', function (e) {
	const val = parseFloat(e.target.value)

	let inpTopParent = e.target.parentElement.parentElement

	let copyInpTopParent = inpTopParent
	let newVal = val

	while (copyInpTopParent.nextElementSibling) {
		copyInpTopParent = copyInpTopParent.nextElementSibling
		copyInpTopParent.firstElementChild.firstElementChild.value = ++newVal
	}

	copyInpTopParent = inpTopParent
    newVal = val
    
	while (copyInpTopParent.previousElementSibling) {
		copyInpTopParent = copyInpTopParent.previousElementSibling
		copyInpTopParent.firstElementChild.firstElementChild.value = --newVal
	}
}) 
*/

//========================================================================================================================================================
document.querySelector('.inputs').addEventListener('focusin', e => {
	e.target.classList.add('_focus')
})

document.querySelector('.inputs').addEventListener('focusout', e => {
	e.target.classList.remove('_focus')
})
//========================================================================================================================================================


