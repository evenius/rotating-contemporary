const React = require('react')
const { connect } = require('react-redux')

const TrackInfo = require('../components/TrackInfo')

const { fetchTopSongs, unabridgeTopSongs, reBuildScroller } = require('../actions')

class Songlist extends React.Component {
  componentDidMount () {
    this.props.fetchTopSongsAbridged()
  }

  componentDidUpdate () {
    this.props.reBuildScroller()
  }

  render () {
    let {
      tracks,
      children,
      isAbridged,
      fetchAllTopSongs,
    } = this.props

    if (!tracks) {
      return (<h1>Loading</h1>)
    } else {
      // Convoluted? Maybe
      let trackList = tracks.take(isAbridged ? 5 : 10)
      return (
      <div className='songList'>
        <ul>
          {trackList.map(track => (<li key={track.get('id')}><TrackInfo track={track} /></li>))}
        </ul>
        {isAbridged ? <button onClick={fetchAllTopSongs}>Get top 10</button> : null}
        {children}
      </div>)
    }
  }
}

function mapStateToProps (state, ownProps) {
  let { topSongs } = state
  let { artist } = ownProps
  return {
    tracks: topSongs.getIn([artist, 'tracks']),
    isAbridged: topSongs.getIn([artist, 'isAbridged'])
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  let { artist } = ownProps
  return {
    reBuildScroller ()  { dispatch(reBuildScroller()) },
    fetchTopSongsAbridged () { dispatch(fetchTopSongs(artist)) },
    fetchAllTopSongs () { dispatch(unabridgeTopSongs(artist)) }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Songlist)
