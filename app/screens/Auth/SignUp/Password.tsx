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

const { fonts, spacing } = layout;

export default function Password({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Password'>): JSX.Element {
  const lastNumberRef = useRef<TextInput>(null);

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
          initialValues={{
            firstName: '',
            lastName: '',
          }}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('VerifyEmail');
          }}>
          <FormField
            icon="user2-outline"
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            autoCorrect={false}
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => lastNumberRef.current?.focus()}
          />
          <FormField
            icon="user2-outline"
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            autoCorrect={false}
            returnKeyLabel="Go"
            returnKeyType="go"
          />
          <Divider />
          <Submit label="Next" />
          <Divider />
          <ActionText action="Sign in" question="You have an account" />
        </Form>
      </Container>
    </>
  );
}
