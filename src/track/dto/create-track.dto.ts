export class CreateTrackDto {
  name: string;
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album
  duration: number; // integer number
  constructor(
    name: string,
    artistId: string | null,
    albumId: string | null,
    duration: number,
  ) {
    this.name = name;
    this.artistId = artistId;
    this.albumId = albumId;
    this.duration = duration;
  }
}
