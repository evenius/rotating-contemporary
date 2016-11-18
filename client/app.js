const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const thunk = require('redux-thunk').default
const { createHashHistory } = require('history')

const { createStore, applyMiddleware, compose } = require('redux')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')

const { reducers } = require('./reducers')

const Main = require('./containers/Main')

require('normalize.css')
require('./containers/scss/fonts.scss')

const store = createStore(
  reducers,
  {},
  compose(
    // reduxReactRouter({ createHistory }),
    applyMiddleware(thunk)
  )
)

render(
  (<Provider store={store}>
    <Router history={createHashHistory()}>
        <Route path='/' component={Main} />
    </Router>
  </Provider>),
  document.getElementById('root')
)
