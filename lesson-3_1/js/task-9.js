const filenameExtension = prompt(
    'Введіть першу літеру (без кавичок) розширення файлу («html», «doc», «jpeg», «mp3», «xls»).\nЩоб отримати назву програми, яка може відкрити цей тип файлу.',
    'html'
)
    .toLowerCase()
    .charAt(0)

let fullFilenameExtension
let programName

switch (filenameExtension) {
    case 'h':
        fullFilenameExtension = '«html»'
        programName = 'Google Chrome'
        break
    case 'd':
        fullFilenameExtension = '«doc»'
        programName = 'Microsoft Word'
        break
    case 'j':
        fullFilenameExtension = '«jpeg»'
        programName = 'Paint'
        break
    case 'm':
        fullFilenameExtension = '«mp3»'
        programName = 'Windows Media Player'
        break
    case 'x':
        fullFilenameExtension = '«xls»'
        programName = 'Microsoft Excel'
        break
    default:
        fullFilenameExtension = '«*__помилка розпізнання__*»'
        programName = 'пошук у гуглі... бо це яксь невідома мені хреновіна)'
        break
}

alert(`Розширення файлу ${fullFilenameExtension}, чудово підійде - ${programName}.`)
