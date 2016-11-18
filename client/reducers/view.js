const { FULL_PAGE_INITIALIZED, FULL_PAGE_NEXT, FULL_PAGE_RERENDER } = require('../actions')

window.$ = require('jquery')
require('fullpage.js')
require('fullpage.js/vendors/scrolloverflow')

// Redux + jquery != true
var isClickAndNotScroll = false

const viewReducer = (state, action) => {
  switch (action.type) {
    case FULL_PAGE_INITIALIZED:
      state.$fullPage = window.$('#' + action.id)
      state.$fullPage.fullpage({
        scrollOverflow: true,
        onLeave: function (index, nextIndex, direction) {
          // If we are on the 'last' slide, stop backtracking.
          if (nextIndex === 2 && direction === 'up') {
            return false
          } else if (nextIndex === 3 && !isClickAndNotScroll) {
            // And since this library wont let me do this nicely...
            return false
          }
          return true
       }
      })
      return state
    case FULL_PAGE_NEXT:
      // This is an antipattern... As an example of what not to do of course
      isClickAndNotScroll = true
      window.$.fn.fullpage.moveSectionDown()
      isClickAndNotScroll = false
      break
    case FULL_PAGE_RERENDER:
      window.$.fn.fullpage.reBuild()
      return state
  }
  return state || {}
}

module.exports = viewReducer
