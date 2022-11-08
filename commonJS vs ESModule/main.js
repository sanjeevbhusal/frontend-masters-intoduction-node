// Module using this type of import("require") is called commonJS module. It is supported by Node but not by Browsers
const calculator = require("./calculator");

console.log(calculator.add(2, 3));
