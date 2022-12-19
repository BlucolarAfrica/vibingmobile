import { StyleSheet, View } from 'react-native';

import { SearchInput } from './Components';

import { Container, Header } from 'components';
import { AppRoutes, RootNavigationProp, SearchRoutes } from 'navigation';

export default function Discover({
  navigation,
}: RootNavigationProp<AppRoutes, SearchRoutes, 'Discover'>): JSX.Element {
  return (
    <>
      <Header hideBackIcon />
      <Container>
        <SearchInput onPress={() => navigation.navigate('SearchPage')} />
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
