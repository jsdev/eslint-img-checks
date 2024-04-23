module.exports = {
  rules: {
    'require-size-attributes': require('./rules/require-size-attributes'),
    'require-webp-or-svg': require('@mizdra/eslint-plugin-layout-shift/lib/rules/require-webp-or-svg'),
    'require-alt-attribute': require('@mizdra/eslint-plugin-layout-shift/lib/rules/require-alt-attribute'),
  },
  configs: {
    recommended: {
      plugins: ['react'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'require-alt-attribute': 2,
        'require-size-attributes': 2,
        'require-webp-or-svg': 1,
      },
    },
    all: {
      plugins: ['react'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
};
