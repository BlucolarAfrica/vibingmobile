import { forwardRef } from 'react';
import { useFormikContext } from 'formik';
import { TextInput, TextInputProps } from 'react-native';

import FormPhoneInput from './FormPhoneInput';

export interface FieldKeys {
  phoneNumber: string;
}

interface FormFieldProps extends TextInputProps {
  name: keyof FieldKeys;
  label: string;
  labelColor?: string;
  onTextChange?: (text: string) => void;
  symbol?: string;
  disabled?: boolean;
  marginBottom?: number;
  note?: string;
  noteVisible?: boolean;
}

const FormField = forwardRef<TextInput, FormFieldProps>(
  (
    {
      name,
      label,
      labelColor,
      symbol,
      onTextChange,
      disabled,
      note,
      noteVisible,
      marginBottom,
      ...props
    }: FormFieldProps,
    ref,
  ): JSX.Element | null => {
    const {
      setFieldTouched,
      setFieldValue,
      errors,
      touched,
      handleSubmit,
      values,
    } = useFormikContext<FieldKeys>();

    const error = !!(errors[name] && touched[name]);

    return (
      <>
        <FormPhoneInput
          onChangeText={text => {
            setFieldValue(name, text);
            onTextChange?.(text);
          }}
          onBlur={() => {
            setFieldTouched(name);
          }}
          onSubmitEditing={() => handleSubmit()}
          errorMessage={errors[name]}
          {...{ note, noteVisible }}
          value={values[name]}
          {...{
            disabled,
            error,
            label,
            labelColor,
            marginBottom,
            ref,
            symbol,
          }}
          {...props}
        />
      </>
    );
  },
);

export default FormField;
