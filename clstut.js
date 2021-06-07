class Person {
    constructor(name){
        this.name=name;
    }

    greet(){
        console.log("Hello Dear " + this.name +",  Welcome Back to the ES6.");
    }
}

let m =new Person("Rupam");

m.greet();