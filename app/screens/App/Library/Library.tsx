import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import {
  AlbumCard,
  Container,
  Divider,
  Header,
  SectionTitle,
  Text,
  Title,
  VirtualScroll,
} from 'components';
import { albums, librarySection } from 'data';
import { Icon } from 'assets';
import { layout, pallets } from 'constant';

const { fonts, window, spacing, cards } = layout;

const SIZE = (window.width - spacing.padding * 2) * 0.3;
const MARGIN = (window.width - spacing.padding * 2) * 0.05;

console.log(SIZE, MARGIN);
// console.log(window.width - spacing.padding * 2);

//Size of the card totals window width - padding * 2 / 3
//I might need to revisit this component to make sure that the spacing works

export default function Library(): JSX.Element {
  return (
    <>
      <Header hideBackIcon />
      <VirtualScroll>
        <Container style={{ paddingVertical: 0 }}>
          <Divider />
          <Title title="My Library" />
          <FlatList
            data={librarySection}
            keyExtractor={(_, i) => i.toString()}
            numColumns={3}
            columnWrapperStyle={
              {
                // justifyContent: 'space-between',
              }
            }
            renderItem={({ item }) => {
              return (
                <TouchableOpacity activeOpacity={0.5} style={styles.library}>
                  <View style={styles.box}>
                    <Icon name={item.icon} color={item.color} size={32} />
                  </View>
                  <Divider space="s" />
                  <Text
                    numberOfLines={2}
                    variant="bold"
                    size={fonts.subhead}
                    style={{ flex: 1 }}
                    textAlign="center">
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </Container>
        <Divider space="xl" />
        <SectionTitle title="Top Mixes" hideRightText />
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
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: pallets.backgroundSecondary,
    borderRadius: 24,
    height: SIZE,
    justifyContent: 'center',
    overflow: 'hidden',
    width: SIZE,
  },
  library: {
    marginBottom: 20,
    marginRight: MARGIN,
    width: SIZE,
  },
});
