import { StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { layout, pallets } from 'constant';

const { width } = layout.window;

interface PaginatorProps {
  index: number;
  translateX: Animated.SharedValue<number>;
}

function Paginator({ index, translateX }: PaginatorProps): JSX.Element | null {
  const reanimatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.15, 1, 0.15],
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      translateX.value,
      inputRange,
      [1, 1.25, 1],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });
  return <Animated.View style={[styles.container, reanimatedStyle]} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallets.primary,
    borderRadius: 4,
    height: 8,
    marginHorizontal: 4,
    width: 8,
  },
});

export default Paginator;
