interface TrackActionProps {
  icon: Extract<IconName, 'music-library-outline' | 'import-outline' | 'more'>;
}

export const trackActions: TrackActionProps[] = [
  {
    icon: 'music-library-outline',
  },
  {
    icon: 'import-outline',
  },
  {
    icon: 'more',
  },
];
