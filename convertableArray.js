class ConvertAbleArray extends Array{
    convert(){
        let returnArray=[];
        this.forEach(value => {
            returnArray.push("Converted    !!!"+value);
        });
        return returnArray;
    }
}

let numArr=new ConvertAbleArray();
numArr.push(1);
numArr.push(2);
numArr.push(3);
numArr.push(4);
numArr.push(5);

console.log(numArr.convert());