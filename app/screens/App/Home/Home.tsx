import { StyleSheet, View } from 'react-native';

import { Header } from './Components';

import { Container } from 'components';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <View style={styles.container}>
          <View />
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
