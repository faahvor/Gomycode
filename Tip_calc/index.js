const bill = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyFive = document.getElementById("twenty-five");
const fifty = document.getElementById("fifty");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("tipPerPerson");
const reset = document.getElementById("reset");

function Tip_calculator(value) {
  const percent = value / 100;
  const tip_amount = (Number(bill.value) * percent) / Number(people.value);

  const perPerson = Number(bill.value) / Number(people.value) + tip_amount;

  tipAmount.textContent = tip_amount;
  total.textContent = perPerson;
}
five.addEventListener("click", function () {
  Tip_calculator(5);
});
ten.addEventListener("click", function () {
  Tip_calculator(10);
});
fifteen.addEventListener("click", function () {
  Tip_calculator(15);
  console.log(Tip_calculator(15));
});
twentyFive.addEventListener("click", function () {
  Tip_calculator(25);
});
fifty.addEventListener("click", function () {
  Tip_calculator(50);
});

// reset.addEventListener("click", function () {
//   tipAmount.textContent = 0;
//   total.textContent = 0
//   console.log('hi');
// });
