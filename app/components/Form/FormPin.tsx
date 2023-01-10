import { StyleSheet, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';
import { useFormikContext } from 'formik';

import { Text } from '../General';

import { layout, pallets } from 'constant';

interface PinFieldKeys {
  pin: string;
  otp: string;
  confirmPin: string;
  code: string;
}

interface FormPinProps {
  name: keyof PinFieldKeys;
  onTextChange?: (text: string) => void;
  cellCount?: number;
}

const { body, footnote } = layout.fonts;

export default function FormPin({
  name,
  onTextChange,
  cellCount = 4,
}: FormPinProps): JSX.Element | null {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    handleSubmit,
    values,
  } = useFormikContext<PinFieldKeys>();

  const pinRef = useBlurOnFulfill({ cellCount, value: values[name] });

  const error = !!(errors[name] && touched[name]);

  return (
    <>
      <CodeField
        caretHidden={false}
        ref={pinRef}
        value={values[name]}
        onEndEditing={() => {
          values[name].length === cellCount && handleSubmit();
        }}
        onSubmitEditing={() => handleSubmit()}
        onChangeText={text => {
          setFieldValue(name, text);
          onTextChange?.(text);
        }}
        {...{ cellCount }}
        onBlur={() => setFieldTouched(name, true)}
        rootStyle={styles.container}
        keyboardType="number-pad"
        textContentType="password"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[
              styles.input,
              isFocused && {
                borderColor: pallets.primary,
                borderWidth: 1.5,
              },
              error && {
                borderColor: pallets.red,
                borderWidth: 1,
              },
            ]}>
            <Text size={body} variant="medium" color={pallets.font}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      {error && (
        <View style={styles.errorBox}>
          <Text size={footnote} color={pallets.red}>
            {errors[name]}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorBox: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  input: {
    alignItems: 'center',
    backgroundColor: pallets.input,
    borderRadius: layout.input.inputRadius,
    height: layout.input.height,
    justifyContent: 'center',
    margin: 10,
    width: layout.input.height,
  },
});
