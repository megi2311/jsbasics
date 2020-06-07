function solve(input) {
    let budget = Number(input.shift());
    let nightStay = Number(input.shift());
    let priceForNight = Number(input.shift());
    let percent = Number(input.shift())
    let num = 0
    let discount = 0
    let price = 0
    let budgetForSave = 0
    let budgetresult = 0
    let moneyLeft = 0
    let moneyNeeded = 0
    if (nightStay > 7) {
        num = priceForNight * 0.05
        discount = priceForNight - num

        price = nightStay * discount

        budgetForSave = budget * (percent / 100)
        budgetresult = budgetForSave + price


    } else {
        price = priceForNight * nightStay
        budgetForSave = budget * (percent / 100)
        budgetresult = budgetForSave + price


    }
    if (budgetresult > budget) {
        moneyNeeded = (budgetresult - budget).toFixed(2)
        console.log(`${moneyNeeded} leva needed.`)


    } else {
        moneyLeft = (budget - budgetresult).toFixed(2)
        console.log(`Ivanovi will be left with ${moneyLeft} leva after vacation.`)
    }

}
solve([500,
    7,
    66,
    15
])

