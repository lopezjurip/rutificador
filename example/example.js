'use strict';

const rutificador = require('rutificador');

rutificador({name: 'Juán Perez'}).then(juanitos => {
  console.log(juanitos);
}).catch(err => {
  // Do something
})
