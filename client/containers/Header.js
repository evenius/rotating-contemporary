const React = require('react')
const {connect} = require('react-redux')

const { chooseArtist } = require('../actions')

require('./scss/header.scss')

const Header = function ({ chooseSteve, chooseEric, chooseJohn }) {
  return (<header>
    <nav>
      <a onClick={chooseSteve}>Steve Reich</a>
      <a onClick={chooseEric}>Eric Whitacre</a>
      <a onClick={chooseJohn}>John Adams</a>
    </nav>
  </header>)
}

const mapDispatchToProps = function (dispatch) {
  // Why not just do this in render?
  // rebinding is the answer

  let choice = (artistName) => {
    console.log('clicked')
    dispatch(chooseArtist(artistName))
  }

  return {
    chooseSteve: () => choice('steveReich'),
    chooseEric: () => choice('ericWhitacre'),
    chooseJohn: () => choice('johnAdams')
  }
}

module.exports = connect(() => ({}), mapDispatchToProps)(Header)
