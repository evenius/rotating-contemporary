const {
  FETCHED_TOP_SONGS,
  UNABRIDGE_TOP_SONGS,
  CHOSE_ARTIST
} = require('../actions')
const { Map, fromJS } = require('immutable')

const topSongsReducer = (state, action) => {
  switch (action.type) {
    case FETCHED_TOP_SONGS:
      let topSongs = {
        isAbridged: true,
        tracks: action.songlist.tracks
      }
      return state.set(action.artistName, fromJS(topSongs))
    case UNABRIDGE_TOP_SONGS:
      return state.setIn([action.artistName, 'isAbridged'], false)
  }
  return state || Map()
}

module.exports = topSongsReducer
