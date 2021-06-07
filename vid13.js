let name="jane";
let age=40;

let obj={
    name:"Max",
    age,
    great(){
        console.log(this.name + '  ' + this.age)
    }
}
obj.great()
//console.log();