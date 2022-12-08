// Task 1  Movie names

const arr = ["Avangarse","Top Gun","Creed","Who am I"]

for(let key in arr){
    console.log(arr[key])
}

// Task 2  Cars 

const cars = ["BMW","Mercedes","Audi","Chevrolet","Bugatti","Lombargini"]
let str = ""
const newArr = []

for(let i = 0; i < cars.length; i++){
    str += cars[i] + " "
}

newArr.push(str)

console.log(str,newArr)



//  Task 3  Add the word hello

const friends = ["Mokhirbek","Davronbek","Bexruz","Mansur","Botir"]

const wordAdd = friends.map( item => "Hello " + item )

console.log(wordAdd)



// Task 4   Convert numeric array to Boolean

const numbers = [0,1,2,3,4,5]

const toBoolean = numbers.map(item => Boolean(item))

console.log(toBoolean)



// Task 5  Sorting

const num = [1,6,7,8,3,4,5,6]

const sorted = num.sort()
const descendSort = []

// sorted = sorted.reverse() // this is another way

sorted.forEach(item => descendSort.unshift(item))
console.log(descendSort)


// Task 6   Filter

const filterNumber = num.filter(item => item === 3)
console.log(filterNumber)


// Task 7  Function for find index

const findIndex = (arr, number) => {
    for(let i = 0; i < arr.length; i++){
        if(i === number){
            return arr[i]
        }
    }
    return "There is no this kind of index"
}

console.log(findIndex(["a","b","c","d"],3))



// Task 8  


for(let i = 0; i < 10; i++){
    console.log("a")
}



// Task 9   Print prime numbers


const primeNumberFinder = function(num){
    if(num <= 1){
        return false
    }else{
        for (let i = 2; i <= num; i++) {
            if (num % i === 0 && i !== num) {
                return false
            }
        }
        return true
    }
}

const findPrimeNum = function(arr){
    const primeNumbers = []
    for(let i = 0; i < arr.length; i++){
        if(primeNumberFinder(arr[i])){
            primeNumbers.push(arr[i])
        }
    }
    return primeNumbers
}

console.log(findPrimeNum([1,2,3,4,5,6,7]))


// Task 10   Find odd numbers



const oddNumberFinder = (arr) =>{
    let i = 0
    const oddNumbers = []
    while(i < arr.length){
        if(arr[i] % 2 !=0){
            oddNumbers.push(arr[i])
        }
        i++
    }

    return oddNumbers
}

console.log(oddNumberFinder([1,2,3,4,5,6,6]))