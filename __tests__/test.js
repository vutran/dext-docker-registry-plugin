const m = require('../index');

it('retrieve some results from the api', done => {
  m.execute('node').then(results => {
    expect(results.items.length > 0).toBeTruthy();
    done();
  });
});
