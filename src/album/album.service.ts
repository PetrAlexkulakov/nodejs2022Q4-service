import { HttpException, Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { albums, createOneAlbum } from 'src/DB/albums';
import { checkId } from 'src/share/checkId';
import { hasSameProperties } from 'src/share/hasSameProperties';
import { tracks } from 'src/DB/tracks';
import { favorites } from 'src/DB/favorites';

@Injectable()
export class AlbumService {
  create(createAlbumDto: CreateAlbumDto) {
    if (
      !hasSameProperties(createAlbumDto, new CreateAlbumDto('1', 2, null)) &&
      !hasSameProperties(createAlbumDto, new CreateAlbumDto('1', 2, 'null'))
    ) {
      throw new HttpException(
        'request body does not contain required fields',
        400,
      );
    }
    const nwAlbum = createOneAlbum(
      createAlbumDto.name,
      createAlbumDto.year,
      createAlbumDto.artistId,
    );
    albums.push(nwAlbum);

    return { resp: nwAlbum, status: 201 };
  }

  findAll() {
    return albums;
  }

  findOne(id: string) {
    checkId(id, albums);

    const resp = albums.find((album) => album.id === id);

    return { resp: resp, status: 200 };
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    checkId(id, albums);
    if (
      !hasSameProperties(
        updateAlbumDto,
        new UpdateAlbumDto('1', 2000, '2') ||
          !hasSameProperties(
            updateAlbumDto,
            new UpdateAlbumDto('1', 2000, null),
          ),
      )
    ) {
      throw new HttpException(
        'request body does not contain required fields',
        400,
      );
    }

    const album = albums.find((album) => album.id === id);
    album.name = updateAlbumDto.name;
    album.year = updateAlbumDto.year;
    album.artistId = updateAlbumDto.artistId;

    return { resp: album, status: 200 };
  }

  remove(id: string) {
    checkId(id, albums);

    const index = albums.findIndex((album) => album.id === id);
    albums.splice(index, 1);
    favorites.removeAlbum(id);
    tracks.forEach((t) => {
      if (t.albumId === id) t.albumId = null;
    });

    return { status: 204 };
  }
}
