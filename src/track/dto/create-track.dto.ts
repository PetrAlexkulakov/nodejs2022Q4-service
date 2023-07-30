export class CreateTrackDto {
    name: string;
    artistId: string | null; // refers to Artist
    albumId: string | null; // refers to Album
    duration: number; // integer number
    constructor(name: string, duration: number) {
        this.name = name
        this.artistId = null
        this.albumId = null
        this.duration = duration
    }
}
