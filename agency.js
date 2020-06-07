function solve(input) {
    let cityName = input.shift();
    let typePackage = input.shift();
    let vipprice = input.shift();
    let dayStay = Number(input.shift());
    let price = 0;
  
    if (cityName === "Bansko") {
      if (typePackage === "withEquipment") {
        if (vipprice === "yes") {
          price = 100 * 0.9;
        } else {
          price = 100;
        }
        if (dayStay > 7) {
          price = dayStay * price;
          price -= price;
        } else {
          price = dayStay * price;
        }
      } else if (typePackage === "noEquipment") {
        if (vipprice === "yes") {
          price = 80 * 0.95;
        } else {
          price = 80;
        }
        if (dayStay > 7) {
          price = dayStay * price;
          price -= price;
        } else {
          price = dayStay * price;
        }
      }
    }
  
    if (cityName === "Borovets") {
      if (typePackage === "withEquipment") {
        if (vipprice === "yes") {
          price = 100 * 0.9;
        } else {
          price = 100;
        }
        if (dayStay > 7) {
          price = dayStay * price;
          price -= price;
        } else {
          price = dayStay * price;
        }
      } else if (typePackage === "noEquipment") {
        if (vipprice === "yes") {
          price = 80 * 0.95;
        } else {
          price = 80;
        }
        if (dayStay > 7) {
          price = dayStay * price;
          price -= 80;
        } else {
          price = dayStay * price;
        }
      }
    }
    if (cityName === "Varna") {
      if (typePackage === "withBreakfast") {
        if (vipprice === "yes") {
          price = 130 * 0.88;
        } else {
          price = 130;
        }
        if (dayStay > 7) {
          price = dayStay * price;
          price -= 130;
        } else {
          price = dayStay * price;
        }
      } else if (typePackage === "noBreakfast") {
        if (vipprice === "yes") {
          price = 100 * 0.93;
        } else {
          price = 100;
        }
        if (dayStay > 7) {
          price = dayStay * price;
          price -= 100;
        } else {
          price = dayStay * price;
        }
      }
    }
  
    if (cityName === "Burgas") {
      if (typePackage === "withBreakfast") {
        if (vipprice === "yes") {
          price = 130 * 0.88;
        } else {
          price = 130;
        }
        if (dayStay > 7) {
          price = dayStay * price;
          price -= 130;
        } else {
          price = dayStay * price;
        }
      } else if (typePackage === "noBreakfast") {
        if (vipprice === "yes") {
          price = 100 * 0.93;
        } else {
          price = 100;
        }
        if (dayStay > 7) {
          price = dayStay * price;
          price -= 100;
        } else {
          price = dayStay * price;
        }
      }
    }
  
    if (dayStay < 1) {
      console.log("Days must be positive number!");
    } else if (price === 0) {
      console.log("Invalid input!");
    } else {
      console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
  }
  solve(["Borovets", "noEquipment", "yes", 6]);

