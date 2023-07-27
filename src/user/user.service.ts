import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users } from 'src/DB/users';
import { isUUID } from 'class-validator';

@Injectable()
export class UserService {

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return users;
  }

  findOne(id: string) {
    const resp = users.find(user => user.id === id)
    if (!isUUID(id)) {
      return { resp: 'userId is invalid (not uuid)', status: 400 }
    } else if (resp === undefined) {
      return { resp: 'record with id === userId does not exist', status: 404 }
    }
    return { resp: resp, status: 200 }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
