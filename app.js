const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const del = document.getElementById("del");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const slash = document.getElementById("slash");

const input = document.querySelector(".input");
console.log("input:", input.value);

input.addEventListener("input", () => {
  console.log("input:", input.value);
});

const dot = document.getElementById("dot");

zero.addEventListener("click", () => {
  input.value += "0";
});
one.addEventListener("click", () => {
  input.value += "1";
});
two.addEventListener("click", () => {
  input.value += "2";
});
three.addEventListener("click", () => {
  input.value += "3";
});
four.addEventListener("click", () => {
  input.value += "4";
});
five.addEventListener("click", () => {
  input.value += "5";
});
six.addEventListener("click", () => {
  input.value += "6";
});
seven.addEventListener("click", () => {
  input.value += "7";
});
eight.addEventListener("click", () => {
  input.value += "8";
});
nine.addEventListener("click", () => {
  input.value += "9";
});

dot.addEventListener("click", () => {
  const dotNumber = input.value.split(/[+\-x/]/).pop();
  if (dotNumber === "") {
    input.value = "0.";
  } else if (!dotNumber.includes(".")) {
    input.value += ".";
  }
});
del.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
reset.addEventListener("click", () => {
  input.value = "";
});

plus.addEventListener("click", () => {
  if (input.value !== "" && input.value.slice(-1) !== "+") {
    input.value += "+";
  }
});
minus.addEventListener("click", () => {
  if (input.value !== "" && input.value.slice(-1) !== "-") {
    input.value += "-";
  }
});
multiply.addEventListener("click", () => {
  if (input.value !== "" && input.value.slice(-1) !== "x") {
    input.value += "x";
  }
});
slash.addEventListener("click", () => {
  if (input.value !== "" && input.value.slice(-1) !== "/") {
    input.value += "/";
  }
});
function calculate() {
  let calc;
  calc = input.value;
  calc = calc.replace(/x/g, "*");
  let result = eval(calc);
  input.value = result;
}

equal.addEventListener("click", calculate);

const keyMap = {
  0: zero,
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
  7: seven,
  8: eight,
  9: nine,
  ".": dot,
  "+": plus,
  "-": minus,
  "*": multiply,
  x: multiply,
  X: multiply,
  "/": slash,
  Enter: equal,
  "=": equal,
  Backspace: del,
  Delete: reset,
  Escape: reset,
};
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  const btn = keyMap[e.key];
  if (!btn) return;

  btn.click();
});
