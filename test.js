import test from 'ava';
import m from '.';

test('retrieve some results from the api', async t => {
  const results = await m.execute('node');
  t.true(results.items.length > 0);
});
