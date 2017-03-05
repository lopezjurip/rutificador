const { load } = require('cheerio')
const request = require('request-promise').defaults({ jar: true })

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
      return request.post(`${url}/get_generic_ajax/`, {
        headers: {
          referer: url
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
