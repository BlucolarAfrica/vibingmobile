import { StyleSheet, View } from 'react-native';

import { SearchInput } from './Components';

import { Container, Header } from 'components';
import { AppRoutes, RootNavigationProp, TabRoutes } from 'navigation';

export default function Discover({
  navigation,
}: RootNavigationProp<AppRoutes, TabRoutes, 'Search'>): JSX.Element {
  return (
    <>
      <Header hideBackIcon />
      <Container>
        <SearchInput
          onPress={() =>
            navigation.navigate('Search', { screen: 'SearchPage' })
          }
        />
        <View style={styles.container} />
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
