const log = console.log;

// TASK 1
function add7(number) {
  return number + 7;
}

// TASK 2
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

// TASK 3
function capitalize(string) {
  let firstSlice = string.slice(0,1),
      secondSlice = string.slice(1);
  let capSlice = firstSlice.toUpperCase(),
      lowSlice = secondSlice.toLowerCase();
  return log(capSlice + lowSlice)
}

// TASK 4
function lastLetter(string) {
  return string.substr(-1,1);
}