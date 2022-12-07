import { createStackNavigator } from '@react-navigation/stack';

import { LibraryRoutes } from 'navigation';
import {
  AudioQuality,
  ChangeEmail,
  ChangePassword,
  Library,
  Notification,
  Profile,
} from 'screens/App/Library';

const { Navigator, Screen, Group } = createStackNavigator<LibraryRoutes>();

export default function LibraryNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="LibraryPage" component={Library} />
      <Group>
        <Screen name="Profile" component={Profile} />
        <Screen name="AudioQuality" component={AudioQuality} />
        <Screen name="ChangeEmail" component={ChangeEmail} />
        <Screen name="ChangePassword" component={ChangePassword} />
        <Screen name="Notification" component={Notification} />
      </Group>
    </Navigator>
  );
}
