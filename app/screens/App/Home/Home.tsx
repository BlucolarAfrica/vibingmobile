import { FlatList, Image, StyleSheet, View } from 'react-native';

import { Header } from './Components';

import {
  Container,
  Divider,
  SectionTitle,
  Tag,
  Text,
  TrackCard,
  VirtualScroll,
} from 'components';
import { albums, playlist, tags } from 'data';
import { layout, pallets } from 'constant';
import { AppRoutes, HomeRoutes, RootNavigationProp } from 'navigation';

const { spacing, cards, fonts } = layout;

export default function Home({
  navigation,
}: RootNavigationProp<AppRoutes, HomeRoutes, 'HomePage'>): JSX.Element {
  return (
    <>
      <Header />
      <VirtualScroll>
        <Container padding={0}>
          <Divider />
          <FlatList
            data={playlist}
            decelerationRate="fast"
            snapToInterval={cards.playlistWidth + spacing.padding}
            keyExtractor={(_, i) => i.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<View style={{ width: spacing.padding }} />}
            // ListFooterComponent={<View style={{ width: spacing.padding }} />}
            renderItem={({ item }) => {
              return (
                <View
                  style={[
                    styles.playlistBox,
                    { marginRight: spacing.padding },
                  ]}>
                  <Image source={{ uri: item.url }} style={styles.image} />
                  <View style={styles.playlist}>
                    <View style={styles.textBox}>
                      <Text variant="bold" size={fonts.subhead}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <Divider space="xl" />
          <FlatList
            data={tags}
            keyExtractor={i => i.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<View style={{ width: spacing.padding }} />}
            ListFooterComponent={<View style={{ width: spacing.padding }} />}
            renderItem={({ item, index }) => {
              return (
                <Tag
                  label={item.name}
                  active={index === 0}
                  marginRight={spacing.padding}
                />
              );
            }}
          />
          <Divider space="xl" />
          <SectionTitle title="DJ Mix" />
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
                <TrackCard
                  marginRight={last ? 0 : spacing.padding}
                  imgUrl={item.artwork}
                  subtitle={item.artist}
                  title={item.album}
                  onPress={
                    () => navigation.navigate('TrackList', { album: item }) //An example to the navigation of tracks screen
                  }
                />
              );
            }}
          />
          <Divider space="xl" />
          <SectionTitle title="Gospel Vibes" />
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
                <TrackCard
                  onPress={
                    () =>
                      navigation.navigate('Playing', {
                        params: { ...item },
                        screen: 'NowPlaying',
                      }) //An example of a navigation to the now playing screen
                  }
                  marginRight={last ? 0 : spacing.padding}
                  imgUrl={item.artwork}
                  subtitle={item.artist}
                  title={item.album}
                />
              );
            }}
          />
          <Divider space="xl" />
          <SectionTitle title="Afro Beats" />
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
                <TrackCard
                  marginRight={last ? 0 : spacing.padding}
                  imgUrl={item.artwork}
                  subtitle={item.artist}
                  title={item.album}
                />
              );
            }}
          />
          <Divider space="xl" />
        </Container>
      </VirtualScroll>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  playlist: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  playlistBox: {
    borderRadius: cards.playlistRadius,
    height: cards.playlistHeight,
    overflow: 'hidden',
    width: cards.playlistWidth,
  },
  textBox: {
    backgroundColor: `${pallets.primary}B3`,
    borderTopRightRadius: cards.playlistRadius,
    padding: spacing.padding / 2,
    position: 'absolute',
  },
});
