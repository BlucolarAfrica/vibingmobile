import { useRef, useState } from 'react';
import { TextInput } from 'react-native';

import {
  Container,
  Divider,
  Form,
  FormField,
  Header,
  Submit,
  Title,
} from 'components';
import { useResetPasswordMutation, useService } from 'service';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import { resetPasswordValidationSchema as validationSchema } from 'utils';

export default function Reset({
  navigation,
  route,
}: StackNavigationProps<AuthRoutes, 'Reset'>): JSX.Element {
  const { device_name, email, session_id } = route.params;
  const confirmPasswordRef = useRef<TextInput>(null);
  const [showPass, setShowPass] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);

  const [resetPassword, { isError, isLoading, isSuccess, reset, error }] =
    useResetPasswordMutation();

  useService({
    error,
    isError,
    isLoading,
    isSuccess,
    reset() {
      reset();
    },
    successEffect() {
      navigation.navigate('Login');
    },
  });

  return (
    <>
      <Header />
      <Container>
        <Title
          title="Reset your password"
          subtitle="Enter a new password to continue"
        />
        <Form
          {...{ validationSchema }}
          initialValues={{
            confirmPassword: '',
            password: '',
          }}
          onSubmit={({ confirmPassword, password }) => {
            console.log(confirmPassword, password);
            resetPassword({
              device_name,
              email,
              password,
              password_confirmation: confirmPassword,
              session_id,
            });
          }}>
          <FormField
            icon="lock-outline"
            name="password"
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={showPass}
            autoCorrect={false}
            returnKeyLabel="Next"
            returnKeyType="next"
            rightIcon={showPass ? 'eye-outline' : 'eye-slash-outline'}
            onRightIconPress={() => setShowPass(i => !i)}
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
          />
          <FormField
            ref={confirmPasswordRef}
            icon="lock-outline"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Your Password"
            secureTextEntry={showConfirm}
            autoCorrect={false}
            returnKeyLabel="Go"
            returnKeyType="go"
            rightIcon={showConfirm ? 'eye-outline' : 'eye-slash-outline'}
            onRightIconPress={() => setShowConfirm(i => !i)}
          />
          <Divider space="xxl" />
          <Submit label="Reset" {...{ isLoading }} />
        </Form>
        <Divider />
      </Container>
    </>
  );
}
