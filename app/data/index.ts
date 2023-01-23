import { pallets } from 'constant';

// interface LibraryProps {
//   album: string;
//   artist: string;
//   artwork: string;
//   date: string;
//   duration: number;
//   genre: string;
//   title: string;
//   url: string;
// }

interface PlaylistProps {
  url: string;
  name: string;
}

interface TagProps {
  id: string;
  name: string;
}

interface MyLibraryProps {
  icon: IconName;
  color: string;
  name: string;
}

interface Tracks {
  artist: string | string[];
  title: string;
  genre: string;
  album: string;
  artwork: string;
  duration: number;
  date: string;
  url: string;
  id: string;
}

export interface AlbumProps {
  artist: string | string[];
  album: string;
  artwork: string;
  date: string;
  genre: string;
  duration: number;
  tracks: Tracks[];
  id: string;
}

export const albums: AlbumProps[] = [
  {
    album: 'Rhapsody',
    artist: 'Philips',
    artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg',
    date: '2014-08-01T07:00:00+00:00',
    duration: 1557,
    genre: 'Rock',
    id: 'rhapsody',
    tracks: [
      {
        album: 'Rhapsody',
        artist: ['Philips', 'Fruz', 'Johns'],
        artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 105,
        genre: 'Rock',
        id: 'sugar',
        title: 'Sugar',
        url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
      },
      {
        album: 'Rhapsody',
        artist: ['Philips', 'Benjamin Tissot'],
        artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 126,
        genre: 'Punky',
        id: 'Pieces',
        title: 'Pieces',
        url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
      },
      {
        album: 'Rhapsody',
        artist: ['Philips', 'Matt Ryder'],
        artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 122,
        genre: 'Electro House',
        id: 'not-the-same',
        title: 'Not The Same',
        url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
      },
      {
        album: 'Rhapsody',
        artist: ['Philips', 'Mountain'],
        artwork: 'https://www.bensound.com/bensound-img/romantic.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 236,
        genre: 'Electro House',
        id: 'memory-lane',
        title: 'Memory Lane',
        url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3',
      },
      {
        album: 'Rhapsody',
        artist: ['Philips', 'Benjamin Tissot'],
        artwork: 'https://www.bensound.com/bensound-img/allthat.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 146,
        genre: 'Jazz',
        id: 'all-that',
        title: 'All That',
        url: 'https://www.bensound.com/bensound-music/bensound-allthat.mp3',
      },
      {
        album: 'Rhapsody',
        artist: ['Philips', 'Wayne Bruce'],
        artwork: 'https://www.bensound.com/bensound-img/love.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 335,
        genre: 'Jazz',
        id: 'Love',
        title: 'Love',
        url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      },
      {
        album: 'Rhapsody',
        artist: 'Philips',
        artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 310,
        genre: 'Jazz',
        id: 'dreams',
        title: 'Dreams',
        url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      },
      {
        album: 'Rhapsody',
        artist: ['Philips', 'Benjamin Tissot', 'Philips', 'Clark Kent'],
        artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 177,
        genre: 'Jazz',
        id: 'dance',
        title: 'Dance!',
        url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
      },
    ],
  },
  {
    album:
      "The Epiphany That Makes Me Wonder Why I'm Still Here Writing An Album So Long To Test For Length",
    artist: [
      'Arctic Monkeys',
      'Monkey D. Luffy',
      'Monkey D. Dragon',
      'Monkey D. Grap',
      'Portgas D. Ace',
    ],
    artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
    date: '2014-05-20T07:00:00+00:00',
    duration: 1175,
    genre: 'Rock',
    id: 'memories',
    tracks: [
      {
        album: 'Memories',
        artist: [
          'Arctic Monkeys',
          'Monkey D. Luffy',
          'Monkey D. Dragon',
          'Monkey D. Grap',
          'Portgas D. Ace',
          'Fruz',
          'Johns',
        ],
        artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 105,
        genre: 'Rock',
        id: 'spirited',
        title: 'Spirited',
        url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
      },
      {
        album: 'Memories',
        artist: [
          'Arctic Monkeys',
          'Monkey D. Luffy',
          'Monkey D. Dragon',
          'Monkey D. Grap',
          'Portgas D. Ace',
          'Benjamin Tissot',
        ],
        artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 126,
        genre: 'Punky',
        id: 'always',
        title: 'Always',
        url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
      },
      {
        album: 'Memories',
        artist: [
          'Arctic Monkeys',
          'Monkey D. Luffy',
          'Monkey D. Dragon',
          'Monkey D. Grap',
          'Portgas D. Ace',
          'Matt Ryder',
        ],
        artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 122,
        genre: 'Electro House',
        id: 'what-have-you-done',
        title: 'What Have You Done',
        url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
      },
      {
        album: 'Memories',
        artist: [
          'Arctic Monkeys',
          'Monkey D. Luffy',
          'Monkey D. Dragon',
          'Monkey D. Grap',
          'Portgas D. Ace',
          'Wayne Bruce',
        ],
        artwork: 'https://www.bensound.com/bensound-img/love.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 335,
        genre: 'Jazz',
        id: 'Love',
        title: 'Love',
        url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      },
      {
        album: 'Memories',
        artist: [
          'Arctic Monkeys',
          'Monkey D. Luffy',
          'Monkey D. Dragon',
          'Monkey D. Grap',
          'Portgas D. Ace',
        ],
        artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 310,
        genre: 'Jazz',
        id: 'dreams',
        title: 'Dreams',
        url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      },
      {
        album: 'Memories',
        artist: [
          'Arctic Monkeys',
          'Monkey D. Luffy',
          'Monkey D. Dragon',
          'Monkey D. Grap',
          'Portgas D. Ace',
          'Benjamin Tissot',
          'Philips',
          'Clark Kent',
        ],
        artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 177,
        genre: 'Jazz',
        id: 'dance',
        title: 'Dance!',
        url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
      },
    ],
  },
  {
    album: 'Memories',
    artist: 'Bea Leah',
    artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
    date: '2014-05-20T07:00:00+00:00',
    duration: 1175,
    genre: 'Rock',
    id: 'memories',
    tracks: [
      {
        album: 'Memories',
        artist: ['Bea Leah', 'Fruz', 'Johns'],
        artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 105,
        genre: 'Rock',
        id: 'spirited',
        title: 'Spirited',
        url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
      },
      {
        album: 'Memories',
        artist: ['Bea Leah', 'Benjamin Tissot'],
        artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 126,
        genre: 'Punky',
        id: 'always',
        title: 'Always',
        url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
      },
      {
        album: 'Memories',
        artist: ['Bea Leah', 'Matt Ryder'],
        artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 122,
        genre: 'Electro House',
        id: 'what-have-you-done',
        title: 'What Have You Done',
        url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
      },
      {
        album: 'Memories',
        artist: ['Bea Leah', 'Wayne Bruce'],
        artwork: 'https://www.bensound.com/bensound-img/love.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 335,
        genre: 'Jazz',
        id: 'Love',
        title: 'Love',
        url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      },
      {
        album: 'Memories',
        artist: 'Bea Leah',
        artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 310,
        genre: 'Jazz',
        id: 'dreams',
        title: 'Dreams',
        url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      },
      {
        album: 'Memories',
        artist: ['Bea Leah', 'Benjamin Tissot', 'Philips', 'Clark Kent'],
        artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 177,
        genre: 'Jazz',
        id: 'dance',
        title: 'Dance!',
        url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
      },
    ],
  },
  {
    album: 'Astronomy',
    artist: 'Galileo Galilei',
    artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
    date: '2014-05-20T07:00:00+00:00',
    duration: 1170,
    genre: 'Rock',
    id: 'astronomy',
    tracks: [
      {
        album: 'Astronomy',
        artist: ['Galileo Galilei', 'Fruz', 'Johns'],
        artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 105,
        genre: 'Rock',
        id: 'astronomy',
        title: 'Astronomy',
        url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
      },
      {
        album: 'Astronomy',
        artist: ['Galileo Galilei', 'Benjamin Tissot'],
        artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 126,
        genre: 'Punky',
        id: 'motion',
        title: 'Motion',
        url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
      },
      {
        album: 'Astronomy',
        artist: ['Galileo Galilei', 'Matt Ryder'],
        artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 122,
        genre: 'Electro House',
        id: 'italy',
        title: 'Italy',
        url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
      },
      {
        album: 'Astronomy',
        artist: ['Galileo Galilei', 'Wayne Bruce'],
        artwork: 'https://www.bensound.com/bensound-img/love.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 335,
        genre: 'Jazz',
        id: 'telescope',
        title: 'Telescope',
        url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      },
      {
        album: 'Astronomy',
        artist: 'Galileo Galilei',
        artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 310,
        genre: 'Jazz',
        id: 'dreams',
        title: 'Dreams',
        url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      },
      {
        album: 'Astronomy',
        artist: [
          'Galileo Galilei',
          'Issac Newton',
          'Benjamin Franklin',
          'Clark Kent',
        ],
        artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 177,
        genre: 'Jazz',
        id: 'we-won',
        title: 'We Won!!!',
        url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
      },
    ],
  },
  {
    album: 'STOIC',
    artist: ['Marcus Aurelius', 'Seneca', 'Epictetus'],
    artwork: 'https://www.bensound.com/bensound-img/romantic.jpg',
    date: '2014-05-20T07:00:00+00:00',
    duration: 1157,
    genre: 'Orchestra',
    id: 'stoic',
    tracks: [
      {
        album: 'STOIC',
        artist: [
          'Marcus Aurelius',
          'Seneca',
          'Epictetus',
          'Galileo Galilei',
          'Aristotle',
        ],
        artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 105,
        genre: 'Rock',
        id: 'courage',
        title: 'Courage!!',
        url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
      },
      {
        album: 'STOIC',
        artist: ['Marcus Aurelius', 'Seneca', 'Epictetus', 'Benjamin Tissot'],
        artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 126,
        genre: 'Punky',
        id: 'wise-up',
        title: 'Wise UP',
        url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
      },
      {
        album: 'STOIC',
        artist: ['Marcus Aurelius', 'Seneca', 'Epictetus', 'Matt Ryder'],
        artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 122,
        genre: 'Electro House',
        id: 'never-let',
        title: "Never Let 'em control you",
        url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
      },
      {
        album: 'STOIC',
        artist: ['Marcus Aurelius', 'Seneca', 'Epictetus', 'Mountain'],
        artwork: 'https://www.bensound.com/bensound-img/romantic.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 236,
        genre: 'Electro House',
        id: 'why-love-when-you-can-be-lonely',
        title: 'Why Love When You Can Be Lonely',
        url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3',
      },
      {
        album: 'STOIC',
        artist: ['Marcus Aurelius', 'Seneca', 'Epictetus', 'Benjamin Tissot'],
        artwork: 'https://www.bensound.com/bensound-img/allthat.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 146,
        genre: 'Jazz',
        id: 'what-stands',
        title: 'WHAT STANDS IN THE PATH',
        url: 'https://www.bensound.com/bensound-music/bensound-allthat.mp3',
      },
      {
        album: 'STOIC',
        artist: ['Marcus Aurelius', 'Seneca', 'Epictetus', 'Wayne Bruce'],
        artwork: 'https://www.bensound.com/bensound-img/love.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 335,
        genre: 'Jazz',
        id: 'no-emotion',
        title: 'No Emotion',
        url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      },
      {
        album: 'STOIC',
        artist: ['Marcus Aurelius', 'Seneca', 'Epictetus'],
        artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 310,
        genre: 'Jazz',
        id: 'never-quit',
        title: 'Never Quit',
        url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      },
      {
        album: 'STOIC',
        artist: [
          'Marcus Aurelius',
          'Seneca',
          'Epictetus',
          'Benjamin Tissot',
          'Philips',
          'Clark Kent',
        ],
        artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 177,
        genre: 'Jazz',
        id: 'stoic-break',
        title: "STOIC! DON'T!! BREAK!!!",
        url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
      },
    ],
  },
  {
    album: 'gravity',
    artist: 'Issac Newton',
    artwork: 'https://www.bensound.com/bensound-img/allthat.jpg',
    date: '2014-05-20T07:00:00+00:00',
    duration: 3600,
    genre: 'Orchestra',
    id: 'gravity',
    tracks: [
      {
        album: 'gravity',
        artist: ['Issac Newton', 'Galileo Galilei', 'Aristotle'],
        artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 105,
        genre: 'Rock',
        id: 'the-stars',
        title: 'THE stars!',
        url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
      },
      {
        album: 'gravity',
        artist: ['Issac Newton', 'Benjamin Tissot'],
        artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 126,
        genre: 'Punky',
        id: 'apple',
        title: 'aPpLe',
        url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
      },
      {
        album: 'gravity',
        artist: ['Issac Newton', 'Matt Ryder'],
        artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 122,
        genre: 'Electro House',
        id: 'the-fall',
        title: 'tHe faLL',
        url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
      },
      {
        album: 'gravity',
        artist: ['Issac Newton', 'Mountain'],
        artwork: 'https://www.bensound.com/bensound-img/romantic.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 236,
        genre: 'Electro House',
        id: 'under-the-tree',
        title: 'under that tree; everything changed',
        url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3',
      },
      {
        album: 'gravity',
        artist: ['Issac Newton', 'Benjamin Tissot'],
        artwork: 'https://www.bensound.com/bensound-img/allthat.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 146,
        genre: 'Jazz',
        id: 'never-got-any',
        title: 'NeVeR gOt AnY...',
        url: 'https://www.bensound.com/bensound-music/bensound-allthat.mp3',
      },
      {
        album: 'gravity',
        artist: ['Issac Newton', 'Wayne Bruce'],
        artwork: 'https://www.bensound.com/bensound-img/love.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 335,
        genre: 'Jazz',
        id: 'Love',
        title: 'Love',
        url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      },
      {
        album: 'gravity',
        artist: 'Issac Newton',
        artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 310,
        genre: 'Jazz',
        id: 'or-so-you-heard',
        title: '...or so you heard',
        url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      },
      {
        album: 'gravity',
        artist: ['Issac Newton', 'Benjamin Tissot', 'Philips', 'Clark Kent'],
        artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 177,
        genre: 'Jazz',
        id: 'everything-now',
        title: 'EVERYTHING NOW!',
        url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
      },
    ],
  },
  {
    album: 'Surreal',
    artist: 'Ellie Fisher',
    artwork: 'https://www.bensound.com/bensound-img/love.jpg',
    date: '2014-05-20T07:00:00+00:00',
    duration: 3600,
    genre: 'Rock',
    id: 'surreal',
    tracks: [
      {
        album: 'Surreal',
        artist: ['Ellie Fisher', 'Fruz', 'Johns'],
        artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 105,
        genre: 'Rock',
        id: 'spirited',
        title: 'Spirited',
        url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
      },
    ],
  },
  {
    album: 'Bring Me Home',
    artist: 'Serion',
    artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
    date: '2014-05-20T07:00:00+00:00',
    duration: 3600,
    genre: 'Rock',
    id: 'bring-me-home',
    tracks: [
      {
        album: 'Bring Me Home',
        artist: ['Serion', 'Wayne Bruce'],
        artwork: 'https://www.bensound.com/bensound-img/love.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 335,
        genre: 'Jazz',
        id: 'Love',
        title: 'Love',
        url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      },
      {
        album: 'Bring Me Home',
        artist: 'Serion',
        artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 310,
        genre: 'Jazz',
        id: 'dreams',
        title: 'Dreams',
        url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      },
    ],
  },
  {
    album: 'Wildfire',
    artist: 'Little Bird',
    artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
    date: '2014-05-20T07:00:00+00:00',
    duration: 3600,
    genre: 'Rock',
    id: 'wildfire',
    tracks: [
      {
        album: 'Wildfire',
        artist: ['Little Bird', 'Matt Ryder'],
        artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 122,
        genre: 'Electro House',
        id: 'what-have-you-done',
        title: 'What Have You Done',
        url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
      },
      {
        album: 'Wildfire',
        artist: ['Little Bird', 'Wayne Bruce'],
        artwork: 'https://www.bensound.com/bensound-img/love.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 335,
        genre: 'Jazz',
        id: 'Love',
        title: 'Love',
        url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
      },
      {
        album: 'Wildfire',
        artist: 'Little Bird',
        artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
        date: '2014-05-20T07:00:00+00:00',
        duration: 310,
        genre: 'Jazz',
        id: 'dreams',
        title: 'Dreams',
        url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
      },
    ],
  },
];

