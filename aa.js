function solve(input) {
  let honeyAmount = Number(input.shift());
  let command = input.shift();
  let addedHoney = 0;
  while (command !== "Winter has come") {
    let name = command;
    if(addedHoney >= honeyAmount){
        break;
    }
    for (let i = 1; i <= 6; i++) {
      let honey = Number(input.shift());
      addedHoney += honey;
      if (i === 6) {
        if (addedHoney < 0) {
          console.log(`${name} was banished for gluttony`);
        }
      }
    }

    command = input.shift();
  }
  if (addedHoney >= honeyAmount) {
      let honeyLeft=Math.abs(addedHoney-honeyAmount)
    console.log(
      `Well done! Honey surplus ${(honeyLeft).toFixed(2)}.`
    );
  } else if (honeyAmount > addedHoney) {
      let honeyNeeded=Math.abs(honeyAmount-addedHoney)
    console.log(
      `Hard Winter! Honey needed ${(honeyNeeded).toFixed(2)}.`
    );
  }
}
solve([1000, "Maya", 50, 10.5, 19.5, 30, 100, 100, "Winter has come"]);
