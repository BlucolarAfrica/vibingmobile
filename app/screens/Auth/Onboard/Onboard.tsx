import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';

import { Paginator, Slide, SlideFooter } from './Components';

import { images } from 'assets';
import { layout } from 'constant';
import { setOnboarded, useDispatch } from 'store';
const { width, height } = layout.window;

type slideType = {
  description: string;
  image: number;
  title: string;
};

const SLIDE_HEIGHT = height * 0.55;

const slides: slideType[] = [
  {
    description:
      'We are the second to the most popular place to listen to music in the world',
    image: images.onboard[0],
    title: 'Welcome to VibingLive',
  },
  {
    description:
      'Manage your playlist of dope Dj mix, Audio books and best of Gospel musics to your liking.',
    image: images.onboard[1],
    title: 'Enjoy your music',
  },
  {
    description:
      'Manage your playlist of dope Dj mix, Audio books and best of Gospel musics to your liking.',
    image: images.onboard[2],
    title: 'Unlimited Downloads',
  },
];

export default function Onboard(): JSX.Element {
  const dispatch = useDispatch();

  const aref = useAnimatedRef<Animated.ScrollView>();
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const reanimatedFooterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          ref={aref}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
          scrollEventThrottle={1}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              image={slide.image}
              index={index}
              {...{ width }}
            />
          ))}
        </Animated.ScrollView>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <Paginator key={index} {...{ index, translateX }} />
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Animated.View
          style={[
            { flex: 1, flexDirection: 'row', width: width * slides.length },
            reanimatedFooterStyle,
          ]}>
          {slides.map(({ title, description }, index) => {
            const last = index === slides.length - 1;

            return (
              <SlideFooter
                key={index}
                index={index}
                length={slides.length}
                onSkipPress={() => {
                  dispatch(setOnboarded());
                  console.log('Get Started');
                }}
                onPress={() => {
                  if (last) {
                    dispatch(setOnboarded());
                    console.log('Get Started');
                  } else {
                    aref.current?.scrollTo({
                      animated: true,
                      x: width * (index + 1),
                    });
                  }
                }}
                {...{ description, last, title, width }}
              />
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  pagination: {
    alignItems: 'center',
    bottom: 0,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
  },
  slider: {
    height: SLIDE_HEIGHT,
  },
});
