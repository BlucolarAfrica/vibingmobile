import { StyleSheet, Text, View } from 'react-native';

export default function SignUp(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Welcome to Vibing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
