import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { layout, pallets } from 'constant';
import { Icon } from 'assets';
import { Divider, Text, VirtualScroll } from 'components';
import { formatNumber } from 'utils';

const { window, fonts, spacing } = layout;

const HEADER_HEIGHT = window.height * 0.4;
const BUTTON_HEIGHT = 44;

export default function ArtistPage(): JSX.Element {
  return (
    <VirtualScroll bounces={false}>
      <View style={[styles.header]}>
        <View style={styles.overlay} />
        <View style={styles.underlay}>
          <Icon name="user" color={pallets.backgroundSecondary} size={50} />
        </View>
        <Image
          style={[styles.coverImage]}
          source={{ uri: 'https://source.unsplash.com/nd-Rxlxy7Qk' }}
        />
        <View style={styles.details}>
          <Text textTransform="uppercase" variant="bold" size={fonts.title2}>
            Peter Dury
          </Text>
          <Divider space="s" />
          <Text
            variant="bold"
            size={fonts.caption1}
            textTransform="uppercase"
            color={pallets.fontPlaceholder}>
            {formatNumber(2983435)} Monthly Listeners
          </Text>
          <Divider />
          <TouchableOpacity style={styles.button}>
            <Text variant="bold" size={fonts.subhead}>
              Follow
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container} />
    </VirtualScroll>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderColor: pallets.primary,
    borderRadius: 12,
    borderWidth: 2,
    height: BUTTON_HEIGHT,
    justifyContent: 'center',
    marginBottom: -BUTTON_HEIGHT / 2,
    width: window.width * 0.4,
  },
  container: {
    flex: 1,
  },
  coverImage: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
    zIndex: -1,
  },
  details: {},
  header: {
    backgroundColor: pallets.backgroundDarker,
    height: HEADER_HEIGHT,
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.padding,
    zIndex: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: pallets.black,
    opacity: 0.5,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -2,
  },
});
