const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import './src/assets/style/variables.scss';`
      }
    }
  }
})
