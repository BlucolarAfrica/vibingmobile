import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../General';

import { layout, pallets } from 'constant';

interface ActionTextProps {
  onPress?: () => void;
  question: string;
  action: string;
  isLoading?: boolean;
}

const { fonts } = layout;

export default function ActionText({
  action,
  question,
  onPress,
  isLoading,
}: ActionTextProps): JSX.Element | null {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      {...{ onPress }}
      style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color={pallets.primary} />
      ) : (
        <Text variant="bold" size={fonts.subhead}>
          {question}?{' '}
          <Text variant="bold" size={fonts.subhead} color={pallets.primary}>
            {action}
          </Text>
        </Text>
      )}
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
