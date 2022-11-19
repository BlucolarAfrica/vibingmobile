import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { TabBar } from './Components';

import { TabRoutes } from 'navigation';
import { getTabIcon } from 'utils';
import { Home, Library, Search } from 'screens';
import { Icon } from 'assets';

const { Screen, Navigator } = createBottomTabNavigator<TabRoutes>();

export default function Tab(): JSX.Element {
  return (
    <Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          const name = getTabIcon(route, focused);

          return <Icon {...{ color, name, size }} />;
        },
        tabBarStyle: [Platform.OS === 'android' && { height: 60, padding: 10 }],
      })}>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Library" component={Library} />
    </Navigator>
  );
}
