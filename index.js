'use strict';

const cheerio = require('cheerio');
const request = require('request-promise').defaults({
  jar: true
});

/**
 * Get people matching name or RUT.
 * @param  {Object} opts Options
 * @param  {string} opts.name Matchings with this name
 * @param  {string} opts.rut Matchings with this rut
 * @return {Promise} Promise with the result
 */
module.exports = function(opts) {
  const input = opts.rut ||  opts.name;

  const options = {
    uri: 'http://datos.24x7.cl',
    transform: body => cheerio.load(body),
  }

  return request(options).then($ => {
      return $('input[name="csrfmiddlewaretoken"]').val();
    })
    .then(token => {
      return request.post('http://datos.24x7.cl/get_generic_ajax/', {
        form: {
          entrada: input,
          csrfmiddlewaretoken: token,
        }
      })
    })
    .then(resp => JSON.parse(resp))
    .then(json => {
      if (json.status !== 'success') {
        throw new Error(json.status);
      } else {
        return json.value;
      }
    });
}
