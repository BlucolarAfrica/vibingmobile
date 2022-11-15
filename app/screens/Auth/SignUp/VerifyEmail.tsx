import {
  ActionText,
  Button,
  Container,
  Divider,
  Header,
  Title,
} from 'components';

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
        <Button label="Open Email" />
        <Divider />
        <ActionText action="Resend" question="Didn't receive email" />
      </Container>
    </>
  );
}
