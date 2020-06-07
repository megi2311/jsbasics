function solve (arg1){
let result=Number(arg1);
let combinations=0
for (let num1=0;num1<=result;num1++){
    for(let num2=0;num2<=result;num2++){
        for(let num3=0;num3<=result;num3++){

            if(num1+num2+num3===result){
               combinations++
            }
        }
    }
}
console.log(combinations)
}
solve([
25
])