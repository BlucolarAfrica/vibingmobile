import { createStackNavigator } from '@react-navigation/stack';

import { SearchRoutes } from 'navigation';
import { Discover, Search } from 'screens/App/Search';

const { Navigator, Screen } = createStackNavigator<SearchRoutes>();

export default function SearchNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Discover" component={Discover} />
      <Screen name="SearchPage" component={Search} />
    </Navigator>
  );
}
