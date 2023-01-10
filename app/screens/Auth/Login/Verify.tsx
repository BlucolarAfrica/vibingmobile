// import { openInbox } from 'react-native-email-link';

import {
  // ActionText,
  Container,
  Divider,
  Form,
  FormPin,
  Header,
  Submit,
  Title,
} from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import { useService, useVerifyResetOTPMutation } from 'service';

// const openEmail = async () => {
//   try {
//     await openInbox();
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function VerifyOTP({
  route,
  navigation,
}: StackNavigationProps<AuthRoutes, 'VerifyReset'>): JSX.Element {
  const { device_name, email } = route.params;

  // const [resend, resendQuery] = useResendEmailOTPMutation();
  const [verify, { isError, isLoading, isSuccess, error, reset, data }] =
    useVerifyResetOTPMutation();

  useService({
    error,
    isError,
    isLoading,
    isSuccess,
    reset() {
      reset();
    },
    successEffect() {
      data &&
        navigation.navigate('Reset', {
          device_name,
          email,
          session_id: data.data.session_id,
        });
    },
  });

  // useService({
  //   error: resendQuery.error,
  //   isError: resendQuery.isError,
  //   isLoading: resendQuery.isLoading,
  //   isSuccess: resendQuery.isSuccess,
  // });

  return (
    <>
      <Header />
      <Container>
        <Title
          title="Verify your email"
          subtitle={`A verification code has been sent to your email address ${email}`}
        />
        <Form
          initialValues={{ pin: '' }}
          onSubmit={({ pin }) => {
            // reset();
            // resendQuery.reset();

            verify({
              device_name,
              email,
              otp_code: Number(pin),
            });
          }}>
          <FormPin name="pin" cellCount={5} />
          <Divider space="xxl" />
          <Submit label="Verify" {...{ isLoading }} />
          <Divider />
          {/* <ActionText
            isLoading={resendQuery.isLoading}
            action="Resend"
            question="Didn't receive email"
            onPress={() => {
              reset();
              resendQuery.reset();

              resend({ deviceName: device_name });
            }}
          /> */}
        </Form>
      </Container>
    </>
  );
}
