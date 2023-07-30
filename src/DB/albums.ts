import { Album } from 'src/album/entities/album.entity';
import { generateUniqueId } from 'src/share/generateUniqueId';

export const createOneAlbum = (name: string, year: number, artistId: string | null) => {
  return {
    id: generateUniqueId(),
    name,
    year,
    artistId
  };
};

const createAlbum = (): Album[] => {
  const albums: Album[] = [];

  for (let i = 0; i < 10; i++) {
    albums.push(createOneAlbum(`album${i + 1}`, 2000, null));
  }

  return albums;
};

export const albums: Album[] = createAlbum();