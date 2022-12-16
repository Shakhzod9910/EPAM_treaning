// Task 1

const text = "ahb acb aeb aeeb adcb axeb"
const re = /a[a-z]b/g
console.log(text.match(re))


//Task 2

const str = "2 + 3 223 2223"
const reEx = /2 [+] 3/gi
console.log(str.match(reEx))


// Task 3


const date = new Date()

let year = new Date().getFullYear();
let month = String(new Date().getMonth() + 1).padStart(2, '0');
let day = String(new Date().getDate()).padStart(2, '0');
let hour = String(new Date().getHours()).padStart(2, '0');
let minute = String(new Date().getMinutes()).padStart(2, '0');
let second = String(new Date().getSeconds()).padStart(2, '0');

const fullDate = day + '.' + month + '.' + year + " " + hour + ":" + minute  + ":" + second;

console.log(fullDate)