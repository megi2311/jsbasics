function solve (input){
let serialName=input.shift();
let numberSeason=Number(input.shift());
let numberEpisodes=Number(input.shift());
let noAdvertising=Number(input.shift())

let advertising=(0.20*noAdvertising)
let continuingAdvertising=(noAdvertising+advertising)
let specialEpisode=(numberSeason*10)
let time= Math.floor(continuingAdvertising*numberEpisodes*numberSeason+specialEpisode)
console.log(`Total time needed to watch the ${serialName} series is ${time} minutes.`)

}
solve([
    'Game of Thrones' ,
    7,
    10 ,
    50
])