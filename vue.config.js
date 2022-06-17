module.exports = {
  transpileDependencies: ['vuetify'],

  devServer: {
    // host: 'localhost',
    proxy: 'http://knowledgeschool-001-site1.dtempurl.com'
  },

  pluginOptions: {
    i18n: {
      
    }
  }
}
