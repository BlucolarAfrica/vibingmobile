import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import { TabRoutes } from '../../types';

import { Home, Library, Search } from 'screens';

const { Screen, Navigator } = createBottomTabNavigator<TabRoutes>();

export default function Tab(): JSX.Element {
  return (
    <Navigator
      tabBar={() => <View />}
      // screenOptions={({ route }) => ({
      //   headerShown: false,
      //   // tabBarIcon: ({ color, size, focused }) => {
      //   //   const name = getTabIcon(route, focused);

      //   //   return <Icon {...{ color, name, size }} />;
      //   // },
      //   // tabBarLabel: ({ color, focused }) => {
      //   //   return (

      //   //   );
      //   // },
      // tabBarStyle: [Platform.OS === 'android' && { height: 60, padding: 10 }],
      // })}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Library" component={Library} />
    </Navigator>
  );
}
