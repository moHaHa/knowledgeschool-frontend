module.exports = {
  transpileDependencies: ['vuetify'],

  devServer: {
    host: 'localhost',
    proxy: 'http://knowledgeschool-001-site1.dtempurl.com'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  }
}
