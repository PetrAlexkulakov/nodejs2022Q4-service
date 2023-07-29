import { Controller, Get, Post, Body, Param, Delete, Res, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const { resp, status } = this.userService.create(createUserDto)
    res.status(status).json(resp);
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(200).json(this.userService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    const { resp, status } = this.userService.findOne(id)
    res.status(status).json(resp);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res() res: Response) {
    const { resp, status } = this.userService.update(id, updateUserDto);
    res.status(status).json(resp);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    const { status } = this.userService.remove(id);
    res.status(status).json();
  }
}
