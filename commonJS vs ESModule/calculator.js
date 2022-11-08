// CommonJS module vs ES Module

// This type of export using "modules.export "is called commonJS module. It is supported by Node but not by Browsers

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
