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

// Module using this type of export("export {} ) "is called ESModule It is supported by Node and by Browsers.
//  ESModule is the latest ECMASCTIPT Syntax. Browsers are also adopting to this system. Browsers can now run modules without a build tool. So, to write javascript modules you dont need build tools like webpack, rollup

export default { add, subtract, multiply, divide };
