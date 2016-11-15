const { combineReducers } = require('redux')
const { routerStateReducer } = require('redux-router')

const topSongs = require('./topSongs')
const router = routerStateReducer

module.exports = {
  reducers: combineReducers({ topSongs, router })
}
