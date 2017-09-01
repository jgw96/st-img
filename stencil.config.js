exports.config = {
  generateCollection: true,
  bundles: [
    { components: ['st-img'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
