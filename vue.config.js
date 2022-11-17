const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: process.env.VUE_APP_API_URL,
    // proxy: 'http://restapi.adequateshop.com/api/',
  },
})