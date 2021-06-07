let person= {
    age : 28,
    name : 'Max'
};

let handler={
    get: function(target, nam){
        return nam in target ? target[nam]: 'Not Available';
    }
};

var proxy = new Proxy({}, handler);

Reflect.setPrototypeOf(person, proxy)
console.log(person.name); //o/p:Max
//console.log(proxy.age); //

console.log(person.hobby); //o/p:Not Available