exports.config = {
  namespace: 'stimg',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['st-img'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
