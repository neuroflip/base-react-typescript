// eslint-disable-next-line @typescript-eslint/no-var-requires
const htmlLoader = require('html-loader')

module.exports = {
  process (src, filename, config, options) {
    return htmlLoader(src)
  }
}
