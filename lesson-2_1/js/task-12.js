const nowDate = new Date();

const SECONDS_IN_A_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;

const totalTimeInSeconds =
	nowDate.getHours() * SECONDS_IN_A_HOUR + nowDate.getMinutes() * SECONDS_IN_A_MINUTE + nowDate.getSeconds();

const elapsedHours = Math.floor(totalTimeInSeconds / SECONDS_IN_A_HOUR);
const elapsedMinutes = Math.floor((totalTimeInSeconds % SECONDS_IN_A_HOUR) / 60);
const elapsedSeconds = totalTimeInSeconds % 60;

console.log(`Від початку дня пройшло ${totalTimeInSeconds} секунд.`);
console.log(`Це : ${elapsedHours} год. ${elapsedMinutes} хв. ${elapsedSeconds} с.`);
