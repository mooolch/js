'use strict'

const producedSites = [
	{
		dveloper: 'dev 1',
		owner: 'owner 1',
		sponsors: [
			{
				surname: 'Anderson',
				name: 'Emily',
				donations: 5000,
			},
			{
				surname: 'Brown',
				name: 'Liam',
				donations: 12000,
			},
			{
				surname: 'Johnson',
				name: 'Ava',
				donations: 7000,
			},
		],
		issue: 2004,
		price: 214000,
	},
	{
		dveloper: 'dev 2',
		owner: 'owner 2',
		sponsors: [
			{
				surname: 'Campbell',
				name: 'Noah',
				donations: 5000,
			},
			{
				surname: 'Davis',
				name: 'Sophia',
				donations: 12000,
			},
			{
				surname: 'Evans',
				name: 'Ethan',
				donations: 17000,
			},
		],
		issue: 1999,
		price: 82000,
	},
	{
		dveloper: 'dev 3',
		owner: 'owner 3',
		sponsors: [
			{
				surname: 'Foster',
				name: 'Olivia',
				donations: 55000,
			},
			{
				surname: 'Green',
				name: 'Mason',
				donations: 17000,
			},
			{
				surname: 'Harrison',
				name: 'Charlotte',
				donations: 17000,
			},
		],
		issue: 2007,
		price: 154000,
	},
]
console.log(producedSites)

// 1) загальну вартість усіх сайтів
const calcTotalSitesPrice = arr => arr.reduce((totalPrice, site) => totalPrice + site.price, 0)
console.log(calcTotalSitesPrice(producedSites))
//========================================================================================================================================================

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
function sitesMadeInPeriod(startPeriod, endPeriod, arr) {
	return arr.reduce(
		(sitesNum, site) => (site.issue >= startPeriod && site.issue <= endPeriod ? sitesNum + 1 : sitesNum),
		0
	)
}
console.log(sitesMadeInPeriod(2000, 2009, producedSites))
//========================================================================================================================================================

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 50000
function sitesNumAboveDonationsSum(MaxDonationsSum, arr) {
	return arr.reduce((sitesNum, site) => {
		const totalDonations = site.sponsors.reduce((donationsSum, sponsor) => donationsSum + sponsor.donations, 0)
		if (totalDonations > MaxDonationsSum) sitesNum++
		return sitesNum
	}, 0)
}
console.log(sitesNumAboveDonationsSum(50000, producedSites))
//========================================================================================================================================================

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
const sponsorsList = producedSites.reduce((list, site) => list.concat(site.sponsors), [])
console.log(sponsorsList)
/* 
function getSponsorsList(arr) {
	const sponsorsList = []
	for (const site of producedSites) {
		for (const sponsor of site.sponsors) {
			sponsorsList.push(sponsor)
		}
	}
	return sponsorsList
}
console.log(getSponsorsList(producedSites))
*/

//========================================================================================================================================================

// 5) знайти рік, коли прибуток був найбільшим

// Создаем объект с данными про общую прибыль за каждый год (в формате год : прибыль за этот год)
function calcProfitOfYear(arr) {
	const profitsByYear = {}
	for (const site of producedSites) {
		if (site.issue in profitsByYear) profitsByYear[site.issue] += site.price
		else profitsByYear[site.issue] = site.price
	}
	return profitsByYear
}
const profitsByYear = calcProfitOfYear(producedSites)
console.log(profitsByYear)

//  Находим год с максимальной прибылью
function findYearWithHighestProfit(obj) {
	let year
	let max = 0
	for (const key in profitsByYear) {
		if (profitsByYear[key] > max) {
			year = key
			max = profitsByYear[key]
		}
	}
	return year
}
console.log(findYearWithHighestProfit(profitsByYear))
//========================================================================================================================================================

// 6) упорядкувати список за спаданням прибутку

// Имелось ввиду просто упорядочить от самого дорогого сайта к самому дешевому?
producedSites.sort((site1, site2) => site2.price - site1.price)

//========================================================================================================================================================

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
const higher100kCostSites = JSON.parse(JSON.stringify(producedSites.filter(site => site.price > 100000)))
console.log(higher100kCostSites)

const lower100kCostSites = JSON.parse(JSON.stringify(producedSites.filter(site => site.price < 100000)))
console.log(lower100kCostSites)
