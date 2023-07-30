import { HttpException, Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { createOneTrack, tracks } from 'src/DB/tracks';
import { checkId } from 'src/share/checkId';
import { hasSameProperties } from 'src/share/hasSameProperties';

@Injectable()
export class TrackService {
  create(createTrackDto: CreateTrackDto) {
    // if (!hasSameProperties(createTrackDto, new CreateTrackDto('1', '2'))) {
    //   throw new HttpException('request body does not contain required fields', 400);
    // }
    // const nwTrack = createOneTrack(createTrackDto. , createUserDto.password)
    // tracks.push(nwTrack)

    // return { resp: nwTrack, status: 201 };
    return { resp: {}, status: 201 };
  }

  findAll() {
    return tracks;
  }

  findOne(id: string) {
    checkId(id, tracks)

    const resp = tracks.find(user => user.id === id);

    return { resp: resp, status: 200 }
  }

  update(id: number, updateTrackDto: UpdateTrackDto) {
    return `This action updates a #${id} track`;
  }

  remove(id: number) {
    return `This action removes a #${id} track`;
  }
}
