class O1{
    constructor(){
        this.a=22;
    }
}

class O2{
    constructor(){
        this.b=33;
    }
}

var o1= new O1();
var o2=new O2();

var obj=Object.assign(o1,o2);
console.log(obj) //o/p:22,33

console.log(o1 instanceof O1);// true
console.log(o2 instanceof O2);//true

console.log(obj instanceof O1);//true
console.log(obj instanceof O2);//false