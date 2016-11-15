const React = require('react')

require('./scss/footer.scss')

module.exports =  () => {
  let date = new Date()
  return (<footer>
    <p>Jonathan Gill - {date.toDateString()}</p>
  </footer>)
}
