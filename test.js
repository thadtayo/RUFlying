let date = "2020-04-27";

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date();
const secondDate = new Date(date);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)) - 1;

console.log(diffDays);