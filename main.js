

const string = "Hello world"
const boolean = true
const number = 10


// Perform addition of various types

console.log(string + boolean); //Hello worldtrue
console.log(string + number);  //Hello world10
console.log(number + boolean); //11

// Perform multiplication of various types

console.log(string * boolean); //NaN
console.log(string * number);  //NaN
console.log(number * boolean); //10

// Divide different types

console.log(string / boolean); //NaN
console.log(string / number);  //NaN
console.log(number / boolean); //10

// Perform explicit conversion

console.log(Number("10"))           // 10
console.log(Number(true))           // 1
console.log(String(10))             // "10"
console.log(String(true))           //"true"
console.log(Boolean("Hello World")) //true
console.log(Boolean(10))            //true




