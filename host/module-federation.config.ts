import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'host',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  exposes: {
    './DatePicker': './src/app/date-picker.jsx'
  },
  remotes: ['remote1'],
  shared: (name, config) => {
    if (name.startsWith('@apollo/client')) {
      return {
        eager: false,
        strictVersion: true,
      };
    }
    config.strictVersion = false;
    config.eager = false;
    config.requiredVersion = config.requiredVersion
      ? config.requiredVersion.toString().startsWith('^')
        ? config.requiredVersion
        : `^${config.requiredVersion}`
      : config.requiredVersion;
    if (name === 'axios') {
      return false;
    }
    if (name === 'react') {
      config.eager = true;
      return config;
    }
    if (name === 'react-singleton-context') {
      config.eager = true;
      return config;
    }
    if (name === 'react-dom') {
      config.eager = true;
      return config;
    }
    if (name === 'react-router') {
      config.eager = true;
      config.singleton = true;
      config.strictVersion = false;
      return config;
    }
    if (['zustand', '@graphql-tools/load-files'].includes(name)) {
      return false;
    }
    if (name === 'react-router-dom') {
      config.eager = true;
      config.singleton = true;
      config.strictVersion = false;
      return config;
    }
    if (name === 'prop-types') {
      config.eager = true;
      config.singleton = true;
      config.strictVersion = false;
      return config;
    }
    if (name === 'history') {
      config.eager = true;
      config.singleton = true;
      config.strictVersion = false;
      return config;
    }
    if (name === '@apollo/client/react/components') {
      return false;
    }
    if (name === 'react-resize-detector') {
      return false;
    }
    return config;
  },
};

export default config;
