import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  name: string;
  year: number;
  artistId: string | null; // refers to Artist
  constructor(name: string, year: number, artistId: string | null) {
    super();
    this.name = name;
    this.year = year;
    this.artistId = artistId;
  }
}
