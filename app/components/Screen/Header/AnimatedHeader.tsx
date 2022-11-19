import { useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../General';

import { layout, pallets } from 'constant';
import { useHeaderHeight } from 'hooks';
import { Icon } from 'assets';

interface Props {
  offset: SharedValue<number>;
  hideBackIcon?: boolean;
  label?: string;
}

const { padding } = layout.spacing;

export default function AnimatedHeader({
  offset,
  hideBackIcon,
  label,
}: Props): JSX.Element | null {
  const navigation = useNavigation();
  const [color, setColor] = useState(pallets.white);
  const { headerHeight, insets } = useHeaderHeight();
  // const HEADER_SIZE = headerHeight - insets.top;

  const handleBackIcon = () => navigation.canGoBack() && navigation.goBack();

  useAnimatedReaction(
    () => offset.value,
    current => {
      runOnJS(setColor)(current >= 300 ? pallets.black : pallets.white);
    },
  );

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      offset.value,
      [200, 300],
      [pallets.primary, pallets.white],
    ),
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    backgroundColor: offset.value < 0 ? pallets.primary : pallets.white,
  }));

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: interpolate(offset.value, [150, 300], [0, 1]),
  }));

  return (
    <>
      <Animated.View
        style={[
          {
            paddingTop: insets.top,
          },
          animatedStyle,
        ]}>
        <View
          style={[
            styles.header,
            {
              height: headerHeight - insets.top,
              paddingHorizontal: padding / 2,
            },
          ]}>
          {navigation.canGoBack() && !hideBackIcon && (
            <TouchableOpacity
              style={{ zIndex: 10 }}
              onPress={() => {
                console.log('PRESSED');
                handleBackIcon();
              }}>
              <Icon
                color={color}
                name={
                  Platform.OS === 'ios'
                    ? 'chevron-left-outline'
                    : 'arrow-left-outline'
                }
              />
            </TouchableOpacity>
          )}
          <Animated.View style={[styles.label, opacityStyle]}>
            <Text variant="bold">{label}</Text>
          </Animated.View>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            zIndex: -10,
          },
          backdropStyle,
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
});
