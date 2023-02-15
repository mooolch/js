const childAge = parseInt(prompt('Введіть кількість повних років дитини ', '0'));

// Роки вступу або закінчення
const kindergartenEntryAge = 3;
const schoolEntryAge = 7;
const schoolEndingAge = 17;
const universityEntryAge = 17;
const universityEndingAge = 22;

// Розрахунок
const yearsToEntryKindergarten = kindergartenEntryAge > childAge ?
    `піде через ${kindergartenEntryAge - childAge} р.` : 'вже мав піти.';

const yearsToEntrySchool = schoolEntryAge > childAge ?
    `піде через ${schoolEntryAge - childAge} р.` : 'вже мав піти.';

const yearsToEndSchool = schoolEndingAge > childAge ?
    `закінчить через ${schoolEndingAge - childAge} р.` : 'вже мав закінчити.';

const yearsToEntryUniversity = universityEndingAge > childAge ?
    `піде через ${universityEntryAge - childAge} р.` : 'вже мав піти.';

const yearsToEndUniversity = universityEndingAge > childAge ?
    `закінчить через ${universityEndingAge - childAge} р.` : 'вже мав закінчити.';

let el = document.querySelector('.task__body');
el.innerHTML = `
<p>Вашій дитині  ${childAge} р.</p>
<p>Садочок - ${yearsToEntryKindergarten}</p>
<p>Школа(вступ) - ${yearsToEntrySchool}</p>
<p>Школа(закінчення) - ${yearsToEndSchool}</p>
<p>Університет(вступ) - ${yearsToEntryUniversity}</p>
<p>Університет(закінчення) - ${yearsToEndUniversity}</p>
`;