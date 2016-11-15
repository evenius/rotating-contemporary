const React = require('react')

module.exports = ({ track }) => {
  // console.log(track.toJSON())
  return (
  <a className="trackInfo" href="spotify://spotify:track:3ZL13tPw7FtKFNZAIhQWgc">
    <h3>{track.get('name')}</h3>
    <h4>{track.getIn(['album', 'name'])}</h4>
  </a>
)
}
