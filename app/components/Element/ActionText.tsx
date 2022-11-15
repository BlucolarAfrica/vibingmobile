import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../General';

import { layout, pallets } from 'constant';

interface ActionTextProps {
  onPress?: () => void;
  question: string;
  action: string;
}

const { fonts } = layout;

export default function ActionText({
  action,
  question,
  onPress,
}: ActionTextProps): JSX.Element | null {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...{ onPress }}
      style={styles.container}>
      <Text variant="bold" size={fonts.subhead}>
        {question}?{' '}
        <Text variant="bold" size={fonts.subhead} color={pallets.primary}>
          {action}
        </Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});
