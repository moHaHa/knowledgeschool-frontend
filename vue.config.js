module.exports = {
  transpileDependencies: ['vuetify'],

  devServer: {
    host: 'localhost',
    proxy: 'http://webteam-001-site1.ftempurl.com/api'
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
