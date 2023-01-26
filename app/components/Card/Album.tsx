import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from '../General';
import { Divider } from '../Screen';

import { layout, pallets } from 'constant';
import { Icon } from 'assets';
import { getArtist } from 'utils';

interface Props {
  title: string;
  subtitle: string | string[];
  imgUrl: string;
  marginRight?: number;
  onPress?: () => void;
}

const { cards, fonts } = layout;

export default function Album({
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
      <View style={styles.cover}>
        <Icon name="music-note-outline" />
        <Image source={{ uri: imgUrl }} style={styles.image} />
      </View>
      <Divider space="s" />
      <Text variant="bold" size={fonts.subhead} numberOfLines={1}>
        {title}
      </Text>
      <Divider space="t" />
      <Text variant="light" size={fonts.caption2} numberOfLines={1}>
        {getArtist(subtitle)}
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
    alignItems: 'center',
    backgroundColor: pallets.backgroundDarker,
    height: cards.cardSize,
    justifyContent: 'center',
    width: cards.cardSize,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
});
