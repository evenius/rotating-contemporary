const React = require('react')
const { connect } = require('react-redux')

const { fetchTopSongs } = require('../actions')

const artistPages = {
  steveReich: require('../components/ReichList'),
  ericWhitacre: require('../components/WhitacreList'),
  johnAdams: require('../components/AdamsList')
}

const Footer = require('../components/Footer')
const Header = require('./Header')

class ArtistView extends React.Component {

  componentDidMount () {
      window.onresize = () => {
        // Warning, warning, antipattern detected.
        // Talk to some1 about how to move this to action/reducer
        this.setState({fullHeight: window.innerHeight})
      }

  }

  componentWillUnmount () {
    window.onresize = null
  }

  render () {
    let { chosenArtist, fullHeight } = this.props

    if (!chosenArtist) {
      return null
    }

    let ChosenArtistPage = artistPages[chosenArtist]

    return (<div style={{overflowY: 'scroll', height: `${fullHeight}px`}}>
      <Header />
      <ChosenArtistPage />
      <Footer/>
    </div>)
  }
}

const mapStateToProps = function ({topSongs, fullHeight}) {
  return {
    chosenArtist: topSongs.get('_chosenArtist'),
    fullHeight: fullHeight || window.innerHeight
  }
}

module.exports = connect(mapStateToProps)(ArtistView)
