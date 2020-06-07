function solve(input) {
  let rentForRoom=Number(input.shift())
  let statuette= rentForRoom * 0.70
  let catering= statuette * 0.85
  let music= catering / 2
let totalPaying=rentForRoom + statuette + catering + music
console.log(totalPaying.toFixed(2))
}

solve([
3500
  ]);
