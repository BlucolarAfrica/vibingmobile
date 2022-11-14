import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import { AuthRoutes } from '../types';

import {
  ForgotPassword,
  Login,
  Password,
  Reset,
  SignUp,
  VerifyEmail,
  Welcome,
} from 'screens/Auth';

const { Group, Navigator, Screen } = createStackNavigator<AuthRoutes>();

export default function AuthNavigator(): JSX.Element {
  return (
    <Navigator
      initialRouteName="SignUp"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerBackTitleVisible: false,
        headerShown: false,
        headerTitle: '',
      }}>
      <Group>
        <Screen name="Welcome" component={Welcome} />
      </Group>
      <Group>
        <Screen name="Login" component={Login} />
        <Screen name="Forgot" component={ForgotPassword} />
        <Screen name="Reset" component={Reset} />
      </Group>
      <Group>
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Password" component={Password} />
        <Screen name="VerifyEmail" component={VerifyEmail} />
      </Group>
    </Navigator>
  );
}
