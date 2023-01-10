import { useRef } from 'react';
import { TextInput } from 'react-native';

import {
  ActionText,
  Container,
  Divider,
  Form,
  FormField,
  Header,
  Submit,
  Text,
  Title,
} from 'components';
import { layout } from 'constant';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import { useService, useSignUpMutation } from 'service';
import { nameValidationSchema as validationSchema } from 'utils';

const { fonts, spacing } = layout;

export default function Information({
  navigation,
  route,
}: StackNavigationProps<AuthRoutes, 'Information'>): JSX.Element {
  const device_name = 'Samsung';
  const { confirmPassword, email, password, phoneNumber } = route.params;
  const lastNameRef = useRef<TextInput>(null);
  const [signUp, { isError, isLoading, isSuccess, error }] =
    useSignUpMutation();

  useService({
    error,
    isError,
    isLoading,
    isSuccess,
    successEffect() {
      navigation.navigate('VerifyEmail', { device_name, email });
    },
  });

  return (
    <>
      <Header />
      <Container>
        <Title
          title="Sign Up"
          subtitle="Welcome to VibingLIVE, which will make accompany your mood for mix. Let's create account now"
        />
        <Text
          variant="bold"
          size={fonts.callout}
          style={{ alignSelf: 'flex-end', marginBottom: spacing.m }}>
          Step 2 of 2
        </Text>
        <Form
          {...{ validationSchema }}
          initialValues={{
            firstName: '',
            lastName: '',
          }}
          onSubmit={({ firstName, lastName }) => {
            signUp({
              device_name,
              email,
              full_name: `${firstName} ${lastName}`,
              gender: '',
              password: password,
              password_confirmation: confirmPassword,
              phone_number: phoneNumber,
            });
          }}>
          <FormField
            icon="user2-outline"
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            autoCorrect={false}
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => lastNameRef.current?.focus()}
          />
          <FormField
            ref={lastNameRef}
            icon="user2-outline"
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            autoCorrect={false}
            returnKeyLabel="Go"
            returnKeyType="go"
          />
          <Divider />
          <Submit label="Next" {...{ isLoading }} />
          <Divider />
          <ActionText
            action="Sign in"
            question="You have an account"
            onPress={() => navigation.navigate('Login')}
          />
        </Form>
      </Container>
    </>
  );
}
