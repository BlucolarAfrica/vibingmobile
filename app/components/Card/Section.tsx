import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../General';

import { Icon } from 'assets';
import { layout } from 'constant';

interface Props {
  title: string;
  onPress?: () => void;
  marginBottom?: number;
}

export default function Section({
  title,
  onPress,
  marginBottom = layout.spacing.s,
}: Props): JSX.Element | null {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...{ onPress }}
      style={[styles.container, { marginBottom }]}>
      <Text>{title}</Text>
      <Icon name="chevron-right-outline" size={18} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
});
