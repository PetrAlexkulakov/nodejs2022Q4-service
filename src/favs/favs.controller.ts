import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FavsService } from './favs.service';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';
import { Response } from 'express';

@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Get()
  findAll(@Res() res: Response) {
    res.status(200).json(this.favsService.findAll());
  }

  @Post('track/:id')
  addTrack(@Param('id', new ParseUUIDPipe()) id: string, @Res() res: Response) {
    const { status, resp } = this.favsService.addTrack(id);
    res.status(status).json(resp);
  }

  @Delete('track/:id')
  removeTrack(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Res() res: Response,
  ) {
    const { status } = this.favsService.removeTrack(id);
    res.status(status).json();
  }

  @Post('album/:id')
  addAlbum(@Param('id', new ParseUUIDPipe()) id: string, @Res() res: Response) {
    const { status, resp } = this.favsService.addAlbum(id);
    res.status(status).json(resp);
  }

  @Delete('album/:id')
  removeAlbum(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Res() res: Response,
  ) {
    const { status } = this.favsService.removeAlbum(id);
    res.status(status).json();
  }

  @Post('artist/:id')
  addArtist(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Res() res: Response,
  ) {
    const { status, resp } = this.favsService.addArtist(id);
    res.status(status).json(resp);
  }

  @Delete('artist/:id')
  removeArtist(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Res() res: Response,
  ) {
    const { status } = this.favsService.removeArtist(id);
    res.status(status).json();
  }
}
