import { Text as RNText } from 'react-native';

import { Props, TextStyleProps, TextStyleType } from './types';

import { layout, pallets } from 'constant';

const { fonts } = layout;

export default function Text({
  children,
  style,
  color,
  variant,
  size,
  lineHeight,
  textTransform,
  textAlign,
  ...props
}: Props): JSX.Element {
  let textStyle: TextStyleProps = {};

  const defaultStyle: TextStyleType = {
    color: color ? color : pallets.font,
    lineHeight: lineHeight ? lineHeight : undefined,
  };

  switch (variant) {
    case 'heavy':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Gilroy-Heavy',
        fontSize: size ? size : fonts.body,
      };
      break;
    case 'medium':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Gilroy-Medium',
        fontSize: size ? size : fonts.body,
      };
      break;
    case 'bold':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Gilroy-Bold',
        fontSize: size ? size : fonts.body,
      };
      break;
    case 'light':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Gilroy-Light',
        fontSize: size ? size : fonts.body,
      };
      break;
    default:
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Gilroy-Regular',
        fontSize: size ? size : fonts.body,
      };
  }

  return (
    <RNText style={[textStyle, { textAlign, textTransform }, style]} {...props}>
      {children}
    </RNText>
  );
}
