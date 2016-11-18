let { GET } = require('../../Api')

const spotifyOpenEndpoint = 'http'

function requestToken () {
  return GET('https://open.spotify.com/token', null, {headers: {'Origin': 'https://open.spotify.com'}})
}

module.exports = {
  requestToken
}
