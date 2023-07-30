import { Artist } from 'src/artist/entities/artist.entity';
import { generateUniqueId } from 'src/share/generateUniqueId';

export const createOneArtist = (name: string, grammy: boolean) => {
  return {
    id: generateUniqueId(),
    name,
    grammy
  };
};

const createArtist = (): Artist[] => {
  const artists: Artist[] = [];

  for (let i = 0; i < 10; i++) {
    artists.push(createOneArtist(`artist${i + 1}`, false));
  }

  return artists;
};

export const artists: Artist[] = createArtist();
