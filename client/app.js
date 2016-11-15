const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const thunk = require('redux-thunk').default
const { createHashHistory } = require('history')

const { createStore, applyMiddleware, compose } = require('redux')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')

const { reducers } = require('./reducers')

const Landing = require('./components/Landing')

require('normalize.css')

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
        <Route path='/' component={Landing} />
    </Router>
  </Provider>),
  document.getElementById('root')
)
