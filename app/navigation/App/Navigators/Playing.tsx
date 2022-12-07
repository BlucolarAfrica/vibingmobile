import { createStackNavigator } from '@react-navigation/stack';

import { NowPayingRoutes } from 'navigation';
import { NowPlaying } from 'screens/App/Playing';

const { Navigator, Screen } = createStackNavigator<NowPayingRoutes>();

export default function PlayingNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="NowPlaying" component={NowPlaying} />
    </Navigator>
  );
}
