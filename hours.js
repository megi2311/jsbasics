function solve(arg1,arg2,){
let hours=Number(arg1)
let minutes=Number(arg2)
if(hours < 23){
 
 if ((minutes+15)>59){
    hours+=1
    minutes +=15
    minutes -=60

 }else {
     minutes +=15
 }

}else if (hours >= 23){
    if((minutes+15) > 59){
        hours = 0
        minutes += 15
        minutes -= 60
    }else {
        minutes +=15
    }

}

if(minutes<10){
    console.log(`${hours}:0${minutes}`)
}else{
    console.log(`${hours}:${minutes}`)
}


}

solve (1,
    46
   
)
