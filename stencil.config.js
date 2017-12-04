exports.config = {
  namespace: 'stimg',
  generateDistribution: true,
  bundles: [
    { components: ['st-img'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
