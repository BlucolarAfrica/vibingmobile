import { StyleSheet, View } from 'react-native';

import { Divider, Text } from 'components';
import { layout, pallets } from 'constant';
import { useHeaderHeight } from 'hooks';

interface Props {
  title: string;
  description: string;
  last?: boolean;
  onPress: () => void;
  onSkipPress: () => void;
  index: number;
  length: number;
  width: number;
}

const { spacing, fonts } = layout;

export default function SlideFooter({
  description,
  title,
  onSkipPress,
  last,
  index,
  length,
  onPress,
}: Props): JSX.Element | null {
  const { insets } = useHeaderHeight();

  return (
    <View style={styles.container}>
      <View>
        <Divider space="xl" />
        <Text variant="bold">
          {index + 1} of {length}
        </Text>
        <Divider space="xl" />
        <Text size={fonts.title3} variant="bold">
          {title}
        </Text>
        <Divider space="m" />
        <Text>{description}</Text>
      </View>
      <View style={[styles.row, { marginBottom: insets.bottom + 16 || 0 }]}>
        <Text onPress={onSkipPress} variant="bold">
          Skip
        </Text>
        <Text
          variant="bold"
          color={last ? pallets.primary : undefined}
          {...{ onPress }}>
          {last ? 'Get Started' : 'Next'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.padding,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
