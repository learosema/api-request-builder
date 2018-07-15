// helper function from MDN
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders

export default function parseHeaders(xhr) {
  const headers = xhr
    .getAllResponseHeaders()
    .trim()
    .split(/[\r\n]+/)
  const headerMap = {}
  headers.forEach(function(line) {
    const parts = line.split(": ")
    const header = parts.shift().toLowerCase()
    const value = parts.join(": ")
    headerMap[header] = value
  })
  return headerMap
}