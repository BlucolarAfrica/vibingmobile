import { openInbox } from 'react-native-email-link';

import {
  // ActionText,
  Button,
  Container,
  Divider,
  Form,
  FormPin,
  Header,
  Submit,
  Title,
} from 'components';

const openEmail = async () => {
  try {
    await openInbox();
  } catch (error) {
    console.log(error);
  }
};

export default function VerifyEmail(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <Title
          title="Verify your email"
          subtitle="Hi Lade! account verification link has been sent to your email address lad****@gmail.com "
        />
        <Form
          initialValues={{ pin: '' }}
          onSubmit={({ pin }) => {
            console.log(pin);
          }}>
          <FormPin name="pin" />
          <Divider space="xxl" />
          <Submit label="Verify" />
          <Divider />
          <Button variant="outline" label="Resend" />
          <Divider />
          <Button
            variant="transparent"
            label="Open Email"
            onPress={openEmail}
          />
          {/* <ActionText action="Resend" question="Didn't receive email" /> */}
        </Form>
      </Container>
    </>
  );
}
