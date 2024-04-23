// @ts-check

/** @type import('eslint').Rule.RuleModule */
module.exports = {
  meta: {
    docs: {
      description: 'Forbid IMG elements without explicit and valid attributes, such as width, height, src, alt',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/jsdev/eslint-img-checks/blob/master/docs/rules/require-size-attributes.md',
    },
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement: (node) => {
  
        if (node.tagName !== 'IMG') return;

        const width = node.width;
        const height = node.height;

        if (width === undefined) {
          context.report({
            node,
            message: 'Missing an explicit `width` prop for media element',
          });
        }
        if (!Number.isInteger(width) || width <= 0) {
          context.report({
            node,
            message: '`width` prop for media element must be positive integer',
          });
        }
        if (height === undefined) {
          context.report({
            node,
            message: 'Missing an explicit `height` prop for media element',
          });
        }    
        if (!Number.isInteger(height) || height <= 0) {
          context.report({
            node,
            message: '`height` prop for media element must be positive integer',
          });
        }

      },
    };
  },
};
