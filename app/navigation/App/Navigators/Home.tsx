import { createStackNavigator } from '@react-navigation/stack';

import { HomeRoutes } from 'navigation';
import { ArtistPage, Home, TrackList } from 'screens/App/Home';

const { Navigator, Screen } = createStackNavigator<HomeRoutes>();

export default function HomeNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="HomePage" component={Home} />
      <Screen name="TrackList" component={TrackList} />
      <Screen name="ArtistPage" component={ArtistPage} />
    </Navigator>
  );
}
