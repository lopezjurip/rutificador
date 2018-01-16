import test from 'ava'
import rutify from './index'

test('search by name', async t => {
  const results = await rutify({ name: 'José Miguel Viñuela Infante' })
  const [{ name, rut }] = results

  t.true(Array.isArray(results))
  t.is(name, 'viñuela infante jose miguel')
  t.is(rut, '125857418')
})

test('search by rut', async t => {
  const results = await rutify({ rut: '12585741-8' })
  const [{ name, rut }] = results

  t.true(Array.isArray(results))
  t.is(name, 'viñuela infante jose miguel')
  t.is(rut, '125857418')
})
