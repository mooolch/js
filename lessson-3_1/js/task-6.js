alert(
    'Гра полювання на зайця.\nПеред вами ігрове поле - квадрат 2х2 клітинки. Заєць знаходиться у верхньому лівому кутку поля. Вам потрібно поставити пастку вказуючи номер рядка і стовпця клітинки. За один крок заєць може стрибнути у будь-яку із вільних клітинок.'
)

const MIN_FIELD_SIZE = 1
const MAX_FIELD_SIZE = 2

let trapColumn = parseInt(prompt('Введіть номер стовпця де потрібно розмістити пастку', '1'))
let trapRow = parseInt(prompt('Введіть номер рядку де потрібно розмістити пастку', '2'))

let rabbitColumn
let rabbitRow

if (trapColumn > 0 && trapColumn < 3 && trapRow > 0 && trapColumn) {
    // Определяем куда прыгнул заяц
    rabbitColumn = MIN_FIELD_SIZE + Math.floor(Math.random() * MAX_FIELD_SIZE - MIN_FIELD_SIZE + 1)
    rabbitRow = MIN_FIELD_SIZE + Math.floor(Math.random() * MAX_FIELD_SIZE - MIN_FIELD_SIZE + 1)
    if (trapColumn === rabbitColumn && trapRow === rabbitRow)
        alert('Заець у пастці! Ви отримуєте 100 балів! Полювання закінчено.')
    else {
        alert('Заець уникнув пастку, але ви маєте ще одну. Розмістіть її щоб продовжити полювання.')
        // Новая ловушка
        trapColumn = parseInt(prompt('Введіть номер стовпця де потрібно розмістити пастку', '1'))
        trapRow = parseInt(prompt('Введіть номер рядку де потрібно розмістити пастку', '2'))
        if (trapColumn > 0 && trapColumn < 3 && trapRow > 0 && trapColumn) {
            // Определяем куда еще раз прыгнул заяц
            rabbitColumn = MIN_FIELD_SIZE + Math.floor(Math.random() * MAX_FIELD_SIZE - MIN_FIELD_SIZE + 1)
            rabbitRow = MIN_FIELD_SIZE + Math.floor(Math.random() * MAX_FIELD_SIZE - MIN_FIELD_SIZE + 1)
            if (trapColumn === rabbitColumn && trapRow === rabbitRow) {
                alert('Заець у пастці! Ви отримуєте 50 балів! Полювання закінчено.')
            } else alert('Заець знову уникнув пастку. Полювання закінчено. Йди вполюй сосику в супермаркеті)).')
        } else alert('Ви не корректно розмістили пастку')
    }
} else alert('Ви не корректно розмістили пастку')
