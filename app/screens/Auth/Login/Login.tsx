import { useRef, useState } from 'react';
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
import { layout, pallets } from 'constant';
import { AuthRoutes, StackNavigationProps } from 'navigation';

const { fonts, spacing } = layout;

export default function Login({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Login'>): JSX.Element {
  const passwordRef = useRef<TextInput>(null);
  const [showPass, setShowPass] = useState(true);

  return (
    <>
      <Header />
      <Container>
        <Title
          title="Login"
          subtitle="Welcome back to VibingLIVE, it's time to listen to the music you want and enjoy the music!"
        />
        <Form
          initialValues={{
            confirmPassword: '',
            email: '',
            password: '',
            phoneNumber: '',
          }}
          onSubmit={values => {
            console.log(values);
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
            returnKeyLabel="Go"
            returnKeyType="go"
            rightIcon={showPass ? 'eye-outline' : 'eye-slash-outline'}
            onRightIconPress={() => setShowPass(i => !i)}
          />
          <Text
            onPress={() => navigation.navigate('Forgot')}
            variant="medium"
            size={fonts.caption1}
            color={pallets.primary}
            style={{ alignSelf: 'flex-end', marginBottom: spacing.m }}>
            Forgot password?
          </Text>
          <Divider />
          <Submit label="Next" />
          <Divider />
          <ActionText
            action="Sign up"
            question="Don't have an account"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </Form>
      </Container>
    </>
  );
}
