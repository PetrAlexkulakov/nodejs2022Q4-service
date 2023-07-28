import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users } from 'src/DB/users';
import { isUUID } from 'class-validator';
import { HttpException } from '@nestjs/common';
import { hasSameProperties } from 'src/share/hasSameProperties';
import { createOneUser } from 'src/DB/users';

@Injectable()
export class UserService {
  private checkId(id: string) {
    const resp = users.find(user => user.id === id)

    if (!isUUID(id)) {
      throw new HttpException('userId is invalid (not uuid)', 400);
    } else if (resp === undefined) {
      throw new HttpException('record with id === userId does not exist', 404);
    }
  }
  create(createUserDto: CreateUserDto) {
    if (!hasSameProperties(createUserDto, new CreateUserDto('1', '2'))) {
      throw new HttpException('request body does not contain required fields', 400);
    }
    const nwUser = createOneUser(createUserDto.login, createUserDto.password)
    users.push(nwUser)

    return { resp: nwUser, status: 200 };
  }

  findAll() {
    return users;
  }

  findOne(id: string) {
    const resp = users.find(user => user.id === id)
    this.checkId(id)

    return { resp: resp, status: 200 }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    this.checkId(id)
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1)[0];

    return { status: 204 }
  }
}
