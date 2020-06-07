function solve(input) {
  let budget = Number(input.shift());
  let command = input.shift();
  let currentBudget=budget

  while (command !== "ACTION") {
    let nameActor = command;
    if (nameActor.length > 15) {
      budget -= (20 / 100) * budget;
    } else {
      let money = Number(input.shift());
      budget -= money;
    }
    if (budget < 0) {
      break;
    }
    command = input.shift();

    }
        if(budget<0){
            
            console.log(`We need ${Math.abs (budget).toFixed(2)} leva for our actors.`)
        }else{
           console.log(`We are left with ${budget.toFixed(2)} leva.`) 
        }
        
    
    
    }

 
    
  


solve([
    170000,
    'Ben Affleck',
    40000.50,
    'Zahari Baharov',
    80000,
    'Tom Hanks',
    2000.99,
    'ACTION'
    
]);
