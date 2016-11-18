const React = require('react')
const { connect } = require('react-redux')

const { chooseArtist, goToNextPage, fetchTopSongs } = require('../actions')

require('./scss/chooseArtist.scss')

class ChooseArtist extends React.Component
{

  componentDidMount () {
    this.props.preLoadArtist()
  }

  render () {
    let { chooseSteve, chooseEric, chooseJohn } = this.props

    return (<div className='chooseArtist landing'>
        <h1>Choose an artist</h1>
        <ul>
          <li onClick={chooseSteve}>Steve Reich</li>
          <li onClick={chooseEric}>Eric Whitacre</li>
          <li onClick={chooseJohn}>John Adams</li>
        </ul>
      </div>
    )
  }
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
    chooseJohn: () => choice('johnAdams'),
    preLoadArtist: () => {
      dispatch(fetchTopSongs('steveReich'))
      dispatch(fetchTopSongs('ericWhitacre'))
      dispatch(fetchTopSongs('johnAdams'))
    }
  }
}

module.exports = connect(() => ({}), mapDispatchToProps)(ChooseArtist)
