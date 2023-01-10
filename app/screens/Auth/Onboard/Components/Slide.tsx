import { Image, StyleSheet, View } from 'react-native';

import { pallets } from 'constant';

interface SlideProps {
  image: number;
  index: number;
  width: number;
}

export default function Slide({ image, width }: SlideProps): JSX.Element {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.overlay} />
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: pallets.black,
    opacity: 0.6,
    zIndex: 1,
  },
});
