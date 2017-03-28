const { load } = require('cheerio')
const request = require('request-promise')

/**
 * Get people matching name or RUT.
 * @param  {Object} opts Options
 * @param  {string} opts.name Matchings with this name
 * @param  {string} opts.rut Matchings with this rut
 * @return {Promise} Promise with the result
 */
module.exports = ({ rut, name }) => {
  const input = rut || name
  const url = 'https://chile.rutificador.com'

  const options = {
    url,
    transform: body => load(body)
  }

  return request(options)
    .then($ => $('input[name="csrfmiddlewaretoken"]').val())
    .then(token => {
      const j = request.jar()
      const cookie = request.cookie(`csrftoken=${token}`)
      j.setCookie(cookie, `${url}/get_generic_ajax/`)

      return request.post({
        url: `${url}/get_generic_ajax/`,
        jar: j,
        headers: {
          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36',
          'referer': url
        },
        form: {
          entrada: input,
          csrfmiddlewaretoken: token
        }
      })
    })
    .then(resp => JSON.parse(resp))
    .then(json => {
      if (json.status !== 'success') {
        throw new Error(json.status)
      } else {
        return json.value
      }
    })
}
