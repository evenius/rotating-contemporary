let { errorFromResponse, APIError } = require('./APIError')
const { partial } = require('fast.js')
const fakeResponse = require('./fakeResponse')
const QueryString = require('querystring')

let request = (path, method, data, options = {}) =>
{
  let uri = new window.URL(path)
  let body = (data ? JSON.stringify(data) : data)

  if (method === 'GET' && data) {
    body = undefined
    uri.href = `${uri.href}?${QueryString.encode(data)}`
  }

  return window.fetch(uri.href, {
    method,
    body: body,
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      ...options.headers
    }
  }).then(response => {
    if (response.ok) {
      if (response.headers.get('Content-Type').indexOf('application/json') !== -1) {
        return response.json()
      } else {
        return response.text()
      }
    } else {
      throw errorFromResponse(response)
    }
  })
}

module.exports = {
  request,
  // responseError,
  GET: (path, data, options) => request(path, 'GET', data, options),
  POST: (path, data, options) => request(path, 'POST', data, options),
  PATCH: (path, data, options) => request(path, 'PATCH', data, options),
  DELETE: (path, data, options) => request(path, 'DELETE', data, options)
}
