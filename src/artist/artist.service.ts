import { HttpException, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { artists, createOneArtist } from 'src/DB/artists';
import { checkId } from 'src/share/checkId';
import { hasSameProperties } from 'src/share/hasSameProperties';
import { tracks } from 'src/DB/tracks';

@Injectable()
export class ArtistService {
  create(createArtistDto: CreateArtistDto) {
    if (!hasSameProperties(createArtistDto, new CreateArtistDto('1', false))) {
      throw new HttpException(
        'request body does not contain required fields',
        400,
      );
    }
    const nwArtists = createOneArtist(
      createArtistDto.name,
      createArtistDto.grammy,
    );
    artists.push(nwArtists);

    return { resp: nwArtists, status: 201 };
  }

  findAll() {
    return artists;
  }

  findOne(id: string) {
    checkId(id, artists);

    const resp = artists.find((artist) => artist.id === id);

    return { resp: resp, status: 200 };
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    if (!hasSameProperties(updateArtistDto, new UpdateArtistDto('1', false))) {
      throw new HttpException(
        'request body does not contain required fields',
        400,
      );
    }
    checkId(id, artists);

    const artist = artists.find((artist) => artist.id === id);
    artist.grammy = updateArtistDto.grammy;
    artist.name = updateArtistDto.name;
    return { resp: artist, status: 200 };
  }

  remove(id: string) {
    checkId(id, artists);

    const index = artists.findIndex((user) => user.id === id);
    artists.splice(index, 1)[0];
    // const artistsTrack = tracks.find((track) => track.artistId === id)
    // artistsTrack.artistId = null;
    // const artistsAlbum = tracks.find((track) => track.artistId === id)
    // artistsAlbum.artistId = null;

    return { status: 204 };
  }
}
