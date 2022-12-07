/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = 1;

AppRegistry.registerComponent(appName, () => App);
