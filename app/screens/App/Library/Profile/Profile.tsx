import { Image, StyleSheet, View } from 'react-native';

import { accountSection, settingSection } from './Data';

import {
  Container,
  Divider,
  Header,
  SectionCard,
  Text,
  VirtualScroll,
} from 'components';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';

const { spacing, image, fonts } = layout;

const avatarSize = image.avatarSize;

export default function Profile(): JSX.Element {
  return (
    <>
      <Header label="Your Account" />
      <VirtualScroll>
        <Container>
          <View style={[styles.row]}>
            <View style={[styles.avatarBox]}>
              <Icon name="user" />
              <View style={[styles.avatarBorder]} />
              <Image
                source={{
                  uri: 'https://source.unsplash.com/vp9mRauo68c/1000x1000',
                }}
                style={styles.avatar}
              />
            </View>
            <View style={[{ marginLeft: spacing.l }]}>
              <Text variant="bold">Lade Toye</Text>
              <Divider space="s" />
              <Text variant="bold" size={fonts.subhead} color={pallets.primary}>
                View Profile
              </Text>
            </View>
          </View>
          <Divider space="xl" />
          <Text
            variant="bold"
            size={fonts.caption1}
            color={pallets.primary}
            textTransform="uppercase">
            Account
          </Text>
          <Divider />
          {accountSection.map((item, index) => {
            const last = index === accountSection.length - 1;

            return (
              <SectionCard
                key={index}
                title={item.title}
                marginBottom={last ? 0 : undefined}
                onPress={() => {
                  if (item.route) {
                    console.log(item.route);
                  }
                }}
              />
            );
          })}
          <Divider space="xl" />
          <Text
            variant="bold"
            size={fonts.caption1}
            color={pallets.primary}
            textTransform="uppercase">
            Settings
          </Text>
          <Divider />
          {settingSection.map((item, index) => {
            const last = index === settingSection.length - 1;

            return (
              <SectionCard
                key={index}
                title={item.title}
                marginBottom={last ? 0 : undefined}
                onPress={() => {
                  if (item.route) {
                    console.log(item.route);
                  }
                }}
              />
            );
          })}
        </Container>
      </VirtualScroll>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  avatarBorder: {
    borderRadius: avatarSize / 2,
    borderWidth: 1,
    bottom: 2.5,
    height: avatarSize - 5,
    left: 2.5,
    opacity: 0.4,
    position: 'absolute',
    right: 2.5,
    width: avatarSize - 5,
    zIndex: 2,
  },
  avatarBox: {
    alignItems: 'center',
    backgroundColor: pallets.backgroundDarker,
    borderRadius: avatarSize / 2,
    height: avatarSize,
    justifyContent: 'center',
    overflow: 'hidden',
    width: avatarSize,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
