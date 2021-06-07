class Man{
    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name(value){
        if(value.length>6){
            this._name=value;
        }
        else{
            console.log('Rejected');
        }
    }
    
}
let m=new Man('Rup');
console.log(m.name);

m.name="Rupam";

console.log(m.name);