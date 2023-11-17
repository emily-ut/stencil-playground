import { sass } from '@stencil/sass';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'playground',
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
  testing: {
    browserHeadless: "new",
  },
};
