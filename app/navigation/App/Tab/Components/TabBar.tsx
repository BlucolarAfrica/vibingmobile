import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { pallets } from 'constant';
import { Text } from 'components';
import { Icon } from 'assets';
import { getTabIcon } from 'utils';
import { TabRoutes } from 'navigation';

export default function TabBar(props: BottomTabBarProps): JSX.Element | null {
  const { descriptors, insets, state, navigation } = props;

  return (
    <>
      {/* <View style={{ height: 60, borderWidth: 1 }} /> */}
      <View style={[styles.container, { paddingBottom: insets.bottom - 10 }]}>
        {state.routes.map((route, index) => {
          const options = descriptors[route.key]?.options;
          const isFocused = state.index === index;
          const label =
            options && options.title !== undefined ? options.title : route.name;
          const name = getTabIcon(
            route as unknown as RouteProp<TabRoutes, keyof TabRoutes>,
            isFocused,
          );

          const onPress = () => {
            const event = navigation.emit({
              canPreventDefault: true,
              target: route.key,
              type: 'tabPress',
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              navigation.navigate({ merge: true, name: route.name });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              target: route.key,
              type: 'tabLongPress',
            });
          };

          return (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options?.tabBarAccessibilityLabel}
              testID={options?.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.box}>
              <Icon
                name={name}
                color={isFocused ? pallets.primary : pallets.lightGrey}
              />
              <Text
                variant={'light'}
                style={{ paddingTop: 8 }}
                size={10}
                color={isFocused ? pallets.primary : pallets.lightGrey}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  container: {
    borderColor: `${pallets.white}1A`,
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
});
