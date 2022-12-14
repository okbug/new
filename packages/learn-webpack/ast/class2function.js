const core = require("@babel/core");
// const types = require('babel-types');
const { types } = core;
const plugin2 = require("@babel/plugin-transform-classes");
const template = require("@babel/template");
const error = 'err'
function getBody(body) {
  // console.log(body);

  return body;
}
function parseCodeStringToStatement(str) {
  let arr = str;
  // console.log(arr)
  return arr;
}
const errName = "err";
function getCatchStatement(name) {
  let customerCode = `
  ctx.sendError('${name}', false)
  handleControllerCatchError(ctx, ${errName}, '${name}')
`;
  let state = customerCode
    .split("\n")
    .filter((i) => i !== "")
    .map((s) => template.statement(s)());
  return state;
}

const transformClasses = {
  visitor: {
    ArrowFunctionExpression(path) {
      // console.log("has a arrow function");
    },
    ClassDeclaration(path) {
      const { node } = path;
      const { id } = node;
      const classMethods = node.body.body;
      const newNodes = [];
      classMethods.forEach((classMethod) => {
        if (types.isTryStatement(classMethod.body.body[0])) return
        let p = null
        if (classMethod.kind === "constructor") {
          p = types.functionDeclaration(
            id,
            classMethod.params,
            classMethod.body
          );
        } else {
          p = types.assignmentExpression(
            "=",
            types.memberExpression(
              types.memberExpression(id, types.identifier("prototype")),
              classMethod.key
            ),
            types.functionExpression(
              classMethod.key,
              classMethod.params,
              getBody(classMethod.body)
            )
          );
        }
        // if (classMethod.leadingComments) {
        //   classMethod.leadingComments.forEach((comment) => {
        //     if (comment.value.trim().startsWith("@need-try")) {
        //       const _comment = comment.value.trim();
        //       const tryEventName = _comment.split(" ")[1] || "test";
        //       let catchMessage = getCatchStatement(tryEventName);
        //       let catchClause = types.catchClause(types.identifier(error), types.blockStatement(catchMessage));
        //       const body = p.right.body;
        //       if (types.isTryStatement(p.right.body.body)) return
        //       p.right.body.body = types.tryStatement(body, catchClause)
        //     }
        //   });
        // }
        newNodes.push(p);
      });
      if (newNodes.length === 1) {
        path.replaceWith(newNodes[0]);
      } else {
        path.replaceWithMultiple(newNodes);
      }
    },
  },
};

module.exports = function (source) {
  return core.transform(source, {
    plugins: [transformClasses],
  });
};
