let cardA={
    name:"Aces of Spades"
};
let cardB={
    name:"King of Club"
};

let k1={a:1};
let k2={b:2};
let deck=new WeakMap();
deck.set(k1,cardA);
deck.set(k2,cardB);

console.log(deck.get(k1)); //givs the value
