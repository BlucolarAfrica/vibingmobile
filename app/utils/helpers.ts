import { RouteProp } from '@react-navigation/native';

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
