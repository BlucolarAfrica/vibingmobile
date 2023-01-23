import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';

import { trackActions } from './Data';

import { Container, Divider, Header, Text, VirtualScroll } from 'components';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';
import { HomeRoutes, StackNavigationProps } from 'navigation';
import {
  checkAlbumType,
  convertToHoursAndMinutes,
  convertToMinutesAndSeconds,
  formatDate,
  getArtist,
  getTotalDuration,
} from 'utils';
import { AlbumProps } from 'data';

const { window, fonts, spacing } = layout;

const SIZE = window.width * 0.5;

export default function TrackList({
  navigation,
  route,
}: StackNavigationProps<HomeRoutes, 'TrackList'>): JSX.Element {
  const { album, artist, artwork, date, duration, genre, tracks } =
    route.params.album;

  const [active, setActive] = useState<AlbumProps['tracks'][0]['id']>('');

  return (
    <>
      <Header />
      <VirtualScroll>
        <Container>
          <View style={styles.cover}>
            <Icon name="music-outline" size={SIZE * 0.25} />
            <Image
              style={styles.image}
              source={{
                uri: artwork,
              }}
            />
          </View>
          <Divider space="xl" />
          <Text
            variant="bold"
            size={album.length > 20 ? fonts.body : fonts.title3}>
            {album}
          </Text>
          <Divider space="s" />
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Text
              size={getArtist(artist).length > 15 ? fonts.callout : fonts.body}>
              {checkAlbumType(duration)} {'\u2022'}{' '}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ArtistPage')}>
              <Text
                size={
                  getArtist(artist).length > 15 ? fonts.callout : fonts.body
                }>
                {getArtist(artist)}
              </Text>
            </TouchableOpacity>
          </View>
          <Divider space="s" />
          <Text size={fonts.subhead}>
            {tracks.length} Songs.{' '}
            {convertToHoursAndMinutes(getTotalDuration(tracks))}
          </Text>
          <Divider />
          <View style={styles.row}>
            {trackActions.map((item, index) => {
              return (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  activeOpacity={0.8}
                  key={index}>
                  <Icon name={item.icon} />
                </TouchableOpacity>
              );
            })}
          </View>
          <Divider space="xl" />
          <FlatList
            data={tracks}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setActive(item.id);
                  }}
                  onLongPress={() => {
                    console.log('Long Pressed');
                  }}
                  activeOpacity={0.7}
                  style={[styles.track, styles.row]}>
                  <View style={[styles.row]}>
                    <Text color={pallets.darkGrey} size={fonts.caption1}>
                      {index + 1}
                    </Text>
                    <View style={[{ marginLeft: spacing.m4 }]}>
                      <Text variant="bold">{item.title}</Text>
                      <Divider space="s" />
                      <Text color={pallets.grey} size={fonts.subhead}>
                        {convertToMinutesAndSeconds(item.duration)}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.row]}>
                    {active === item.id && (
                      <Icon
                        name="music-circle-outline"
                        size={20}
                        color={pallets.primary}
                      />
                    )}
                    <TouchableOpacity style={styles.icon}>
                      <Icon name="more" color={pallets.border} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Divider space="xl" />
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View>
              <Text variant="bold" size={fonts.subhead}>
                {formatDate(date)}
              </Text>
              <Divider space="s" />
              <Text size={fonts.callout}>{genre}</Text>
            </View>
            <View style={[styles.artist]}>
              <Image source={{ uri: artwork }} style={styles.artistImg} />
            </View>
          </View>
        </Container>
      </VirtualScroll>
    </>
  );
}

const styles = StyleSheet.create({
  artist: {
    alignItems: 'center',
  },
  artistImg: {
    borderRadius: 20,
    height: 34,
    marginBottom: spacing.s,
    width: 34,
  },
  cover: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: pallets.backgroundDarker,
    height: SIZE,
    justifyContent: 'center',
    width: SIZE,
  },
  icon: {
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    marginLeft: spacing.s,
    width: 30,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  separator: {
    alignSelf: 'center',
    backgroundColor: pallets.border,
    height: 1,
    opacity: 0.1,
    width: '100%',
  },
  track: {
    borderRadius: 5,
    justifyContent: 'space-between',
    padding: spacing.m,
    paddingHorizontal: spacing.s,
  },
});
