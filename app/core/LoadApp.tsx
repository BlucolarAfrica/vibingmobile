import { useEffect } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import { pallets } from 'constant';
import { useSelector } from 'store';
import { AuthNavigator } from 'navigation';

export default function LoadApp(): JSX.Element {
  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    console.log('LoadApp', { isAuthenticated });
  }, [isAuthenticated]);

  const theme: Theme = {
    colors: {
      background: pallets.background,
      border: pallets.border,
      card: pallets.card,
      notification: pallets.primary,
      primary: pallets.primary,
      text: pallets.font,
    },
    dark: false,
  };

  return (
    <>
      <NavigationContainer {...{ theme }}>
        <SafeAreaProvider>
          {isAuthenticated ? <></> : <AuthNavigator />}
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
}
