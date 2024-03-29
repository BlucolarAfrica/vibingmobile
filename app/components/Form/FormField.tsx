import { forwardRef } from 'react';
import { useFormikContext } from 'formik';
import { TextInput, TextInputProps } from 'react-native';

import FormInput from './FormInput';

export interface FieldKeys {
  accountNumber: string;
  address: string;
  brand: string;
  bvn: string;
  car: string;
  confirmPassword: string;
  confirmNewPassword: string;
  confirmPin: string;
  confirmNewPin: string;
  currentPassword: string;
  currentPin: string;
  date: string;
  email: string;
  firstName: string;
  issue: string;
  lastName: string;
  lga: string;
  location: string;
  locations: string;
  middleName: string;
  model: string;
  name: string;
  newPassword: string;
  newPin: string;
  oldPassword: string;
  oldPin: string;
  otherName: string;
  password: string;
  performance: string;
  phoneNumber: string;
}

interface FormFieldProps extends TextInputProps {
  name: keyof FieldKeys;
  label: string;
  labelColor?: string;
  icon?: IconName;
  onTextChange?: (text: string) => void;
  symbol?: string;
  disabled?: boolean;
  marginBottom?: number;
  note?: string;
  noteVisible?: boolean;
  rightIcon?: IconName;
  onRightIconPress?: () => void;
}

const FormField = forwardRef<TextInput, FormFieldProps>(
  (
    {
      icon,
      name,
      label,
      labelColor,
      symbol,
      onTextChange,
      rightIcon,
      onRightIconPress,
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
    // const error = Boolean(errors[name]);

    return (
      <>
        <FormInput
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
            icon,
            label,
            labelColor,
            marginBottom,
            onRightIconPress,
            ref,
            rightIcon,
            symbol,
          }}
          {...props}
        />
      </>
    );
  },
);

export default FormField;
