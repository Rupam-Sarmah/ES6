let person= {
    age : 28,
    name : 'Max'
};

let handler={
};
let protoHandler={
    get: function(target, nam){
        return nam in target ? target[nam]: 'Not Available';
    }
};

let proxy = new Proxy({}, handler);
let protoProxy= new Proxy(proxy, protoHandler);
Reflect.setPrototypeOf(person, protoProxy)
console.log(person.name); //o/p:Max
//console.log(proxy.age); //

console.log(person.hobby); //o/p:Not Available