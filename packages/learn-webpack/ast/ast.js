let esprima = require("esprima");

let estraverse = require("estraverse");

let escodegen = require("escodegen");

let code = `() => {}`;

let res = esprima.parse(code);

console.log(res)
