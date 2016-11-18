const React = require('react')
const SongList = require('../containers/Songlist')

require('./scss/adamsList.scss')
require('./scss/playThing.scss')

module.exports = () => (
  <div className='johnAdams'>
    <h1>John Adams</h1>
    <SongList artist={'johnAdams'}>
      <div className='coolCircle'></div>
    </SongList>
  </div>
)
