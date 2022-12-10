class Animal{
    constructor(patName){
        this.patName = patName
    }

    move(){
        console.log(this.patName + " is white cat")
    }
}

class Cat extends Animal{
    constructor(patName){
        super(patName)
    }
}

const oscar = new Cat("Oscar")
oscar.move()