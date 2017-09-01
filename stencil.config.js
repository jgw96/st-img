exports.config = {
  generateCollection: true,
  bundles: [
    { components: ['lazy-img'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
