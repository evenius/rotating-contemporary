const React = require('react')
const SongList = require('../containers/Songlist')

require('./scss/whitacreList.scss')
require('./scss/playThing.scss')

module.exports = () => (
  <div className='ericWhitacre'>
    <h1>Eric Whitacre's gold</h1>
    <SongList artist={'ericWhitacre'}/>
  </div>
)
