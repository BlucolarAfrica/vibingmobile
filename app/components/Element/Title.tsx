import { View } from 'react-native';

import { Text } from '../General';
import { Divider } from '../Screen';

import { layout } from 'constant';

interface TitleProps {
  title: string;
  subtitle?: string;
  marginBottom?: number;
  color?: string;
  marginTop?: number;
}

const { fonts } = layout;

export default function Title({
  title,
  subtitle,
  // marginTop = layout.spacing.xl / 2,
  marginBottom = layout.spacing.xl,
  color,
}: TitleProps): JSX.Element | null {
  return (
    <View style={{ marginBottom }}>
      <Text variant="bold" size={fonts.title2} {...{ color }}>
        {title}
      </Text>
      <Divider />
      {subtitle && (
        <Text size={fonts.subhead} lineHeight={20} {...{ color }}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}
