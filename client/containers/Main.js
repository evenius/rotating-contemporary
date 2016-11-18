const React = require('react')
const {connect} = require('react-redux')

const ChooseArtist = require('./ChooseArtist')
const Landing = require('../components/Landing')
const ArtistView = require('../containers/ArtistView')

const FullPager = require('../components/FullPager')

const { initFullpage } = require('../actions')

require('./scss/main.scss')
require('fullpage.js/dist/jquery.fullpage.min.css')

class Main extends React.Component {

  componentDidMount () {
    // Why not ref? Wrapper is not very nice today
    this.props.initFullpage('fullpage')
  }
  render () {
    return (<div className='main' >
      <FullPager id='fullpage'>
        <Landing />
        <ChooseArtist/>
        <ArtistView />
      </FullPager>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initFullpage(id) {
      dispatch(initFullpage(id))
    }
  }
}

module.exports = connect(() => ({}), mapDispatchToProps)(Main)
