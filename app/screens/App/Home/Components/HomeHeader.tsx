import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Divider, Text } from 'components';
import { useHeaderHeight } from 'hooks';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';

const { spacing, fonts } = layout;

export default function HomeHeader(): JSX.Element | null {
  const { insets, headerHeight } = useHeaderHeight();

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
          <Text variant="medium">Peter Dury</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.iconBox]}
          accessibilityLabel="Notification"
          accessibilityRole="button">
          <Icon name="notification-outline" size={20} />
        </TouchableOpacity>
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
