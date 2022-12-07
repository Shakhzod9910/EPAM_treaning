//Create a car object

const car = {
    color: "black",
}

//Change the color property

car.color = "green"

//Add the power property to the car object, which is a function and displays the engine power to the console   


car.power = function(enginePower){
    return console.log(enginePower)
}
car.power(1200)


//Pears and apples

const sum = (pears, apples) => pears + apples
console.log(sum(6,7))


//Define name

const nameFinder = (name) =>{
    const savedName = "Shakhzodbek"

    if(savedName === name){
        return "Hello" + " " + name
    }else{
        return "There is no such name"
    }
}

console.log(nameFinder("Shakhzodbek"))


// Calculating type

const calculatingType = (arg) => {
    console.log("The type of the argument is" + " " + typeof(arg))

    arg = String(arg)

    console.log(arg)

    return function typeCheck(){
       console.log("The type of the output is " + typeof(arg))
    }
}

calculatingType(1213)()



// Prime or not

const checkPrime = function(inputNumber){
    if (inputNumber < 1){
        return inputNumber + " not a prime number"
    }else if (inputNumber === 1){
        return  inputNumber + " neither prime nor composite number"
    }else{

        return (function func(isPrime){
            let counter = --isPrime
            let division = inputNumber % counter
            return function innerFunc(){
                if((division != 0) && (counter != 1)){
                    return func(isPrime)()
                }else if ((division === 0) && (counter != 1)){
                    return inputNumber + " is not a prime number"
                }else{
                    return inputNumber + " is a prime number"
                }
            }
        })(inputNumber)()
    }
}

console.log(checkPrime(23))