function solve(input) {
    let name = input.shift();
    let episodeTime = Number(input.shift());
    let breakTime = Number(input.shift())

    let lunchtime = (breakTime * 1 / 8)
    let timeforbreak = (breakTime * 1 / 4)
    let timeLeft = (breakTime - timeforbreak- lunchtime)
    let timeNeeded=0
    let timeLefted=0
    if (timeLeft >=episodeTime) {
        let timeLefted=timeLeft-episodeTime
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - episodeTime)} minutes free time.`)
    } else {
        timeNeeded =(episodeTime-timeLeft)
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}
solve([
    'Teen Wolf',
    48,
    60
])