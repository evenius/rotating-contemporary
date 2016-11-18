const { FULL_PAGE_INITIALIZED, FULL_PAGE_NEXT, FULL_PAGE_RERENDER } = require('../actions')

window.$ = require('jquery')
require('fullpage.js')
require('fullpage.js/vendors/scrolloverflow')

const viewReducer = (state, action) => {
  switch (action.type) {
    case FULL_PAGE_INITIALIZED:
      state.$fullPage = window.$('#' + action.id)
      state.$fullPage.fullpage({
        scrollOverflow: true,
        onLeave: function (index, nextIndex, direction) {
          // If we are on the 'last' slide, stop backtracking
          return !(nextIndex === 2 && direction === 'up')
       }
      })
      return state
    case FULL_PAGE_NEXT:
      // This is an antipattern... As an example of what not to do of course
      window.$.fn.fullpage.moveSectionDown()
      break
    case FULL_PAGE_RERENDER:
      window.$.fn.fullpage.reBuild()
      break
  }
  return state || {}
}

module.exports = viewReducer
