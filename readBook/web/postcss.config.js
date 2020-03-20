module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 8']
      },
      'postcss-pxtorem': {
        rootValue: 37.5,      // 苹果6为原稿 如果是苹果5就32
        propList: ['*']
      }
    }
}