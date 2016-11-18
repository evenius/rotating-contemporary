const CHOSE_ARTIST = 'CHOSE_ARTIST'
// This is never used, but to be clear
const FULL_PAGE_INITIALIZED = 'FULL_PAGE_INITIALIZED'
const FULL_PAGE_NEXT = 'FULL_PAGE_NEXT'
const FULL_PAGE_RERENDER = 'FULL_PAGE_RERENDER'

function chooseArtist (artistName) {
  return {
    type: CHOSE_ARTIST,
    artistName
  }
}

function initFullpage (id) {
  return {
    type: FULL_PAGE_INITIALIZED,
    id
  }
}

function goToNextPage () {
  return {
    type: FULL_PAGE_NEXT
  }
}

function reBuildScroller () {
  return {
    type: FULL_PAGE_RERENDER
  }
}

module.exports = {
  CHOSE_ARTIST,
  FULL_PAGE_NEXT,
  FULL_PAGE_INITIALIZED,
  FULL_PAGE_RERENDER,
  reBuildScroller,
  chooseArtist,
  initFullpage,
  goToNextPage
}
