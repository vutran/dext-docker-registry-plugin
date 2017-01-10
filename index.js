const got = require('got');

const VERSION = 'v2';
const ENDPOINT = `https://hub.docker.com/${VERSION}/search/repositories/`;

/**
 * Retrieve the repository URL for the given item
 *
 * If the result is an official repo, append the "_" prefix path.
 *
 * @param {Object} result
 * @return {String}
 */
const getRepositoryUrl = (result) => {
  const repo = result.is_official ? `_/${result.repo_name}` : result.repo_name;
  return `https://hub.docker.com/r/${repo}`;
};

module.exports = {
  keyword: 'docker',
  action: 'openurl',
  helper: {
    title: 'Search for images in the Docker Registry',
    subtitle: 'Example: docker node',
    icon: {
      path: './icon.png',
    },
  },
  query: q => new Promise((resolve) => {
    const opts = {
      query: {
        query: q,
      },
      json: true,
    };
    got(ENDPOINT, opts)
      .then((res) => {
        if (res.body) {
          const items = res.body.results
            .map(i => Object.assign({}, {
              title: i.repo_name,
              subtitle: i.short_description,
              arg: getRepositoryUrl(i),
              icon: {
                path: './icon.png',
              },
            }));
          resolve({ items });
        }
      });
  }),
};
