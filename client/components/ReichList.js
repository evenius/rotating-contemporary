const React = require('react')
const SongList = require('../containers/Songlist')

require('./scss/reichList.scss')

module.exports = () => (
  <div className='steveReich'>
    <h1>Steve Reich - A selection of top songs</h1>
    <SongList artist={'steveReich'}>
      <div className='coolCircle'></div>
    </SongList>
  </div>
)
