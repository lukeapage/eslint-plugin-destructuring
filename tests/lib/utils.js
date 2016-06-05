import _ from 'lodash';

export function test(t) {
  return _.defaults(t, {
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 6,
    },
  });
}
