import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import './declare';
import { name as appName } from './app.json';
import { Login } from './src';
AppRegistry.registerComponent(appName, () => Login);
