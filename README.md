# rutificador
[![npm version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url] [![dependencies][dependencies-image]][dependencies-url]

Get chilean RUT from people's name from http://chile.rutificador.com.

## Install

With `npm`:

```sh
npm install --save rutificador
```

With [`yarn`](https://yarnpkg.com):

```sh
yarn add rutificador
```

## Usage
```js
const rutificador = require('rutificador')

rutificador({ name: 'Juán Perez' }).then(juanitos => {
  console.log(juanitos)
}).catch(err => {
  // Do something
})
```

This prints:
```js
[ { name: 'JUAN PEREZ DUQUE', rut: 'XXXXXXX-6' },
  { name: 'RAUL JUAN PEREZ MONTENEGRO', rut: 'XXXXXXX-0' },
  { name: 'JUAN PEREZ ROJAS', rut: 'XXXXXXX-6' },
  ... ]
```

Also you can match by RUT:
```js
rutificador({ rut: 'XXXXXXX-0' }).then(resp => {
  // ...
})
```

## Tests

```sh
npm test

# or
yarn test
```

[ci-image]: https://travis-ci.org/mrpatiwi/rutificador.svg
[ci-url]: https://travis-ci.org/mrpatiwi/rutificador
[npm-image]: https://badge.fury.io/js/rutificador.svg
[npm-url]: http://badge.fury.io/js/rutificador
[dependencies-image]: https://david-dm.org/mrpatiwi/rutificador.svg
[dependencies-url]: https://david-dm.org/mrpatiwi/rutificador
