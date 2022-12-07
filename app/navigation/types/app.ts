import { NavigatorScreenParams } from '@react-navigation/native';

export type AppRoutes = {
  Tab: NavigatorScreenParams<TabRoutes>;
  Playing: NavigatorScreenParams<NowPayingRoutes>;
};

export type TabRoutes = {
  Home: NavigatorScreenParams<HomeRoutes>;
  Search: NavigatorScreenParams<SearchRoutes>;
  Library: undefined;
};

export type HomeRoutes = {
  HomePage: undefined;
  TrackList: undefined;
  ArtistPage: undefined;
};

export type SearchRoutes = {
  Discover: undefined;
  SearchPage: undefined;
};

export type LibraryRoutes = {
  LibraryPage: undefined;
  AudioQuality: undefined;
  ChangeEmail: undefined;
  ChangePassword: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type NowPayingRoutes = {
  NowPlaying: undefined;
};
