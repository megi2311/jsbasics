function solve(input) {
  let numberEggsFirstPlayer = Number(input.shift());
  let numberEggsSecondPlayer = Number(input.shift());
  let command = input.shift();

  while (command !== "End of battle" ){
    let player = command;
    if (player === "one") {
      numberEggsSecondPlayer--;
    } else if (player === "two") {
      numberEggsFirstPlayer--;
    }
    if(numberEggsFirstPlayer===0){
        break;
    }else if (numberEggsSecondPlayer===0){
        break;
    }
    
    command = input.shift();
  }
  if (numberEggsFirstPlayer === 0) {
    console.log(
      `Player one is out of eggs. Player two has ${numberEggsSecondPlayer} eggs left.`
    )
  } else if (numberEggsSecondPlayer === 0) {
    console.log(`Player two is out of eggs. Player one has ${numberEggsFirstPlayer} eggs left.`)
  } else {
    console.log(`Player one has ${numberEggsFirstPlayer} eggs left.`);
    console.log(`Player two has ${numberEggsSecondPlayer} eggs left.`);
  }
}
solve([
    2,
    6,
    'one',
    'two',
    'two'
    

]);
