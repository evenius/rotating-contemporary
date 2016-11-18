const React = require('react')
const { connect } = require('react-redux')

const { chooseArtist, goToNextPage } = require('../actions')

require('./scss/chooseArtist.scss')

function ChooseArtist ({ chooseSteve, chooseEric, chooseJohn }) {
  return (<div className='chooseArtist landing'>
  <h1>Choose an artist</h1>
  <ul>
    <li onClick={chooseSteve}>Steve Reich</li>
    <li onClick={chooseEric}>Eric Whitacre</li>
    <li onClick={chooseJohn}>John Adams</li>
  </ul>
</div>)
}

const mapDispatchToProps = function (dispatch) {
  // Why not just do this in render?
  // rebinding is the answer

  let choice = (artistName) => {
    dispatch(chooseArtist(artistName))
    dispatch(goToNextPage())
  }

  return {
    chooseSteve: () => choice('steveReich'),
    chooseEric: () => choice('ericWhitacre'),
    chooseJohn: () => choice('johnAdams')
  }
}

module.exports = connect(() => ({}), mapDispatchToProps)(ChooseArtist)
