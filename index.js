function checkCashRegister(price, cash, cid) {
  let moneyChange = cash - price;
  let arrChange = [];
  let objChange = { status: "ДОСТУПЕН", change: arrChange };
  let arr = [];
  let k = 0;
  let sumChange = 0;
  let money = [1, 5, 10, 50, 100, 500, 1000, 2000, 5000];

  //cid and status: "ЗАКРЫТО"
  for (let j = 0; j < cid.length; j++) {
    sumChange += cid[j][1];
  }
  if (cash - price == sumChange) {
    return (objChange = { status: "CLOSED", change: cid });
  }
  //status: "ДОСТУПЕН"
  for (let i = money.length - 1; i >= 0; i--) {
    if (cid[i][1] > 0 && money[i] <= moneyChange) {
      moneyChange = (moneyChange - money[i]).toFixed(2);
      k++;
      arr = [cid[i][0], money[i] * k];
      cid[i][1] -= money[i];
      if (money[i] > moneyChange || cid[i][1] == 0) {
        arrChange.push(arr);
      }
      i++;
    } else {
      k = 0;
    }
  }
  //status: "НЕХВАТАЕТ_СРЕДСТВ"
  if (moneyChange > 0) {
    objChange = { status: "НЕХВАТАЕТ_СРЕДСТВ", change: [] };
  }

  return objChange;
}

console.log(checkCashRegister(1905, 2000, [
  ["1", 101],
  ["5", 205],
  ["10", 310],
  ["50", 450],
  ["100", 900],
  ["500", 5500],
  ["1000", 2000],
  ["2000", 6000],
  ["5000", 10000],
]));

console.log(checkCashRegister(1905, 2000, [ ["1", 7], ["5", 5], ["10", 30],
  ["50", 450], ["100", 900], ["500", 5500], ["1000", 2000],
  ["2000", 6000], ["5000", 10000] ]));



console.log(checkCashRegister(18000, 20000, [ ["1", 20], ["5", 50], ["10", 80],
  ["50", 150], ["100", 200], ["500", 500], ["1000", 1000],
  ["2000", 0], ["5000", 0] ]));