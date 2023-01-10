import { useState } from 'react';

import {
  Container,
  Divider,
  Form,
  FormField,
  Header,
  Submit,
  Title,
} from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import { useSendResetOTPMutation, useService } from 'service';
import { forgotPasswordValidationSchema as validationSchema } from 'utils';

export default function Forgot({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Forgot'>): JSX.Element {
  const device_name = 'Samsung';
  const [mail, setMail] = useState('');
  const [send, { isError, isLoading, isSuccess, reset, error }] =
    useSendResetOTPMutation();

  useService({
    error,
    isError,
    isLoading,
    isSuccess,
    reset() {
      reset();
    },
    successEffect() {
      navigation.navigate('VerifyReset', { device_name, email: mail });
    },
  });

  return (
    <>
      <Header />
      <Container>
        <Title
          title="Password"
          subtitle="Enter your registered email below to receive password reset link"
        />
        <Form
          {...{ validationSchema }}
          initialValues={{
            email: '',
          }}
          onSubmit={({ email }) => {
            setMail(email);

            send({
              device_name,
              email,
            });
          }}>
          <FormField
            icon="sms-outline"
            name="email"
            label="Email"
            placeholder="Enter email address"
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyLabel="Next"
            returnKeyType="next"
          />
          <Divider space="xl" />
          <Submit label="Submit" {...{ isLoading }} />
        </Form>
      </Container>
    </>
  );
}
