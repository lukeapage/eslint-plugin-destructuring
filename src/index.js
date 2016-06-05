import fs from 'fs';
import path from 'path';
import _ from 'lodash';
const rules = fs.readdirSync(path.resolve(__dirname, 'rules')).map(f => f.replace(/\.js$/, ''));

module.exports = {
  // eslint-disable-next-line global-require
  rules: _.zipObject(rules, rules.map(rule => require(`./rules/${rule}`))),
  configs: {
    recommended: {
      rules: {
        'destructuring/no-rename': 'error',
        'destructuring/in-params': 'error',
      },
    },
  },
};
