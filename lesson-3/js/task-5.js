const driverLicenseCategory = prompt('Введіть категорію водійського посвідчення(англійські літери)', 'A').toUpperCase();

const DRIVER_CATEGORY_A = 'A';
const DRIVER_CATEGORY_B = 'B';
const DRIVER_CATEGORY_C = 'C';

if (driverLicenseCategory == DRIVER_CATEGORY_A) {
	alert(`Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати мотоциклом.`);
} else if (driverLicenseCategory === DRIVER_CATEGORY_B) {
	alert(`Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати легковим
автомобілем.`);
} else if (driverLicenseCategory === DRIVER_CATEGORY_C) {
	alert(`Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати вантажним
автомобілем.`);
} else {
	alert('Категорія посвідчення введена не корректно');
}

//Короткая форма

/* const message =
	driverLicenseCategory === DRIVER_CATEGORY_A
		? alert(`Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати мотоциклом.`)
		: false || driverLicenseCategory === DRIVER_CATEGORY_B
		? alert(`Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати легковим автомобілем.`)
		: false || driverLicenseCategory === DRIVER_CATEGORY_C
		? alert(`Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати вантажним автомобілем.`)
		: false || alert('Категорія посвідчення введена не корректно');
 */