// import { openInbox } from 'react-native-email-link';

import {
  ActionText,
  Container,
  Divider,
  Form,
  FormPin,
  Header,
  Submit,
  Title,
} from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import {
  useResendEmailOTPMutation,
  useService,
  useVerifyEmailMutation,
} from 'service';
import { setAuthenticated, useDispatch, useSelector } from 'store';

// const openEmail = async () => {
//   try {
//     await openInbox();
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function VerifyEmail({
  route,
}: StackNavigationProps<AuthRoutes, 'VerifyEmail'>): JSX.Element {
  const { device_name, email } = route.params;
  const { token } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const [resend, resendQuery] = useResendEmailOTPMutation();
  const [verify, { isError, isLoading, isSuccess, error, reset }] =
    useVerifyEmailMutation();

  useService({
    error,
    isError,
    isLoading,
    isSuccess,
    reset() {
      reset();
    },
    successEffect() {
      dispatch(setAuthenticated(true));
    },
  });

  useService({
    error: resendQuery.error,
    isError: resendQuery.isError,
    isLoading: resendQuery.isLoading,
    isSuccess: resendQuery.isSuccess,
  });

  console.log('Bearer', token);

  return (
    <>
      <Header />
      <Container>
        <Title
          title="Verify your email"
          subtitle={`Hi Lade! account verification link has been sent to your email address ${email}`}
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
          <ActionText
            isLoading={resendQuery.isLoading}
            action="Resend"
            question="Didn't receive email"
            onPress={() => {
              reset();
              resendQuery.reset();

              resend({ deviceName: device_name });
            }}
          />
        </Form>
      </Container>
    </>
  );
}
