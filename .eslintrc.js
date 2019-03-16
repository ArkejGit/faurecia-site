module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "indent": ["error", "tab"],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "vue/html-indent": "off",
    "vue/require-v-for-key": "off",
    "vue/require-default-prop": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off"
  }
}
