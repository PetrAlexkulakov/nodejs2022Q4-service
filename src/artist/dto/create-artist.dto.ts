export class CreateArtistDto {
  name: string;
  grammy: boolean;
  constructor(name: string, grammy: boolean) {
    this.name = name;
    this.grammy = grammy;
  }
}
