import { NavigatorScreenParams } from '@react-navigation/native';

import { AlbumProps } from 'data';

export type AppRoutes = {
  Tab: NavigatorScreenParams<TabRoutes>;
  Playing: NavigatorScreenParams<NowPayingRoutes>;
};

export type TabRoutes = {
  Home: NavigatorScreenParams<HomeRoutes>;
  Search: NavigatorScreenParams<SearchRoutes>;
  Library: NavigatorScreenParams<LibraryRoutes>;
};

export type OnboardRoutes = {
  Onboard: undefined;
};

export type HomeRoutes = {
  HomePage: undefined;
  TrackList: { album: AlbumProps };
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
  NowPlaying: AlbumProps;
};
