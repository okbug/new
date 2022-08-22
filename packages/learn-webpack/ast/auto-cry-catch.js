const core = require('@babel/core');
// const { types, template } = core;
const types = require('babel-types')
const template = require('@babel/template')
let code = `
import handleControllerCatchError from './1.js'
function a(x, y) {
    console.log(x, y);
    return x + y
}
`




const error = 'error'

let customeCode = `
ctx.sendError('something', false)
handleControllerCatchError(ctx, ${error}, 'something')
`

function parseCodeStringToStatement(code) {
  let state = code
    .split("\n")
    .filter((i) => i !== "")
    .map((s) => template.statement(s)());
  return state;
}
let parseResult = parseCodeStringToStatement(customeCode);

const functionName = 'handleControllerCatchError'
console.log(parseResult, 'parseResult');
parseResult.forEach(path => {
  if (path.type === 'ExpressionStatement') {
    if (path.expression.callee.name === functionName) {
      console.log(1)
    }
  }
})

let plugin = {
  visitor: {
    VariableDeclaration(path) {
      if (path.node.declarations.id.type === 'ObjectPattern') {
        path.node.declarations.id.properties.forEach(p => {
          if (p.key.name === FunctionName) {
            console.log(`导入了 ${functionName}`)
          }
        })
      }
      if (path.node.declarations.id.name === functionName) {
        console.log(`导入了 ${functionName}`)
      }
    },
    ImportDeclaration(path) {
      path.node.specifiers.forEach(item => {
        if (item.local.name === functionName) {
          console.log(`导入了 ${functionName}`)
        }
      })
    },
    FunctionDeclaration(nodePath) {
      let { node } = nodePath;
      let { id } = node.id;
      let blockStatement = node.body;
      if (blockStatement.body && types.isTryStatement(blockStatement.body[0])) return;

      let catchClause = types.catchClause(types.identifier(error), types.blockStatement(parseResult));

      let tryStatement = types.tryStatement(blockStatement, catchClause);
      let func = types.functionExpression(id, node.params, types.blockStatement([tryStatement]), node.generator, node.async);
      nodePath.replaceWith(func)
    }
  }
}


let res = core.transform(code, {
  plugins: [plugin]
});

console.log(res.code)

function parse(code, errorName, errorBody) {
  const parseResult = parseCodeStringToStatement(errorBody)
  let plugin = {
    visitor: {
      FunctionDeclaration(nodePath) {
        let { node } = nodePath;
        let { id } = node.id;
        let blockStatement = node.body;
        if (blockStatement.body && types.isTryStatement(blockStatement.body[0])) return;

        let catchClause = types.catchClause(types.identifier(errorName), types.blockStatement(parseResult));

        let tryStatement = types.tryStatement(blockStatement, catchClause);
        let func = types.functionExpression(id, node.params, types.blockStatement([tryStatement]), node.generator, node.async);
        nodePath.replaceWith(func)
      }
    }
  }
  return core.transform(code, {
    plugins: [plugin]
  }).code;
}

// console.log(parse(`
// function add(x, y) {
//     console.log(x, y);
//     return x + y;
// }
// `, 'error', `console.log(error)`))

// let rt = JSON.stringify(core.parse(`let a = 1`).program, null, 2)
// console.log(rt);
module.exports = parse;
