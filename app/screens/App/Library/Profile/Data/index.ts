import { LibraryRoutes } from 'navigation';

interface ProfileSectionProps {
  title: string;
  route?: keyof LibraryRoutes;
}

export const accountSection: ProfileSectionProps[] = [
  {
    route: 'ChangeEmail',
    title: 'Change Email',
  },
  {
    route: 'ChangePassword',
    title: 'Change Password',
  },
  {
    title: 'Delete Account',
  },
  {
    title: 'Change Location',
  },
  {
    title: 'Subscription Status',
  },
  {
    title: 'Transaction History',
  },
];

export const settingSection: ProfileSectionProps[] = [
  {
    title: 'Privacy Policy',
  },
  {
    route: 'AudioQuality',
    title: 'Audio Quality',
  },
  {
    title: 'Help',
  },
  {
    title: 'Theme',
  },
  {
    title: 'Update',
  },
  {
    title: 'Share This App',
  },
  {
    title: 'Rate This App',
  },
];
