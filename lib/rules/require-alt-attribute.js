// @ts-check

/** @type import('eslint').Rule.RuleModule */
module.exports = {
    meta: {
      docs: {
        description: 'Forbid IMG elements without explicit and valid attributes, such as width, height, src, alt',
        category: 'Best Practices',
        recommended: true,
        url: 'https://github.com/jsdev/eslint-img-checks/blob/master/docs/rules/require-alt-attributes.md',
      },
      schema: [],
    },
  
    create(context) {
      return {
        JSXOpeningElement: (node) => {  
          if (node.tagName !== 'IMG') return;
  
          if (node.alt === undefined){
            context.report({
              node,
              message: 'Missing an explicit `alt` prop for media element, if purely decorative use empty string `alt=""`',
            });
          }
        },
      };
    },
  };
  