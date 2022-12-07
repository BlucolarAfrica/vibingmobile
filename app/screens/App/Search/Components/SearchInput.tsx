import { StyleSheet, TouchableOpacity } from 'react-native';

import { layout, pallets } from 'constant';
import { Icon } from 'assets';
import { Text } from 'components';

interface Props {
  onPress: () => void;
}

const { input, spacing, fonts } = layout;

export default function SearchInput({ onPress }: Props): JSX.Element | null {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      {...{ onPress }}
      style={styles.container}>
      <Icon name="search-outline" color={pallets.fontPlaceholder} size={20} />
      <Text
        style={{ marginLeft: 8 }}
        color={pallets.fontPlaceholder}
        variant="light"
        size={fonts.callout}>
        Search
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: pallets.input,
    borderRadius: input.inputRadius,
    flexDirection: 'row',
    height: input.height,
    overflow: 'hidden',
    paddingHorizontal: spacing.s,
  },
});
