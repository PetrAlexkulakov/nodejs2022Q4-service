import { Controller, Get, Post, Body, Param, Delete, Res, Put } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Response } from 'express';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto, @Res() res: Response) {
    const { resp, status } = this.artistService.create(createArtistDto);
    res.status(status).json(resp);
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(200).json(this.artistService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    const { resp, status } = this.artistService.findOne(id);
    res.status(status).json(resp);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto, @Res() res: Response) {
  const { resp, status } = this.artistService.update(id, updateArtistDto);
  res.status(status).json(resp);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    const { status } = this.artistService.remove(id);
    res.status(status).json();
  }
}
