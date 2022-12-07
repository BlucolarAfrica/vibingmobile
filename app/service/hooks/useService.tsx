import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { Alert, Keyboard } from 'react-native';

import { handleError } from 'utils';

interface Props {
  error: FetchBaseQueryError | SerializedError | undefined;
  isError: boolean;
  isLoading: boolean;
  successMsg?: string;
  isPrivate?: boolean;
  isSuccess: boolean;
  errorTitle?: string;
  errorEffect?: () => void;
  successEffect?: () => void;
  onAlertPress?: () => void;
}

export default function useService({
  error,
  isError,
  isLoading,
  isSuccess,
  isPrivate,
  errorTitle,
  successMsg,
  successEffect,
  onAlertPress,
  errorEffect,
}: Props) {
  useEffect(() => {
    let ignore = false;

    isLoading && Keyboard.dismiss();
    if (!isLoading && isSuccess) {
      successMsg && console.log(successMsg);
      // dispatch({
      //   payload: {
      //     message: successMsg,
      //     status: 'success',
      //   },
      //   type: 'toast/showToast',
      // });

      successEffect?.();
    }

    if (!isLoading && isError) {
      if (!isPrivate && error) {
        if (__DEV__) {
          console.log(error);
        }
        const errorMsg = handleError(error);

        !ignore &&
          Alert.alert(errorTitle || 'Error', errorMsg, [
            {
              onPress() {
                onAlertPress?.();
              },
              style: 'destructive',
              text: 'OK',
            },
          ]);
      } else {
        console.log('Error:', error);
      }
      errorEffect?.();
    }

    return () => {
      ignore = true;
    };
  }, [
    isLoading,
    isSuccess,
    isError,
    successEffect,
    errorEffect,
    successMsg,
    isPrivate,
    error,
    errorTitle,
    onAlertPress,
  ]);
}
