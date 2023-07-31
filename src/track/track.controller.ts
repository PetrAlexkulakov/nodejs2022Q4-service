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
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Response } from 'express';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto, @Res() res: Response) {
    const { resp, status } = this.trackService.create(createTrackDto);
    res.status(status).json(resp);
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(200).json(this.trackService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    const { resp, status } = this.trackService.findOne(id);
    res.status(status).json(resp);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrackDto: UpdateTrackDto,
    @Res() res: Response,
  ) {
    const { resp, status } = this.trackService.update(id, updateTrackDto);
    res.status(status).json(resp);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    const { status } = this.trackService.remove(id);
    res.status(status).json();
  }
}
