module.exports = {
  devServer: {
    proxy: {
      '^/.netlify': {
        target: 'http://localhost:9090',
        pathRewrite: { '^/.netlify/functions': '' }
      }
    }
  }
}
