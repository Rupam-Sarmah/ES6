//what is REST parameter and how to convrert to list of array.
// (...addMe)-- three dot is known as REST parameters.
function mySum(...addMe){
let result=0;
for(i=0;i<addMe.length;i++){
    result=result+addMe[i];
    }
    return result;
}

console.log(mySum(10,20,30,40));