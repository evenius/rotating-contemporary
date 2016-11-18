const spotify = require('./spotify')
const view = require('./view')

module.exports = {
  ...spotify,
  ...view
}
