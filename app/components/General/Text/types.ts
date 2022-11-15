import { TextProps, TextStyle } from 'react-native';

export type TextStyleType = TextStyle | TextStyle[];

type Variants = 'heavy' | 'bold' | 'light' | 'medium';

type font =
  | 'Gilroy-Bold'
  | 'Gilroy-Heavy'
  | 'Gilroy-Light'
  | 'Gilroy-Medium'
  | 'Gilroy-Regular';

export interface Props extends TextProps {
  children: React.ReactNode;
  style?: TextStyleType;
  variant?: Variants;
  color?: string;
  size?: number;
  lineHeight?: number;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

export interface TextStyleProps {
  fontFamily?: font;
  fontSize?: number;
}
