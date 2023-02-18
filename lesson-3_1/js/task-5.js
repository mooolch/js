alert(
    'Гра морський бій. v2.0\nПотопи корабель за 2 постріли\n(Тепер корабель переміщюється після першого пострілу на 1 клітинку вліво або вправо)'
)
const COIN_RANDOM = Math.floor(Math.random() * 2)
const SHIP_MOVEMENT_RANGE = 1
const SHOOTING_SPREAD = 1
const BATTLE_FIELD_MIN_WIDTH = 1
const BATTLE_FIELD_MAX_WIDTH = parseInt(
    prompt('Введіть ширину ігрового поля у клітинках (3-10 клітинок)\n(Ворожий корабель займає 1 клітинку)', '5')
)

if (BATTLE_FIELD_MAX_WIDTH >= 3 && BATTLE_FIELD_MAX_WIDTH <= 10) {
    const shipPosition =
        BATTLE_FIELD_MIN_WIDTH + Math.floor(Math.random() * (BATTLE_FIELD_MAX_WIDTH - BATTLE_FIELD_MIN_WIDTH + 1))
    let userShoot = parseInt(prompt('Перший постріл.\nВведіть номер клітинки, щоб добряче шмальнути туди)', '3'))

    if (userShoot === shipPosition)
        alert('БАБАХ!\nНу ти і снайпер! Поцілив у корабель з першого пострілу!\nПеремога, гру закінчено.')
    else if (userShoot + SHOOTING_SPREAD === shipPosition || userShoot - SHOOTING_SPREAD === shipPosition) {
        alert('Майже влучив!\nКорабель пошкоджено, приготуйся до другого пострілу!')
        userShoot = parseInt(prompt('Другий постріл.\nВведіть ще раз номер клітинки)', '1'))
        //Визначаємо нову позицію корабля
        let newShipPosition
        if (shipPosition === BATTLE_FIELD_MIN_WIDTH) newShipPosition = shipPosition + SHIP_MOVEMENT_RANGE
        else if (shipPosition === BATTLE_FIELD_MAX_WIDTH) newShipPosition = shipPosition - SHIP_MOVEMENT_RANGE
        else
            newShipPosition =
                COIN_RANDOM === 0 ? shipPosition - SHIP_MOVEMENT_RANGE : shipPosition + SHIP_MOVEMENT_RANGE
        //
        if (userShoot === newShipPosition) alert('БУМ!\nПряме влучання! Корабель пішов на дно.\nГру закінчено.')
        else alert('Було дуже близько..\nАле корабель все ще на плаву.\nТи програв, гру закінчено.')
    } else {
        alert('Ну і куди ж ти стріляв?\nВорожий корабель не пошкождено, приготуйся до другого пострілу!')
        userShoot = parseInt(prompt('Другий постріл.\nВведіть ще раз номер клітинки)', '1'))
        //Визначаємо нову позицію корабля
        let newShipPosition
        if (shipPosition === BATTLE_FIELD_MIN_WIDTH) newShipPosition = shipPosition + SHIP_MOVEMENT_RANGE
        else if (shipPosition === BATTLE_FIELD_MAX_WIDTH) newShipPosition = shipPosition - SHIP_MOVEMENT_RANGE
        else
            newShipPosition =
                COIN_RANDOM === 0 ? shipPosition - SHIP_MOVEMENT_RANGE : shipPosition + SHIP_MOVEMENT_RANGE
        //
        if (userShoot === newShipPosition) alert('БУМ!\nПряме влучання! Корабель пішов на дно.\nГру закінчено.')
        else alert('Ну ти зовсім мазіла...горобці в шоці..\nКраще йди вчи Java Script замість ігор))')
    }
} else alert('Помилка. Невірно введена ширина ігрового поля.')
