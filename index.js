/**
 * @format
 */
//@ts-nocheck
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

console.warn(App);

AppRegistry.registerComponent(appName, () => App);
