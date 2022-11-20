module.exports = {
  debug: true,
  branches: ['main'],
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
  prepare: [
    {
      path: '@semantic-release/exec',
      cmd: 'VERSION=${nextRelease.version} npm run build',
    },
    {
      path: '@semantic-release/exec',
      cmd: 'VERSION=${nextRelease.version} ./node_modules/.bin/zx tools/publish-all-themes.mjs',
    },
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  publish: [
    '@semantic-release/npm',
    '@semantic-release/github'
  ],
  success: ['@semantic-release/github'],
};
