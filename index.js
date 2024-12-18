/**
 * @format
 */

if (__DEV__) {
  require('./ReactotronConfig');
}

import {AppRegistry} from 'react-native';
import App from './Components/Components.View';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
