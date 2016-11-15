let { errorFromResponse, APIError } = require('./APIError')
const { partial } = require('fast.js')
const fakeResponse = require('./fakeResponse')
const QueryString = require('querystring')

let request = (path, method, data, isFake) =>
{
  if (isFake) {return new Promise((resolve, reject) => { setTimeout(partial(resolve, fakeResponse), 1500) })}
  let uri = new window.URL(path)
  let body = (data ? JSON.stringify(data) : data)

  if (method === 'GET' && data) {
    body = undefined
    uri.href = `${uri.href}?${QueryString.encode(data)}`
  }

  return window.fetch(uri, {
    method,
    body: body,
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
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
  GET: (path, data, isFake) => request(path, 'GET', data, isFake),
  POST: (path, data, isFake) => request(path, 'POST', data, isFake),
  PATCH: (path, data, isFake) => request(path, 'PATCH', data, isFake),
  DELETE: (path, data, isFake) => request(path, 'DELETE', data, isFake)
}
