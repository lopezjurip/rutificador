'use strict'
const request = require('request-promise')

/**
 * Get people matching name or RUT.
 * @param  {Object} opts Options
 * @param  {string} opts.name Matchings with this name
 * @param  {string} opts.rut Matchings with this rut
 * @return {Promise} Promise with the result
 */
module.exports = ({ rut, name }) =>
  request({
    url: 'https://api.rutify.cl/search',
    qs: { q: rut || name },
    json: true
  })
