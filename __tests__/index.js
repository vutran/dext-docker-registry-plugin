const m = require('../index');

jest.mock('got');

describe('dext-docker-registry-plugin', () => {
  it('retrieve some results from the api', async () => {
    require('got').__setResponseBody({
      results: [
        {
          star_count: 100,
          pull_count: 100,
          repo_owner: null,
          short_description: 'Node.js is a JavaScript-based platform for server-side and networking applications.',
          is_automated: false,
          is_official: true,
          repo_name: 'official/node',
        },
      ],
    });

    const results = await m.query('node');
    expect(results.items.length).toBeGreaterThan(0);
  });
});
