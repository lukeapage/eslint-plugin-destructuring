// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import rule from '../../../src/rules/no-rename';
import { test } from '../utils';

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const errors = [{ message: 'Do not use destructuring rename for valid identifiers.' }];
ruleTester.run('no-rename', rule, {
  valid: [
    test({ code: 'var { a } = b;' }),
    test({ code: 'var { a : { c } } = b;' }),
    test({ code: 'var { a : [ c ] } = b;' }),
    test({ code: 'var a = { b };' }),
    test({ code: 'var a = { b : b };' }),
    test({ code: 'var a = { b : c };' }),
    test({ code: 'var a = { b : { c : b } };' }),
    test({ code: 'var { "data-prop" : a } = b;' }),
  ],
  invalid: [test({
    code: 'var { a : c } = b;',
    errors,
  }),
    test({
      code: 'var { a : a } = b;',
      errors,
    }),
    test({
      code: 'var { a : c } = b;',
      errors,
    }),
    test({
      code: 'var { a : { c : d } } = b;',
      errors,
    }),
    test({
      code: 'var { "data-prop" : a, a : c } = b;',
      errors,
    })],
});
