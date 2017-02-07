// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import rule from '../../../src/rules/in-params';
import { test } from '../utils';

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const errors = [{ message:
  'Do not use destructuring in params when there are more than 1 params.' }];
ruleTester.run('in-params', rule, {
  valid: [
    test({ code: 'var { a } = b;' }),
    test({ code: 'var { a : { c } } = b;' }),
    test({ code: 'var { a : [ c ] } = b;' }),

    test({ code: 'function t({ a, b, c }) {}' }),
    test({ code: 'var a = ({a, b, c : { d : { e } }}) => a;' }),

    test({ code: 'function t(a, b) {}' }),
    test({ code: 'function t(a, b = (() => { const {a} = b; })) {}' }),
  ],
  invalid: [test({
    code: 'function t({ a }, b) {}',
    errors,
  }),
    test({
      code: 'var a = ({a}, b) => a;',
      errors,
    }),
    test({
      code: 'function t(b, { a }) {}',
      errors,
    }),
    test({
      code: 'function t(b, { a, d, c }) {}',
      errors,
    })],
});
