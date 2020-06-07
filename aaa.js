function solve(arg1,arg2) {
    let numberBees=Number(arg1)
    let numberFlowers=Number(arg2)
    let honeyPerFlower=0.21
    let honeyComb=100
    let totalHoney=numberBees * numberFlowers * honeyPerFlower
    let totalHoneyComb= totalHoney / honeyComb 
    let honeyLeft = (totalHoneyComb % 1) * honeyComb
console.log(`${Math .floor(totalHoneyComb)} honeycombs filled.`)
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`)

}
solve(11,120
    );
