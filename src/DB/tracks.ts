import { Track } from 'src/track/entities/track.entity';
import { generateUniqueId } from 'src/share/generateUniqueId';

export const createOneTrack = (
  name: string,
  artistId: string | null,
  albumId: string | null,
  duration: number,
) => {
  return {
    id: generateUniqueId(),
    name,
    artistId, // refers to Artist
    albumId, // refers to Album
    duration, // integer number
  };
};

const createTracks = (): Track[] => {
  const tracks: Track[] = [];

  for (let i = 0; i < 10; i++) {
    tracks.push(
      createOneTrack(
        `name${i + 1}`,
        null,
        null,
        Math.floor(Math.random() * 10),
      ),
    );
  }

  return tracks;
};

export const tracks: Track[] = createTracks();
