import { RouteProp } from '@react-navigation/native';
import type { ErrorResponse } from 'api-response';

import { AlbumProps } from 'data';
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

export const getArtist = (artist: string | string[]): string => {
  switch (typeof artist) {
    case 'string':
      return artist;
    case 'object':
      if (Array.isArray(artist)) {
        return artist.join(', ');
      } else {
        return '';
      }
    default:
      return '';
  }
};

export const convertToHoursAndMinutes = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) {
    return '00 hr 00 min';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0 && minutes === 0) {
    return `${seconds} sec`;
  } else if (hours === 0) {
    return `${minutes}min`;
  } else {
    return `${hours}hr ${minutes}min`;
  }
};

export const checkAlbumType = (duration: number): string => {
  if (isNaN(duration) || duration < 0) {
    return 'Invalid input, please enter a positive number';
  }
  if (duration <= 900) {
    return 'Single';
  } else if (duration > 900 && duration <= 2400) {
    return 'EP';
  } else {
    return 'Album';
  }
};

export const getTotalDuration = (albums: AlbumProps['tracks']): number => {
  return albums.reduce((total, album) => total + album.duration, 0);
};

export const convertToMinutesAndSeconds = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) {
    return '00:00';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const formatDate = (date: string): string => {
  if (!String(date)) {
    return '';
  }
  const dateObject = new Date(date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[dateObject.getUTCMonth()];
  const day = dateObject.getUTCDate();
  const year = dateObject.getUTCFullYear();
  const daySuffix = ['st', 'nd', 'rd'][(day - 1) % 10] || 'th';
  return `${day}${daySuffix} ${month}, ${year}`;
};

export const formatNumber = (num: number): string => {
  if (isNaN(num)) {
    return '0';
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