// export const library: LibraryProps[] = [
//   {
//     album: "Bensound's rock",
//     artist: 'Benjamin Tissot',
//     artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg', // Load artwork from the network
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     duration: 105, // Duration in seconds
//     genre: 'Rock',
//     title: 'Happy Rock',
//     url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
//   },
//   {
//     album: "Bensound's rock",
//     artist: 'Benjamin Tissot',
//     artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     duration: 126, // Duration in seconds
//     genre: 'Rock',
//     title: 'Punky',
//     url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
//   },
//   {
//     album: "Bensound's rock",
//     artist: 'Benjamin Tissot',
//     artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     duration: 122, // Duration in seconds
//     genre: 'Rock',
//     title: 'Actionable',
//     url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
//   },
//   {
//     album: "Bensound's Jazz",
//     artist: 'Benjamin Tissot',
//     artwork: 'https://www.bensound.com/bensound-img/romantic.jpg',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     duration: 236, // Duration in seconds
//     genre: 'Jazz',
//     title: 'Romantic',
//     url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3',
//   },
//   {
//     album: "Bensound's Jazz",
//     artist: 'Benjamin Tissot',
//     artwork: 'https://www.bensound.com/bensound-img/allthat.jpg',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     duration: 146, // Duration in seconds
//     genre: 'Jazz',
//     title: 'All That',
//     url: 'https://www.bensound.com/bensound-music/bensound-allthat.mp3',
//   },
//   {
//     album: "Bensound's Jazz",
//     artist: 'Benjamin Tissot',
//     artwork: 'https://www.bensound.com/bensound-img/love.jpg',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     duration: 335, // Duration in seconds
//     genre: 'Jazz',
//     title: 'Love',
//     url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
//   },
//   {
//     album: "Bensound's Electronica",
//     artist: 'Benjamin Tissot',
//     artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     duration: 310, // Duration in seconds
//     genre: 'Electronica',
//     title: 'Dreams',
//     url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
//   },
//   {
//     album: "Bensound's Electronica",
//     artist: 'Benjamin Tissot',
//     artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     duration: 177, // Duration in seconds
//     genre: 'Electronica',
//     title: 'Love',
//     url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
//   },
// ];

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

