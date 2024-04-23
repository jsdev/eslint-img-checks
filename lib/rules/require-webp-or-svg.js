// @ts-check

/** @type import('eslint').Rule.RuleModule */
module.exports = {
    meta: {
      docs: {
        description: 'Forbid IMG elements without explicit and valid attributes, such as width, height, src, alt',
        category: 'Best Practices',
        recommended: true,
        url: 'https://github.com/jsdev/eslint-img-checks/blob/master/docs/rules/require-webp-or-svg.md',
      },
      schema: [],
    },
  
    create(context) {
      return {
        JSXOpeningElement: (node) => {  
          if (node.tagName !== 'IMG') return;
  
          if (['', undefined].includes(node.src)) {
            context.report({
              node,
              message: '`src` prop for media element must be non-empty string',
            });
          }
          
          if (![node.src].includes('.svg') && ![node.src].includes('.webp')) {
            context.report({
              node,
              message: 'IMG element should be either .svg or .webp',
            });
          }
        },
      };
    },
  };
  