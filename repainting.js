function solve(input) {

    let minutes=Number(input.shift())
    let seconds=Number(input.shift())
    let lenght=Number(input.shift())
    let secondsForIncome=Number(input.shift())

    let callINSeconds=minutes*60+seconds
    let callForTime=lenght/120
    let timeSale=callForTime*2.5
    let time=(lenght/100)*secondsForIncome-timeSale

    if (callINSeconds>=time){
        console.log(`Marin Bangiev won an Olympic quota!`)
        console.log(`His time is ${time}."`)

    }else{
        let call=time-callINSeconds
        console.log(`No, Marin failed!`)
        console.log(`He was ${call.toFixed(3)} second slower.`)
    }


  }
  
       

solve([
    
    1,
20,
1546,
12

    


])	
