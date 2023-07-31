import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackDto } from './create-track.dto';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
  name: string;
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album
  duration: number; // integer number
  constructor(name: string, duration: number) {
    super();
    this.name = name;
    this.artistId = null;
    this.albumId = null;
    this.duration = duration;
  }
}
