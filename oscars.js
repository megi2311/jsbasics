function solve (input){
let actorName=input.shift();
let points=Number(input.shift());
let numberRate=Number(input.shift());
let result=0
let total=0
for (let i=0;i<numberRate;i++){
    let nameRate=input.shift();
    let pointsRate=Number(input.shift());
    if(i===0){
        total=result+points 

    }else{
        total=result 
    }
    result=total+((nameRate.length * pointsRate)/2)
    
    
}
if(total> 1250.5){
    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${result.toFixed(1)}!`)
        }else if(total<1250.5){
            let moneyNeeded=1250.5-result
            console.log(`Sorry, ${actorName} you need ${moneyNeeded.toFixed(1)} more!`)
        }


}
solve([
'Zahari Baharov',
205,
4,
'Johnny Depp',
45,
'Will Smith',
29,
'Jet Lee',
10,
'Matthew Mcconaughey',
39

])