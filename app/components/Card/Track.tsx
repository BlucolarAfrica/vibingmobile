import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Icon } from 'assets';
import { Text } from 'components/General';
import { Divider } from 'components/Screen';
import { layout, pallets } from 'constant';
import { convertToMinutesAndSeconds } from 'utils';

interface AlbumTrackProps {
  active: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  title: string;
  duration: number;
  trackNumber: number;
  variant: 'album';
}
interface TrackProps {
  active: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  title: string;
  duration: number;
  trackNumber: number;
  variant: 'track';
}

type Props = AlbumTrackProps | TrackProps;

const { fonts, spacing } = layout;

export default function Track({
  active,
  onPress,
  duration,
  trackNumber,
  title,
  onLongPress,
}: Props): JSX.Element | null {
  return (
    <TouchableOpacity
      {...{ onLongPress, onPress }}
      activeOpacity={0.7}
      style={[styles.track, styles.row]}>
      <View style={[styles.row]}>
        <Text color={pallets.darkGrey} size={fonts.caption1}>
          {trackNumber}
        </Text>
        <View style={[{ marginLeft: spacing.m4 }]}>
          <Text variant="bold">{title}</Text>
          <Divider space="s" />
          <Text color={pallets.grey} size={fonts.subhead}>
            {convertToMinutesAndSeconds(duration)}
          </Text>
        </View>
      </View>
      <View style={[styles.row]}>
        {active && (
          <Icon name="music-circle-outline" size={20} color={pallets.primary} />
        )}
        <TouchableOpacity style={styles.icon}>
          <Icon name="more" color={pallets.border} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  //   cover: {
  //     alignItems: 'center',
  //     alignSelf: 'center',
  //     backgroundColor: pallets.backgroundDarker,
  //     height: SIZE,
  //     justifyContent: 'center',
  //     width: SIZE,
  //   },
  icon: {
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    marginLeft: spacing.s,
    width: 30,
  },
  //   image: {
  //     ...StyleSheet.absoluteFillObject,
  //     height: undefined,
  //     width: undefined,
  //   },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  track: {
    borderRadius: 5,
    justifyContent: 'space-between',
    padding: spacing.m,
    paddingHorizontal: spacing.s,
  },
});
