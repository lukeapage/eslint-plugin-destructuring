# in-params

Destructuring within params can be messy, particularly if you have more than one parameter. This rule allows you to configure the maximum parameters allowed when one or more is destructuring.

## Rule Details

The following patterns are considered problems:

```js
/*eslint destructuring/in-params: ["error", { "max-params" : 1}]*/

function t1(a, {b}) {}
const t2 = (b, {a}) = a;

/*eslint destructuring/in-params: ["error", { "max-params" : 0}]*/

function t3({a}) {}
const t4 = ({a}) = a;

```

The following patterns are not considered warnings:

```js
/*eslint destructuring/in-params: ["error", { "max-params" : 1}]*/

function t1({a}) {}
function t2(a, b) {
  const {c} = a;
  const {d} = b;
}
const t3 = ({a}) = a;
```

## When Not To Use It

If you think destructuring in params is readable then you can disable this rule.
