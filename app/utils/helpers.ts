import { RouteProp } from '@react-navigation/native';
import type { ErrorResponse } from 'api-response';

import { TabRoutes } from 'navigation';

type TabIcon = Extract<
  IconName,
  | 'home'
  | 'home-outline'
  | 'music-library'
  | 'music-library-outline'
  | 'music-square-search'
  | 'music-square-search-outline'
  | 'search'
  | 'search-outline'
>;

export const getTabIcon = (
  route: RouteProp<TabRoutes, keyof TabRoutes>,
  focused: boolean,
): TabIcon => {
  switch (route.name) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Library':
      return focused ? 'music-library' : 'music-library-outline';
    case 'Search':
      return focused ? 'music-square-search' : 'music-square-search-outline';
    default:
      return 'home';
  }
};

export const handleError = (error: IError) => {
  if (__DEV__) {
    // console.log('Error:', { error });
    // console.log('Error:', JSON.stringify(error));
  }

  let errorMessage = '';

  if (!error.data && error.message) {
    errorMessage = error.message;
  }

  if (!errorMessage) {
    if (error.data) {
      const ErrorMsg = (error.data as ErrorResponse).message;
      const ErrorArray = (error.data as ErrorResponse).errors;

      if (ErrorMsg) {
        errorMessage = ErrorMsg;
      } else if (ErrorArray) {
        return ErrorArray[0];
      } else {
        return 'Something went wrong, try again later';
      }

      // if (ErrorArray.length >= 1) {
      //   return ErrorArray[0];
      // }
    } else {
      return 'System was unable to process this request. Please try again later';
    }
  }

  return errorMessage;
};
