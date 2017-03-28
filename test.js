import test from 'ava'
import rutificador from './index'

test('name, rut & dv', async t => {
  const {
    name,
    rut,
    dv
  } = (await rutificador({ name: 'José Miguel Viñuela Infante' }))[0]

  t.is(name, 'VIÑUELA INFANTE JOSE MIGUEL')
  t.is(rut, 12585741)
  t.is(dv, '8')
})
test('rut', async t => {
  const {
    name,
    rut,
    dv
  } = (await rutificador({ rut: '12585741-8' }))[0]

  t.is(name, 'VIÑUELA INFANTE JOSE MIGUEL')
  t.is(rut, 12585741)
  t.is(dv, '8')
})
