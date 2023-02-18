alert('Введіть один із запропонованих варіантів відповіді, щоб побачити відповідну ємодзі')

const usersMood = prompt('Який ти сьогодні? \n1. Веселий \n2. Сумний \n3. Обурений').toLowerCase()

let emoji

switch (usersMood) {
    case 'веселий':
        emoji = '<img src="../img/happy.png" alt="emoji">'
        break
    case 'сумний':
        emoji = '<img src="../img/sad.png" alt="emoji">'
        break
    case 'обурений':
        emoji = '<img src="../img/angry.png" alt="emoji">'
        break
    default:
        emoji = '<img src="../img/error.png" alt="emoji">'
        break
}

let el = (document.querySelector('.task__body').innerHTML = `<p>${emoji}</p>`)
