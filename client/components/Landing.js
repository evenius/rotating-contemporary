const React = require('react')

const ReichList = require('./ReichList')
const Footer = require('./Footer')

require('./scss/landing.scss')

module.exports = (props) => {
  return (<div className='landing'>
  <h1>Music can not</h1>
  <img src='tuber.png'/>
  <h1>Exist in a vacuum</h1>
</div>)
}
// <Footer />
// <ReichList />

// <iframe className='playThing' src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf" width="250" height="80" frameborder="0" allowTransparency="true"/>
