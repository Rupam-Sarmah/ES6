let person= {
    age : 28,
    name : 'Max'
};

let handler={
    get: function(target, nam){
        return nam in target ? target[nam]: 'Not Available';
    },
    set: function(target, property, value){
        if(value.length > 2){
            Reflect.set(target, property, value);
        }
    }
};

var proxy = new Proxy(person, handler);
proxy.name = "ru";

console.log(proxy.name); //o/p:Max
console.log(proxy.age); //o/p:Not available