"use strict";

/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    builtin: true,
    es6: true,
    jasmine: true,
    mocha: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  globals: {
    $: true,
    _: true,
    andThen: true,
    asyncRender: true,
    Blob: true,
    bootbox: true,
    click: true,
    waitUntil: true,
    getSettledState: true,
    count: true,
    currentPath: true,
    currentRouteName: true,
    currentURL: true,
    define: true,
    Discourse: true,
    Ember: true,
    exists: true,
    File: true,
    fillIn: true,
    find: true,
    Handlebars: true,
    hasModule: true,
    I18n: true,
    invisible: true,
    jQuery: true,
    keyboardHelper: true,
    keyEvent: true,
    moduleFor: true,
    moduleForComponent: true,
    moment: true,
    Pretender: true,
    QUnit: true,
    require: true,
    requirejs: true,
    sandbox: true,
    sinon: true,
    test: true,
    triggerEvent: true,
    visible: true,
    visit: true,
    pauseTest: true
  },
  rules: {
    "block-scoped-var": 2,
    "dot-notation": 0,
    eqeqeq: [2, "allow-null"],
    "guard-for-in": 2,
    "no-alert": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-cond-assign": 0,
    "no-console": 2,
    "no-debugger": 2,
    "no-empty": 0,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-parens": 0,
    "no-inner-declarations": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-loop-func": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-str": 2,
    "no-new": 2,
    "no-plusplus": 0,
    "no-proto": 2,
    "no-restricted-globals": [2, "Promise"],
    "no-script-url": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-this-before-super": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-unused-vars": 2,
    "no-with": 2,
    radix: 2,
    semi: 2,
    strict: 0,
    "valid-typeof": 2,
    "wrap-iife": [2, "inside"]
  },
  parser: "babel-eslint"
};
