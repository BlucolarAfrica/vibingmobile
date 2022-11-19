import {
  ActionText,
  Container,
  Divider,
  Form,
  FormField,
  Header,
  Submit,
  Title,
} from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';

export default function Forgot({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Forgot'>): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <Title
          title="Password"
          subtitle="Enter your registered email below to receive password reset link"
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
            navigation.navigate('Reset');
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
          <Divider />
          <Submit label="Submit" />
          <Divider />
          <ActionText
            action=""
            question="Back to Login"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </Form>
      </Container>
    </>
  );
}
