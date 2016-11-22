const CHOSE_ARTIST = 'CHOSE_ARTIST'
// This is never used, but to be clear
const FULL_PAGE_INITIALIZED = 'FULL_PAGE_INITIALIZED'
const FULL_PAGE_NEXT = 'FULL_PAGE_NEXT'
const FULL_PAGE_RERENDER = 'FULL_PAGE_RERENDER'

const SHOW_INTEREST_IN_ARTIST = 'SHOW_INTEREST_IN_ARTIST'
const SHOW_DISINTEREST_IN_ARTIST = 'SHOW_DISINTEREST_IN_ARTIST'

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

// e.g. have your mouse hover over them
function showInterestInArtist (artistName) {
  return {type: SHOW_INTEREST_IN_ARTIST, artistName}
}

// e.g. have your mouse leave hover
function showDisinterest () {
  return {type: SHOW_DISINTEREST_IN_ARTIST}
}

module.exports = {
  CHOSE_ARTIST,
  FULL_PAGE_NEXT,
  FULL_PAGE_INITIALIZED,
  FULL_PAGE_RERENDER,
  SHOW_DISINTEREST_IN_ARTIST,
  SHOW_INTEREST_IN_ARTIST,
  showInterestInArtist,
  showDisinterest,
  reBuildScroller,
  chooseArtist,
  initFullpage,
  goToNextPage
}
