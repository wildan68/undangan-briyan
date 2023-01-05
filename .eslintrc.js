module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: [
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // '@nuxtjs/eslint-config-typescript',
    // 'plugin:vue/essential'
  ],
  plugins: [
    'vue',
    // '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    // indent 2
    indent: ['error', 2],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off'
  }
}
