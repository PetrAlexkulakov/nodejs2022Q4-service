import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Res,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Response } from 'express';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto, @Res() res: Response) {
    const { resp, status } = this.albumService.create(createAlbumDto);
    res.status(status).json(resp);
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(200).json(this.albumService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    const { resp, status } = this.albumService.findOne(id);
    res.status(status).json(resp);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAlbumDto: UpdateAlbumDto,
    @Res() res: Response,
  ) {
    const { resp, status } = this.albumService.update(id, updateAlbumDto);
    res.status(status).json(resp);
  }
  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    const { status } = this.albumService.remove(id);
    res.status(status).json();
  }
}
