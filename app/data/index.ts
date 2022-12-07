interface LibraryProps {
  album: string;
  artist: string;
  artwork: string;
  date: string;
  duration: number;
  genre: string;
  title: string;
  url: string;
}

interface PlaylistProps {
  url: string;
  name: string;
}

interface TagProps {
  id: string;
  name: string;
}

export const library: LibraryProps[] = [
  {
    album: "Bensound's rock",
    artist: 'Benjamin Tissot',
    artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg', // Load artwork from the network
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    duration: 105, // Duration in seconds
    genre: 'Rock',
    title: 'Happy Rock',
    url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
  },
  {
    album: "Bensound's rock",
    artist: 'Benjamin Tissot',
    artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    duration: 126, // Duration in seconds
    genre: 'Rock',
    title: 'Punky',
    url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
  },
  {
    album: "Bensound's rock",
    artist: 'Benjamin Tissot',
    artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    duration: 122, // Duration in seconds
    genre: 'Rock',
    title: 'Actionable',
    url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
  },
  {
    album: "Bensound's Jazz",
    artist: 'Benjamin Tissot',
    artwork: 'https://www.bensound.com/bensound-img/romantic.jpg',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    duration: 236, // Duration in seconds
    genre: 'Jazz',
    title: 'Romantic',
    url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3',
  },
  {
    album: "Bensound's Jazz",
    artist: 'Benjamin Tissot',
    artwork: 'https://www.bensound.com/bensound-img/allthat.jpg',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    duration: 146, // Duration in seconds
    genre: 'Jazz',
    title: 'All That',
    url: 'https://www.bensound.com/bensound-music/bensound-allthat.mp3',
  },
  {
    album: "Bensound's Jazz",
    artist: 'Benjamin Tissot',
    artwork: 'https://www.bensound.com/bensound-img/love.jpg',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    duration: 335, // Duration in seconds
    genre: 'Jazz',
    title: 'Love',
    url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
  },
  {
    album: "Bensound's Electronica",
    artist: 'Benjamin Tissot',
    artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    duration: 310, // Duration in seconds
    genre: 'Electronica',
    title: 'Dreams',
    url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
  },
  {
    album: "Bensound's Electronica",
    artist: 'Benjamin Tissot',
    artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    duration: 177, // Duration in seconds
    genre: 'Electronica',
    title: 'Love',
    url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
  },
];

export const playlist: PlaylistProps[] = [
  {
    name: 'Dance',
    url: 'https://source.unsplash.com/YrtFlrLo2DQ',
  },
  {
    name: 'Jazz',
    url: 'https://source.unsplash.com/5gn2soeAc40',
  },
  {
    name: 'Acoustic',
    url: 'https://source.unsplash.com/fCEJGBzAkrU',
  },
  {
    name: 'Acoustic',
    url: 'https://source.unsplash.com/fCEJGBzAkrU',
  },
  {
    name: 'Party',
    url: 'https://source.unsplash.com/NcdG9mK3PBY',
  },
  {
    name: 'Trending',
    url: 'https://source.unsplash.com/fEVaiLwWvlU',
  },
];

export const tags: TagProps[] = [
  {
    id: '1',
    name: 'All',
  },
  {
    id: '2',
    name: 'Afro Beats',
  },
  {
    id: '3',
    name: 'Pop',
  },
  {
    id: '4',
    name: 'Hip Hop',
  },
  {
    id: '5',
    name: 'Gospel',
  },
  {
    id: '6',
    name: 'Reggae',
  },
];
