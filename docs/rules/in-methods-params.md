# in-methods-params

Destructuring within params of a method can be messy, unreadable and moreover you loose an opportunity of giving a name to the param. This rule allows you to ban destructuring of params in method declarations.

## Rule Details

The following patterns are considered problems:

```js
/*eslint destructuring/in-methods-params: "error"*/

class Test {
  constructor({b}) {}
  t1({b}) {}
  static t2({b}) {}
}

```

The following patterns are not considered warnings:

```js
/*eslint destructuring/in-methods-params: "error"*/

class Test {
  constructor(b) {}
  t1(b) {}
  static t2(b) {}
}
```

## When Not To Use It

If you think destructuring in methods params is readable then you can disable this rule.
