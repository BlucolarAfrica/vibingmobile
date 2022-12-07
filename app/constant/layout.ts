import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const xSmall = width < 325;
const small = width >= 325 && width < 350;
const medium = width >= 350 && width < 450;
const large = width >= 450;

export default {
  button: {
    height: 50,
    radius: 5,
    width: '100%',
  },
  cards: {
    cardRadius: 0,
    cardSize: 120,
    playlistHeight: 120,
    playlistRadius: 8,
    playlistWidth: width - 16 * 4,
    trackHeight: 0,
  },
  dimension: {
    isLandscape: height < width,
    isLargeDevice: large,
    isMediumDevice: medium,
    isPhone: width < 450,
    isPortrait: height > width,
    isSmallDevice: small,
    isSmallOrTiny: small || xSmall,
    isTablet: width >= 450,
    isTinyDevice: xSmall,
  },
  fonts: {
    body: xSmall ? 14 : small ? 15 : medium ? 16 : 17,
    callout: xSmall ? 13 : small ? 14 : medium ? 14 : 16,
    caption1: xSmall ? 11 : small ? 11 : 12,
    caption2: xSmall ? 11 : small ? 11 : 11,
    footnote: xSmall ? 12 : small ? 12 : 13,
    headline: xSmall ? 14 : small ? 15 : medium ? 16 : 17,
    subhead: xSmall ? 12 : small ? 13 : medium ? 14 : 15,
    title1: xSmall ? 22 : small ? 26 : 32,
    title2: xSmall ? 20 : small ? 22 : 24,
    title3: xSmall ? 18 : small ? 20 : 22,
  },
  input: {
    height: 50,
    inputBottom: 16,
    inputRadius: 8,
  },
  spacing: {
    l: 24,
    m: 16,
    m4: 20,
    padding: 16,
    s: 8,
    t: 4,
    xl: 32,
    xxl: 64,
  },
  window: {
    height,
    width,
  },
};
