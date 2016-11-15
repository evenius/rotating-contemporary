
const { GET, POST, DELETE, PATCH } = require('../Api')

const FETCHED_TOP_SONGS = 'FETCHED_TOP_SONGS'
const UNABRIDGE_TOP_SONGS = 'UNABRIDGE_TOP_SONGS'

const spotifyArtist = {
  steveReich: '1aVONoJ0EM97BB26etc1vo'
}

module.exports = {
  FETCHED_TOP_SONGS,
  UNABRIDGE_TOP_SONGS,
  // This beatiful syntax
  fetchTopSongs: (artistName) => (dispatch) => {
    GET(`https://api.spotify.com/v1/artists/${spotifyArtist[artistName]}/top-tracks`, {country: 'GB'}).then((songlist) => {
      dispatch({type: FETCHED_TOP_SONGS, artistName, songlist})
    })
  },
  unabridgeTopSongs: (artistName) => ({
    type: UNABRIDGE_TOP_SONGS,
    artistName
  })
}
