import { NavigatorScreenParams } from '@react-navigation/native';

export type AppRoutes = {
  Tab: NavigatorScreenParams<TabRoutes>;
};

export type TabRoutes = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};
