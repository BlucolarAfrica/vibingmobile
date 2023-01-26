import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Divider, Text } from 'components';
import { useHeaderHeight } from 'hooks';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';
import { useSelector } from 'store';

const { spacing, fonts } = layout;

interface Props {
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
}

export default function HomeHeader({
  onNotificationPress,
  onProfilePress,
}: Props): JSX.Element | null {
  const { insets, headerHeight } = useHeaderHeight();
  const { user } = useSelector(state => state.auth);

  return (
    <>
      <View
        style={{
          backgroundColor: pallets.transparent,
          height: insets.top,
        }}
      />
      <View
        style={[
          styles.header,
          {
            backgroundColor: pallets.transparent,
            height: headerHeight + 16 - insets.top,
            paddingHorizontal: spacing.padding,
          },
        ]}>
        <View>
          <Text
            color={pallets.fontPlaceholder}
            variant="light"
            size={fonts.subhead}>
            Good Morning
          </Text>
          <Divider space="t" />
          <Text variant="medium">{user?.full_name || 'User'}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={onNotificationPress}
            activeOpacity={0.8}
            style={[styles.iconBox]}
            accessibilityLabel="Notification"
            accessibilityRole="button">
            <Icon name="notification-outline" size={20} />
          </TouchableOpacity>
          <Divider horizontal space="s" />
          <TouchableOpacity
            onPress={onProfilePress}
            activeOpacity={0.8}
            style={[styles.iconBox]}
            accessibilityLabel="Notification"
            accessibilityRole="button">
            <Icon name="profile-circle-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBox: {
    alignItems: 'center',
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
});
