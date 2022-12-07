import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../General';
import { Divider } from '../Screen';

import { layout } from 'constant';

interface Props {
  title: string;
  subtitle: string;
  imgUrl: string;
  marginRight?: number;
  onPress?: () => void;
}

const { cards, fonts } = layout;

export default function Track({
  imgUrl,
  marginRight,
  subtitle,
  onPress,
  title,
}: Props): JSX.Element | null {
  return (
    <TouchableOpacity
      {...{ onPress }}
      activeOpacity={0.85}
      style={[styles.container, { marginRight }]}>
      <Image source={{ uri: imgUrl }} style={styles.cover} />
      <Divider space="s" />
      <Text variant="bold" size={fonts.subhead} numberOfLines={1}>
        {title}
      </Text>
      <Divider space="t" />
      <Text variant="light" size={fonts.caption2} numberOfLines={1}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: cards.cardSize,
  },
  cover: {
    height: cards.cardSize,
    width: cards.cardSize,
  },
});
