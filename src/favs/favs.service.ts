import { HttpException, Injectable } from '@nestjs/common';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';
import { favorites } from 'src/DB/favorites';
import { artists } from 'src/DB/artists';
import { albums } from 'src/DB/albums';
import { tracks } from 'src/DB/tracks';

@Injectable()
export class FavsService {
  private checkIdWith422(id: string, array: any){
    const resp = array.find((elem: any) => elem.id === id);

    if (resp === undefined) {
      throw new HttpException('record with id does not exist', 422);
    }
  }

  create(createFavDto: CreateFavDto) {
    return 'This action adds a new fav';
  }

  findAll() {
    return {
      artists: favorites.artists
        .map((id) => artists.find((a) => a.id === id))
        .filter(Boolean),
      albums: favorites.albums
        .map((id) => albums.find((a) => a.id === id))
        .filter(Boolean),
      tracks: favorites.tracks
        .map((id) => tracks.find((a) => a.id === id))
        .filter(Boolean),
    };
  }

  addTrack(id: string) {
    this.checkIdWith422(id, tracks);
    favorites.tracks.push(id);

    return { resp:"Track was added to favorites", status: 201 }
  }
}
