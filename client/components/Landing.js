const React = require('react')

const ReichList = require('./ReichList')
const Footer = require('./Footer')

require('./scss/main.scss')

module.exports = (props) => {
  return (<div>
    <ReichList />
    <Footer />
</div>)
}
