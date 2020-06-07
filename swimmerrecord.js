function solve (arg1,arg2,arg3){
let recordinSeconds=Number(arg1)
let distanceinM=Number(arg2)
let timeinSecondfor1m=Number(arg3)
 
let timeforDistance=distanceinM*timeinSecondfor1m
let delay=Math.floor(distanceinM / 15)
let delaytotal=delay * 12.5
let totalTime=delaytotal+timeforDistance 
 if (totalTime<recordinSeconds){
     console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
 
 }else{
     let slowerTime= totalTime-recordinSeconds
     console.log(`No, he failed! He was ${slowerTime.toFixed(2)} seconds slower.`)
 }

}
solve(
    55555.67,
    3017,
    5.03
)