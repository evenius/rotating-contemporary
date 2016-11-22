const React = require('react')
const { connect } = require('react-redux')
const { partial } = require('fast.js')

const {
  chooseArtist,
  goToNextPage,
  fetchTopSongs,
  showInterestInArtist,
  showDisinterest } = require('../actions')

const backgroundStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

require('./scss/chooseArtist.scss')

class ChooseArtist extends React.Component
{

  componentDidMount () {
    this.props.preLoadArtists()
  }

  render () {
    let { artists, interestingArtist } = this.props
    let bkg = {}
    if(interestingArtist) {
      bkg = {
        backgroundImage: `url(${interestingArtist}.jpg)`,
        opacity: 1,
        ...backgroundStyle
      }
    }
    return (<div className={'chooseArtist landing ' + interestingArtist}>
      <div style={bkg} />
      <h1>Choose an artist</h1>
      <ul>
        {artists.map((artist, id) => (
          <li
            key={id}
            onMouseEnter={artist.isInteresting}
            onMouseLeave={artist.isUninteresting}
            onClick={artist.chooseThis}
          >
            {artist.get('title')}
          </li>
        ))}
      </ul>
    </div>
    )
  }
}

const mapStateToProps = function ({artists}) {
  return {
    artists: artists.get('artists'),
    interestingArtist: artists.get('_interestingArtist') || ''
  }
}

const mapDispatchToProps = function (dispatch) {
  // Why not just do this in render?
  // rebinding is the answer

  // These functions are just before getting them in mergeProps.
  // Important to know
  return {
    choice: function (artist) {
      dispatch(chooseArtist(artist.get('name')))
      dispatch(goToNextPage())
    },
    interestedIn: function (artist) { dispatch(showInterestInArtist(artist)) },
    disinterestedIn: function () { dispatch(showDisinterest()) },
    artistPreloader: function (artist) { dispatch(fetchTopSongs(artist)) }
  }
}

// This way I can preload all the artists in the store
const mergeProps = function (stateProps, dispatches) {
  return {
    preLoadArtists: () => {
      stateProps.artists.forEach((artist, b, c) => {
        // Will pre-request data from spotify api, thinking users are nosy buggers. Aren't you? 🤔
        dispatches.artistPreloader(artist)
      })
    },
    // I will just add a dispatch to the artist-information, so the act of
    // choosing is available. PS. Stateprops sounds scary.
    artists: stateProps.artists.map((artist) => {
      // Merge my ungodly mess with pretty artist object (that I also made)
      return Object.assign(artist, {
        chooseThis: () => dispatches.choice(artist),
        isInteresting: () => dispatches.interestedIn(artist.get('name')),
        isUninteresting: dispatches.disinterestedIn
      })
    }),
    interestingArtist: stateProps.interestingArtist
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChooseArtist)
