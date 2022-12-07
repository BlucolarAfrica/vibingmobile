import { StyleSheet, View } from 'react-native';

import { Text } from '../General';

import { layout } from 'constant';

interface Props {
  title: string;
  onPress?: () => void;
}

const { spacing, fonts } = layout;

export default function SectionTitle({
  title,
  onPress,
}: Props): JSX.Element | null {
  return (
    <View style={styles.container}>
      <Text variant="bold" size={fonts.title3}>
        {title}
      </Text>
      <Text variant="light" size={fonts.footnote} {...{ onPress }}>
        View All
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.padding,
  },
});
