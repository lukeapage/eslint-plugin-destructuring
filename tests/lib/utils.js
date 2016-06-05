import defaults from 'lodash.defaults';

export function test(t) {
  return _.defaults(t, {
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 6,
    },
  });
}
