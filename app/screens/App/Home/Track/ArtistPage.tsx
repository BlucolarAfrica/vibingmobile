import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { layout, pallets } from 'constant';
import { Icon } from 'assets';
import {
  AlbumCard,
  Divider,
  SectionTitle,
  Text,
  TrackCard,
  VirtualScroll,
} from 'components';
import { formatNumber } from 'utils';
import { albums } from 'data';

const { window, fonts, spacing, cards } = layout;

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
        </View>
        <TouchableOpacity style={styles.button}>
          <Text variant="bold" size={fonts.subhead}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[{ padding: spacing.padding, paddingTop: BUTTON_HEIGHT / 2 }]}>
        <Divider space="xl" />
        <View>
          <Text variant="bold" size={fonts.title3 - 2}>
            Popular
          </Text>
          <Divider space="xl" />
          <FlatList
            data={albums[0]?.tracks.slice(0, 4)}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item, index }) => {
              return (
                <TrackCard
                  active={false}
                  duration={item.duration}
                  title={item.title}
                  trackNumber={index + 1}
                  variant="album"
                />
              );
            }}
          />
        </View>
      </View>
      <SectionTitle title="Albums" hideRightText />
      <Divider />
      <FlatList
        data={albums}
        decelerationRate="fast"
        snapToInterval={cards.cardSize + spacing.padding}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<View style={{ width: spacing.padding }} />}
        ListFooterComponent={<View style={{ width: spacing.padding }} />} //comment out
        renderItem={({ item, index }) => {
          const last = index === albums.length - 1;

          return (
            <AlbumCard
              marginRight={last ? 0 : spacing.padding}
              imgUrl={item.artwork}
              subtitle={item.artist}
              title={item.album}
            />
          );
        }}
      />
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
    zIndex: 2,
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
    overflow: 'visible',
    paddingHorizontal: spacing.padding,
    zIndex: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: pallets.black,
    opacity: 0.5,
  },
  separator: {
    alignSelf: 'center',
    backgroundColor: pallets.border,
    height: 1,
    opacity: 0.1,
    width: '100%',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -2,
  },
});
