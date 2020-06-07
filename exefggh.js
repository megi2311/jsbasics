function solve(input) {
  let price = 30;
  let result = 0;
  let finalprice = 0;
  let dayReservation = Number(input.shift());
  let monthReservation = Number(input.shift());
  let dayStay = Number(input.shift());
  let monthStay = Number(input.shift());
  let dayLeft = Number(input.shift());
  let monthLeft = Number(input.shift());
  let earlier = monthStay - monthReservation;
  let nights = dayLeft - dayStay;

  if (monthStay > monthReservation) {
    price = 25;
    result = nights * price;
    discount = result * 0.2;
    finalprice = result - discount;
  } else if (monthStay === monthReservation) {
    if (earlier >= 10) {
      price = 25;
    } else if (earlier < 10) {
      price = 30;
      finalprice += nights * price;
    }
  }

  console.log(
    `Your stay from ${dayStay}/${monthStay} to ${dayLeft}/${monthLeft} will cost ${finalprice.toFixed(
      2
    )}`
  );
}
solve([20, 10, 5, 11, 10, 11]);
