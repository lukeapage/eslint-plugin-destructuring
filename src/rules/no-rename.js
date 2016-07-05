//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {},
  },

  create: function noRename(context) {
    return {
      Property(node) {
        if (node.parent.type === 'ObjectPattern' &&
          node.shorthand === false &&
          node.value &&
          node.value.type === 'Identifier') {
          context.report(node, 'Do not use destructuring rename.');
        }
      },
    };
  },
};
