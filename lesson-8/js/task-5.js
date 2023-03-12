'use strict'

const pricesHistory = [3798, 7122, 663, 663, 663, 7099, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

const priceChangingNum = pricesHistory.reduce(
	(counter, element, i, arrRef) => (element !== arrRef[i - 1] ? counter + 1 : counter),
	-1
) // 0 если первая цена тоже учитывается и -1 если первая цена не должна учитываться

console.log(priceChangingNum)
