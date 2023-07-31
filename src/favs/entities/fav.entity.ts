export class Fav {
  artists: string[]; // favorite artists ids
  albums: string[]; // favorite albums ids
  tracks: string[]; // favorite tracks ids
  constructor() {
    this.artists = [];
    this.albums = [];
    this.tracks = [];
  }

  removeAlbum(id: string) {
    const index = this.albums.findIndex((index) => index === id);
    this.albums.splice(index, 1);
  }

  removeArtist(id: string) {
    const index = this.artists.findIndex((index) => index === id);
    this.artists.splice(index, 1);
  }
}
