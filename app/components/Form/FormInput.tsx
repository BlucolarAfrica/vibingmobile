import { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import { Text } from '../General';

import { layout, pallets } from 'constant';
import { Icon } from 'assets';

const { spacing, fonts, input } = layout;

interface Props extends TextInputProps {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: boolean;
  errorMessage?: string;
  marginBottom?: number;
  labelColor?: string;
  disabled?: boolean;
  valid?: boolean;
  note?: string;
  noteVisible?: boolean;
  placeholder?: string;
  icon?: IconName;
  rightIcon?: IconName;
  onRightIconPress?: () => void;
}

const FormInput = forwardRef<TextInput, Props>(function (
  {
    label,
    value,
    onChangeText,
    error,
    labelColor,
    marginBottom = spacing.m,
    errorMessage,
    icon,
    disabled,
    rightIcon,
    onRightIconPress,
    note,
    noteVisible,
    placeholder,
    ...props
  }: Props,
  ref,
): JSX.Element | null {
  return (
    <>
      <Text
        variant="medium"
        size={fonts.subhead}
        color={error ? pallets.red : pallets.font}
        style={{
          marginBottom: spacing.s,
        }}>
        {label}
      </Text>
      <View
        style={[
          styles.container,
          {
            borderColor: error ? pallets.red : undefined,
            borderWidth: error ? 1 : undefined,
          },
        ]}>
        {icon && (
          <Icon
            name={icon}
            size={16}
            style={{ marginRight: spacing.s }}
            color={pallets.fontPlaceholder}
          />
        )}
        <TextInput
          editable={!disabled}
          placeholder={placeholder || label}
          placeholderTextColor={labelColor || pallets.fontPlaceholder}
          style={[
            styles.input,
            {
              color: pallets.font,
              fontFamily: 'Gilroy-Regular',
            },
          ]}
          {...{ onChangeText, ref, value, ...props }}
        />
        {rightIcon && (
          <TouchableOpacity activeOpacity={0.7} onPress={onRightIconPress}>
            <Icon name={rightIcon} size={16} />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom,
          marginTop: noteVisible || error ? 10 : 0,
        }}>
        {error && (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon
              name="info"
              size={16}
              style={{ marginRight: 4 }}
              color={pallets.red}
            />
            <Text size={fonts.footnote} style={{}} color={pallets.red}>
              {errorMessage}
            </Text>
          </View>
        )}
        {noteVisible && !error && (
          <View style={styles.note}>
            <Text variant="bold" size={fonts.subhead} color={pallets.primary}>
              {note}
            </Text>
          </View>
        )}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: pallets.input,
    borderRadius: input.inputRadius,
    flexDirection: 'row',
    height: input.height,
    overflow: 'hidden',
    paddingHorizontal: spacing.m,
  },
  input: {
    flex: 1,
  },
  note: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default FormInput;
