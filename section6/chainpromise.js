//tut S06E58

function waitAsec(sec){
    return new Promise(function(resolve,reject){
        if(sec>2){
            reject("Failled!!!");
        }
        else{
        setTimeout(function(){
            sec++;
            resolve(sec); //this is important to pass "SEC"
        },1000);}
    });
}

waitAsec(2)
    .then(waitAsec)
    .then(function(sec){
        console.log(sec);
    })
    .catch(function(error){
        console.log(error);
    });