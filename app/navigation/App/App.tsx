import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import { AppRoutes } from '../types';

import { TabNavigator } from './Tab';
import { PlayingNavigator } from './Navigators';

const { Navigator, Screen, Group } = createStackNavigator<AppRoutes>();

export default function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Tab" component={TabNavigator} />
      <Group
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}>
        <Screen name="Playing" component={PlayingNavigator} />
      </Group>
    </Navigator>
  );
}
