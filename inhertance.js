class Person {
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("Hello Dear " + this.name +",  Welcome Back to the ES6. Now your age is "+this.age);
    }
}

class Rup extends Person{
    constructor(age){
        super("Rup");
        this.age=age;
    }
    greet(){
        console.log("Hello");
    }
    greetTwo(){
        super.greet();
        this.greet();
    }

}

let m =new Rup(28);

m.greetTwo();