import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stimg',
  bundles: [
    { components: ['st-img'] }
  ],
  outputTargets: [
    {
      type: 'dist'
    }
    ,
    {
      type: 'www',
      serviceWorker: {
        skipWaiting: true,
        clientsClaim: true
      }
    }
  ],
  plugins: [
    sass()
  ]
}