export const discovery: PlaylistProps[] = [
  {
    name: 'Made for you',
    url: 'https://source.unsplash.com/mBVDi_cmkOg',
  },
  {
    name: 'Trending',
    url: 'https://source.unsplash.com/fEVaiLwWvlU',
  },
  {
    name: 'Pop',
    url: 'https://source.unsplash.com/bXjqPckmLD8',
  },
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
    name: 'Gospel',
    url: 'https://source.unsplash.com/xihYs03jvYo',
  },
  {
    name: 'Party',
    url: 'https://source.unsplash.com/NcdG9mK3PBY',
  },
  {
    name: 'Classic',
    url: 'https://source.unsplash.com/hU9gx8YfVK4',
  },
  {
    name: 'Independent',
    url: 'https://source.unsplash.com/Y20JJ_ddy9M',
  },
  {
    name: 'Live',
    url: 'https://source.unsplash.com/ZhQCZjr9fHo',
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

export const librarySection: MyLibraryProps[] = [
  {
    color: pallets.ruby,
    icon: 'folder-favorite-outline',
    name: 'Favorite Albums',
  },
  {
    color: pallets.turquoise,
    icon: 'music-outline',
    name: 'Favorite Songs',
  },
  {
    color: pallets.copper,
    icon: 'import-outline',
    name: 'Downloads',
  },
  {
    color: pallets.purple,
    icon: 'music-playlist',
    name: 'My Playlists',
  },
  {
    color: pallets.corn,
    icon: 'add',
    name: 'Add',
  },
];
