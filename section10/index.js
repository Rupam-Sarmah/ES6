let person= {
    name: 'Max'
};

let handler={
    get: function(target, name){
        return name in target ? target[name]: 'Not Available';
    }
};

var proxy=new Proxy(person, handler);

console.log(proxy.name); //o/p:Max
console.log(proxy.age); //o/p:Not available