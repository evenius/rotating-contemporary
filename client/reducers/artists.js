const { fromJS } = require('immutable')
const artistReducer = (state, action) => {

const { SHOW_INTEREST_IN_ARTIST, SHOW_DISINTEREST_IN_ARTIST } = require('../actions/view')
const { CHOSE_ARTIST } = require('../actions/view')
  switch (action.type) {
    case SHOW_INTEREST_IN_ARTIST:
      return state.set('_interestingArtist', action.artistName)
    case SHOW_DISINTEREST_IN_ARTIST:
      return state.delete('_interestingArtist')
    case CHOSE_ARTIST:
      return state.set('_chosenArtist', action.artistName)
    default:

  }

  return state || fromJS({
    artists: [
      {name: 'johnAdams', title: 'John Adams', uri: '1aVONoJ0EM97BB26etc1vo'},
      {name: 'ericWhitacre', title: 'Eric Whitacre', uri: '5TWpCLIhvGlbJmLK1zNpiL'},
      {name: 'steveReich', title: 'Steve Reich', uri: '35OhI7DSls022v9Bz9r0VZ'}
    ]
  })
}

module.exports = artistReducer
