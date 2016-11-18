const { combineReducers } = require('redux')
const { routerStateReducer } = require('redux-router')

const topSongs = require('./topSongs')
const view = require('./view')
const router = routerStateReducer

module.exports = {
  reducers: combineReducers({ topSongs, router, view })
}
