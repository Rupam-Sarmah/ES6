let cardA={
    name:"Aces of Spades"
};
let cardB={
    name:"King of Club"
};

let deck=new Map();
deck.set('A',cardA);
deck.set('B',cardB);

// for (let key of  deck.keys()) {
//     console.log(key);              it will provide keys
// }

// for (let value of  deck.values()) {
//     console.log(value);               it will provide values
// }

// for (let value of  deck.entries()) {
//     console.log(value);                it will provide arrays
// }

for (let value of  deck) {
    console.log(value);              //same as above
}
//console.log(deck.values());
