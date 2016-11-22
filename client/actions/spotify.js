const { GET, POST, DELETE, PATCH } = require('../Api')

const FETCHED_TOP_SONGS = 'FETCHED_TOP_SONGS'
const UNABRIDGE_TOP_SONGS = 'UNABRIDGE_TOP_SONGS'


// const SpotifyAPI = require('../SpotifyAPI')

// const spotAPI = new SpotifyAPI()

module.exports = {
  FETCHED_TOP_SONGS,
  UNABRIDGE_TOP_SONGS,
  // This beatiful syntax
  initPlayer: () => (dispatch) => {

  },
  fetchTopSongs: (artist) => (dispatch) => {
    GET(`https://api.spotify.com/v1/artists/${artist.get('uri')}/top-tracks`, {country: 'GB'}).then((songlist) => {
      dispatch({type: FETCHED_TOP_SONGS, artistName: artist.get('name'), songlist})
    })
  },
  unabridgeTopSongs: (artistName) => ({
    type: UNABRIDGE_TOP_SONGS,
    artistName
  })
}
