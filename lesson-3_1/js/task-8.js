const numberOfCorners = parseInt(prompt('Введість кількість кутів геометричної фігури щоб отримати повну назву', '3'))

let geometricFigureName

switch (numberOfCorners) {
    case 3:
        geometricFigureName = 'Трикутник'
        break
    case 4:
        geometricFigureName = 'Чотирикутник'
        break
    case 5:
        geometricFigureName = "П'ятикутник"
        break
    case 6:
        geometricFigureName = 'Шестикутник'
        break
    case 7:
        geometricFigureName = 'Семикутник'
        break
    case 8:
        geometricFigureName = 'Восьмикутник'
        break
    default:
        geometricFigureName = 'nkdasjda831... жартую) , це якась невідома науці геометрична фігура'
        break
}

alert(`Геометрична фігура з ${numberOfCorners} кутами має назву - ${geometricFigureName}.`)
