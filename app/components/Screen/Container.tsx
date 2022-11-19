import { StyleSheet, View, ViewProps } from 'react-native';

import { layout } from 'constant';

const { padding: PD } = layout.spacing;

interface Props extends ViewProps {
  children?: React.ReactNode;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  style?: ViewProps['style'];
  padding?: number;
  backgroundColor?: string;
}

export default function Container({
  alignItems,
  children,
  style,
  padding = PD,
  ...props
}: Props): JSX.Element | null {
  return (
    <View
      style={[
        { padding },
        style,
        styles.container,
        {
          alignItems,
          // backgroundColor: backgroundColor || color.background,
        },
      ]}
      {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
