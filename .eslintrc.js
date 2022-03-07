module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    // 自定义你的规则
    // 允许成员方法无修饰符
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // 允许空接口
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
