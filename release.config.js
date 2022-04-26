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
      cmd: 'VERSION=${nextRelease.version} node tools/publish-all-themes',
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
