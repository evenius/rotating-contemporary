const React = require('react')
require('./scss/fullPager.scss')
// Wrap every children it receives in a '.fullPager'-div.
module.exports = ({id, children}) => <div id={id} className='fullPager'>{children.map((c, i) => (<div className={'section'} key={i}>{c}</div>))}</div>
