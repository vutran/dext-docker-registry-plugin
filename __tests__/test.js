const m = require('../index');

it('retrieve some results from the api', async () => {
  const results = await m.execute('node');
  expect(results.items.length > 0).toBeTruthy();
});
