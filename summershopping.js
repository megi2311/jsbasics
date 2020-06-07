function solve(input) {
    let budget = Number(input.shift());
    let towel = Number(input.shift());
    let discount = Number(input.shift())
    let umbrella = 2 / 3 * towel
    let shoes = 0.75 * umbrella
    let bag = 1 / 3 * (towel + shoes)
    let result = towel + umbrella + shoes + bag
    let resultation = result * (discount / 100)
    let promotion = result-resultation
    if (budget >= promotion) {
        let moneyLeft = budget-promotion
        console.log(`Annie's sum is ${promotion.toFixed(2)} lv. She has ${(budget-promotion ).toFixed(2)} lv. left.`)
    } else {
        let moneyNeeded = promotion - budget
        console.log(`Annie's sum is ${promotion.toFixed(2)} lv. She needs ${(promotion-budget).toFixed(2)} lv. more.`)
    }
}
solve([
    30,
    17,
    3
])

