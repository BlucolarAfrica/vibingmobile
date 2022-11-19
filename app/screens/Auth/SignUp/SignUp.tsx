import { useRef, useState } from 'react';
import { TextInput } from 'react-native';

import {
  ActionText,
  Container,
  Divider,
  Form,
  FormField,
  FormPhoneField,
  Header,
  Submit,
  Text,
  Title,
} from 'components';
import { layout } from 'constant';
import { AuthRoutes, StackNavigationProps } from 'navigation';

const { fonts, spacing } = layout;

export default function SignUp({
  navigation,
}: StackNavigationProps<AuthRoutes, 'SignUp'>): JSX.Element {
  const phoneNumberRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const [showPass, setShowPass] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);

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
          Step 1 of 2
        </Text>
        <Form
          initialValues={{
            confirmPassword: '',
            email: '',
            password: '',
            phoneNumber: '',
          }}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('Password');
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
            onSubmitEditing={() => phoneNumberRef.current?.focus()}
          />
          <FormPhoneField
            ref={phoneNumberRef}
            name="phoneNumber"
            label="Phone Number"
            placeholder="9011110000"
            keyboardType="number-pad"
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <FormField
            ref={passwordRef}
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
          <Divider />
          <Submit label="Next" />
          <Divider />
          <ActionText
            action="Sign in"
            question="You have an account"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </Form>
      </Container>
    </>
  );
}
