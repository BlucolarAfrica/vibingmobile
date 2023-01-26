import { FlatList, Image, StyleSheet, View } from 'react-native';

import { Container, Divider, Header, Text } from 'components';
import { NowPayingRoutes, StackNavigationProps } from 'navigation';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';
import { convertToMinutesAndSeconds, getArtist } from 'utils';

const { fonts, spacing } = layout;
const { width } = layout.window;

const SIZE = width - spacing.padding * 4;

export default function NowPlaying({
  route,
}: StackNavigationProps<NowPayingRoutes, 'NowPlaying'>): JSX.Element {
  const { tracks } = route.params;

  return (
    <>
      <Header icon="close" />
      <FlatList
        data={tracks}
        horizontal
        decelerationRate="fast"
        snapToInterval={width}
        renderItem={({ item }) => {
          return (
            <Container style={{ width }}>
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  justifyContent: 'space-around',
                  width: SIZE,
                }}>
                <View style={styles.cover}>
                  <Icon name="music-outline" size={SIZE * 0.5} />
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.artwork,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 0.5,
                  }}>
                  <View style={styles.row}>
                    <View style={{ flex: 0.8 }}>
                      <Text
                        variant="bold"
                        size={fonts.title3}
                        numberOfLines={1}>
                        {item.title}
                      </Text>
                      <Divider space="s" />
                      <Text numberOfLines={1}>{getArtist(item.artist)}</Text>
                    </View>
                    <Icon name="heart-outline" size={20} />
                  </View>
                  <Divider space="xl" />
                  <View>
                    <View>
                      <View
                        style={{
                          backgroundColor: pallets.darkGrey,
                          borderRadius: 1,
                          height: 2,
                          width: '100%',
                        }}
                      />
                      <Divider space="s" />
                      <View style={[styles.row]}>
                        <Text variant="light" size={fonts.subhead}>
                          {convertToMinutesAndSeconds(0)}
                        </Text>
                        <Text variant="light" size={fonts.subhead}>
                          {convertToMinutesAndSeconds(item.duration)}
                        </Text>
                      </View>
                    </View>
                    <Divider />
                    <View style={styles.row}>
                      <Icon name="shuffle" size={28} />
                      <Icon name="previous" size={28} />
                      <Icon name="pause" size={36} />
                      <Icon name="next" size={28} />
                      <Icon name="repeat" size={28} />
                    </View>
                  </View>
                </View>
              </View>
            </Container>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cover: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: pallets.backgroundDarker,
    height: SIZE,
    justifyContent: 'center',
    width: SIZE,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
