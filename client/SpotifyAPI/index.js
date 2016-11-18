const spotiOpen = require('./open.spotify.com')
const spotiLocal = require('./spotilocal.com')

class SpotifyAPI {
  constructor () {
    spotiOpen.requestToken().then((tokenData) => {
      console.log(tokenData)
      spotiLocal.requestToken().then((t) => {
        console.log(t)
      }).catch( (e) => {
        console.log(e)
      })
    })
  }

  setPlayState (isPlaying) {

  }
}

module.exports = SpotifyAPI
