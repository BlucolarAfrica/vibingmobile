import { createStackNavigator } from '@react-navigation/stack';

import { OnboardRoutes } from 'navigation';
import { Onboard } from 'screens/Auth/Onboard';

const { Navigator, Screen } = createStackNavigator<OnboardRoutes>();

export default function OnboardNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Onboard" component={Onboard} />
    </Navigator>
  );
}
