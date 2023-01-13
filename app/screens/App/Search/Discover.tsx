import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { SearchInput } from './Components';

import {
  Container,
  Divider,
  Header,
  Text,
  Title,
  VirtualScroll,
} from 'components';
import { AppRoutes, RootNavigationProp, SearchRoutes } from 'navigation';
import { discovery } from 'data';
import { layout } from 'constant';

const { cards, fonts } = layout;

export default function Discover({
  navigation,
}: RootNavigationProp<AppRoutes, SearchRoutes, 'Discover'>): JSX.Element {
  return (
    <>
      <Header hideBackIcon />
      <VirtualScroll>
        <Container>
          <Title title="Discovery" />
          <SearchInput onPress={() => navigation.navigate('SearchPage')} />
          <Divider space="xl" />
          <FlatList
            data={discovery}
            keyExtractor={(_, i) => i.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity activeOpacity={0.9} style={styles.genre}>
                  <Image style={styles.genreImage} source={{ uri: item.url }} />
                  <Divider space="s" />
                  <Text variant="bold" size={fonts.subhead}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </Container>
      </VirtualScroll>
    </>
  );
}

const styles = StyleSheet.create({
  genre: {
    marginBottom: 20,
    width: '48%',
  },
  genreImage: {
    borderRadius: 8,
    height: cards.genreHeight,
    overflow: 'hidden',
  },
});
