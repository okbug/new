// const babel = require('@babel/core');
// const path = require('path');

// function loader(source) {
//   let options = this.getOptions();
//   const { code } = babel.transformSync(source, options);
//   console.log(code);
//   return code;
// }
// module.exports = loader;

const classToFunction = require('../ast/class2function');

function loader(source) {
    const { code } = classToFunction(source)
    return code;
}

module.exports = loader;
