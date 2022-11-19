import { createStackNavigator } from '@react-navigation/stack';

import { AppRoutes } from '../types';

import { TabNavigator } from './Tab';

const { Navigator, Screen, Group } = createStackNavigator<AppRoutes>();

export default function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="Tab" component={TabNavigator} />
      </Group>
    </Navigator>
  );
}
