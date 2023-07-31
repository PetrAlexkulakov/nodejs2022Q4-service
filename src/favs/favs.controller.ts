import { Controller, Get, Post, Body, Param, Delete, Res, Put, ParseUUIDPipe } from '@nestjs/common';
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
  addTrack(@Param('id', new ParseUUIDPipe()) id: string, @Res() res: Response) { //я всё это время мог делать так???
    const { status, resp } = this.favsService.addTrack(id);
    res.status(status).json(resp);
  }
}
