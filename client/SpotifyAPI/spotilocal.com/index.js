let { GET } = require('../../Api')

function requestToken (externalToken) {
  return GET('https://asudasd.spotilocal.com:4370/simplecsrf/token.json?cors=').then((token) => {
    console.log(token)
  })
}

module.exports = {
  requestToken
}
