import { HttpException, Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { createOneTrack, tracks } from 'src/DB/tracks';
import { checkId } from 'src/share/checkId';
import { hasSameProperties } from 'src/share/hasSameProperties';

@Injectable()
export class TrackService {
  create(crTrackDto: CreateTrackDto) {
    if (!hasSameProperties(crTrackDto, new CreateTrackDto('1', 2))) {
      throw new HttpException(
        'request body does not contain required fields',
        400,
      );
    }
    const nwTrack = createOneTrack(
      crTrackDto.name,
      crTrackDto.artistId,
      crTrackDto.albumId,
      crTrackDto.duration,
    );
    tracks.push(nwTrack);

    return { resp: nwTrack, status: 201 };
  }

  findAll() {
    return tracks;
  }

  findOne(id: string) {
    checkId(id, tracks);

    const resp = tracks.find((track) => track.id === id);

    return { resp: resp, status: 200 };
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    if (!hasSameProperties(updateTrackDto, new UpdateTrackDto('1', 2))) {
      throw new HttpException(
        'request body does not contain required fields',
        400,
      );
    }
    checkId(id, tracks);

    const track = tracks.find((track) => track.id === id);

    return { resp: track, status: 200 };
  }

  remove(id: string) {
    checkId(id, tracks);
    const index = tracks.findIndex((user) => user.id === id);
    tracks.splice(index, 1)[0];

    return { status: 204 };
  }
}
