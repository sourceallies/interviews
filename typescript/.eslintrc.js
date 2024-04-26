module.exports = {
  extends: ['@openphone/eslint-config-node'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
}
