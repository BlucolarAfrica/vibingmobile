import { StyleSheet, View } from 'react-native';

import { Text } from '../General';

import { layout, pallets } from 'constant';

interface Props {
  label: string;
  active?: boolean;
  marginRight?: number;
}

export default function Tag({
  label,
  active,
  marginRight,
}: Props): JSX.Element | null {
  return (
    <View
      style={[
        styles.container,
        active && styles.activeTag,
        !active && styles.inactiveTag,
        { marginRight },
      ]}>
      <Text variant="light" size={layout.fonts.subhead}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activeTag: {
    backgroundColor: pallets.primary,
    borderWidth: 0,
  },
  container: {
    alignItems: 'center',
    borderRadius: 45 / 2,
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inactiveTag: {
    backgroundColor: pallets.transparent,
    borderColor: pallets.primary,
    borderWidth: 1,
  },
});
