function solve(input) {
  let numberDays = Number(input.shift());
  let totalQuantityFood = Number(input.shift());
  let totalEatenFood = 0;
  let percentTotal = 0;
  let totalDogFood = 0;
  let totalCatFood = 0;
  let percentDog = 0;
  let percentCat = 0;
  let biscuits = 0;

  for (let i = 1; i <= numberDays; i++) {
    let dogEatenFood = Number(input.shift());
    let catEatenFood = Number(input.shift());
    if (i % 3 === 0) {
      biscuits += (dogEatenFood + catEatenFood) * 0.1;
    }
    totalEatenFood += dogEatenFood + catEatenFood;
    totalDogFood += dogEatenFood;
    totalCatFood += catEatenFood;
  }
  percentTotal = (totalEatenFood / totalQuantityFood) * 100;
  percentDog = (totalDogFood / totalEatenFood) * 100;
  percentCat = (totalCatFood / totalEatenFood) * 100;
  console.log(`Total eaten biscuits: ${Math.floor(biscuits)}gr.`);
  console.log(`${percentTotal.toFixed(2)}% of the food has been eaten.`);
  console.log(`${percentDog.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);
}
solve([3, 500, 100, 30, 110, 25, 120, 35]);
