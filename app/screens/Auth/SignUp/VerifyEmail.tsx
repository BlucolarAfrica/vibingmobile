import { openInbox } from 'react-native-email-link';

import {
  ActionText,
  Button,
  Container,
  Divider,
  Header,
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
        <Divider space="xxl" />
        <Button label="Open Email" onPress={openEmail} />
        <Divider />
        <ActionText action="Resend" question="Didn't receive email" />
      </Container>
    </>
  );
}
