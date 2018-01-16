# rutificador [![Build Status](https://travis-ci.org/lopezjurip/rutificador.svg?branch=master)](https://travis-ci.org/lopezjurip/rutificador)

Get chilean RUT from people's name or vice versa from [Rutify – Rutificador](https://rutify.cl/).

## Install

```sh
npm install --save rutificador
```

## Usage

```js
// Packages
const rutify = require('rutificador')

// Search by name
rutify({ name: 'Juán Perez' }).then(juanitos => {
  console.log(juanitos)
})

// Search by RUT
rutify({ rut: 'xxxxxxxxx' }).then(results => {
  console.log(results)
})
```

### API

```js
rutify(opts : Object) => Promise
```

- `opts`
  * `rut`: The chilean RUT (DNI), example `189726317` or `18.972.631-7`.
  * `name`: The name you want to search.

## Related

- [rut.js](https://github.com/jlobos/rut.js) - Sencilla y pequeña librería para validar y dar formato al RUT
- [rut-regex](https://github.com/jlobos/rut-regex) - Regular expression for matching Chile RUT's
