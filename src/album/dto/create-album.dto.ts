export class CreateAlbumDto {
  name: string;
  year: number;
  artistId: string | null; // refers to Artist
  constructor(name: string, year: number, artistId: string | null) {
    this.name = name;
    this.year = year;
    this.artistId = artistId;
  }
}
