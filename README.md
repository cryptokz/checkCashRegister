# checkCashRegister
Разработайте функцию кассового ящика checkCashRegister(), которая принимает цену в качестве первого аргумента (price), платеж в качестве второго аргумента (cash) и кассовый ящик (cid) в качестве третьего аргумента.

cid - это двумерный массив с перечнем доступных монет и купюр (cash-in-drawer, прямой перевод - деньги в ящике).

Функция checkCashRegister() всегда должна возвращать объект с ключом status и ключом change, где хранится сдача.

Возвратите {status: "НЕХВАТАЕТ_СРЕДСТВ", change: []}, если денег на кассе меньше ожидаемой сдачи или если нельзя вернуть точную сдачу.
Возвратите {status: "ЗАКРЫТО", change: [...]} со значением cid в качестве значения ключа change, если все деньги в кассе точностью равняются сдаче.
Верните {status: "ДОСТУПНО", change: [...]}, со сдачей в монетах и купюрах в качестве значения ключа change отсортированным по убыванию.
Ниже приведен пример массива денежных средств в ящике:

[
  ["1", 151],
  ["5", 365],
  ["10", 670],
  ["50", 2150],
  ["100", 7100],
  ["500", 5500],
  ["1000", 23000],
  ["2000", 64000],
  ["5000", 115000]
]

function checkCashRegister(price, cash, cid) {
  // ...ваш код...
}

// Пример (есть сдача):
checkCashRegister(1905, 2000, [ ["1", 101], ["5", 205], ["10", 310],
  ["50", 450], ["100", 900], ["500", 5500], ["1000", 2000],
  ["2000", 6000], ["5000", 10000] ]); 
/* Ответ:
{ 
  status: "ДОСТУПЕН", 
  change: [ ["5", 5], ["10", 40], ["50", 50] ]
}
*/

// Пример (нету сдачи):
checkCashRegister(1905, 2000, [ ["1", 7], ["5", 5], ["10", 30],
  ["50", 450], ["100", 900], ["500", 5500], ["1000", 2000],
  ["2000", 6000], ["5000", 10000] ]); 
/* Ответ:
{ 
  status: "НЕХВАТАЕТ_СРЕДСТВ", 
  change: []
}
*/

// Пример (есть сдача, но потом касса будет пуста):
checkCashRegister(18000, 20000, [ ["1", 20], ["5", 50], ["10", 80],
  ["50", 150], ["100", 200], ["500", 500], ["1000", 1000],
  ["2000", 0], ["5000", 0] ]); 
/* Ответ:
{ 
  status: "ЗАКРЫТО", 
  change: [ ["1", 20], ["5", 50], ["10", 80], ["50", 150], 
            ["100", 200], ["500", 500], ["1000", 1000],
            ["2000", 0], ["5000", 0] ]
}
*/
