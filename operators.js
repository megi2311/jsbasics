function solve(arg1,arg2,arg3){
let N1=Number(arg1)
let N2=Number(arg2)
let operator=(arg3)
let print=''
if(operator==='+') {
    let result=(N1 + N2)
    if(result % 2 === 0 ){
        print+=`${N1} ${operator} ${N2} = ${result} - even`
    }else{
        print+=`${N1} ${operator} ${N2} = ${result} - odd`
    }
}else if (operator ==='*'){
    result=(N1 * N2)
    if(result % 2 === 0 ){
        print+=`${N1} ${operator} ${N2} = ${result} - even`
    }else{
        print+=`${N1} ${operator} ${N2} = ${result} - odd`
    }
}else if (operator === '-'){
    result=(N1 - N2)
    if(result % 2 === 0 ){
        print+=`${N1} ${operator} ${N2} = ${result} - even`
    }else{
        print+=`${N1} ${operator} ${N2} = ${result} - odd`
    }
}
if(operator ==='/'){
    if (N2===0){
     print +=`Cannot divide ${N1} by zero`
    }else{
        result=(N1 / N2)
    print += `${N1} ${operator} ${N2} = ${result.toFixed(2)}`
    }
}
if(operator==='%'){
    if(N2===0){
        print+=`Cannot divide ${N1} by zero`
    }else{
    result=(N1 % N2)
    print +=`${N1} % ${N2} = ${result}`
}
}

console.log(print)

}
solve(10,
    12,
    '+' )