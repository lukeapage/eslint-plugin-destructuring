//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  create: function inMethodsParams(context) {
    return {
      ObjectPattern(node) {
        if (node.parent && node.parent.parent &&
          node.parent.parent.type === 'MethodDefinition') {
          context.report(node, 'Do not use destructuring in method params.');
        }
      },
    };
  },
};
