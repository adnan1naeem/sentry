/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as Sentry from '@sentry/react-native';

import React from 'react';
import Source from './source';
import {StatusBar} from 'react-native';

Sentry.init({
  release: 'test',
  dist: '1.1',
  dsn:
    'https://2c56364e2b1b46599cf7590950b1cb93@o460512.ingest.sentry.io/5460868',
});

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Source />
    </>
  );
};

export default App;
