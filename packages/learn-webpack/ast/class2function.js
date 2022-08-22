const core = require("@babel/core");
// const types = require('babel-types');
const { types } = core;
const plugin2 = require("@babel/plugin-transform-classes");

const transformClasses = {
  visitor: {
    ArrowFunctionExpression(path) {
      console.log(path, 'has a arrow function');
    },
    ClassDeclaration(path) {
      const { node } = path;
      const { id } = node;
      const classMethods = node.body.body;
      const newNodes = [];
      classMethods.forEach(classMethod => {
        if (classMethod.kind === 'constructor') {
          const constructor = types.functionDeclaration(id, classMethod.params, classMethod.body);
          newNodes.push(constructor);
        } else {
          const assignmentExpression = types.assignmentExpression(
            '=',
            types.memberExpression(
              types.memberExpression(
                id, types.identifier('prototype')
              ),
              classMethod.key
            ),
            types.functionExpression(
              classMethod.key,
              classMethod.params,
              classMethod.body
            )
          );
          newNodes.push(assignmentExpression);
        }

      });
      if (newNodes.length === 1) {
        path.replaceWith(newNodes[0]);
      } else {
        path.replaceWithMultiple(newNodes);
      }
    }
  }
}

module.exports = function(source) {
  return core.transform(source, {
    plugins: [transformClasses],
  });
}
