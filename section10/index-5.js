let person={
    name:'rupam'
};

let handler={
    get:function(target, property){
        return Reflect.get(target, property);
    }
};

let {proxy,revoke}=Proxy.revocable(person,handler);

console.log(proxy.name);// gives the name
revoke();
console.log(proxy.name);// error on using this