import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users } from 'src/DB/users';
import { HttpException } from '@nestjs/common';
import { hasSameProperties } from 'src/share/hasSameProperties';
import { createOneUser } from 'src/DB/users';
import { User } from './entities/user.entity';
import { checkId } from 'src/share/checkId';

@Injectable()
export class UserService {
  private throwOutProperty(obj: User, property: keyof User) {
    const { [property]: _, ...rest } = obj;
    return rest;
  }

  create(createUserDto: CreateUserDto) {
    if (!hasSameProperties(createUserDto, new CreateUserDto('1', '2'))) {
      throw new HttpException(
        'request body does not contain required fields',
        400,
      );
    }
    const nwUser = createOneUser(createUserDto.login, createUserDto.password);
    users.push(nwUser);

    return { resp: this.throwOutProperty(nwUser, 'password'), status: 201 };
  }

  findAll() {
    const resp = users.map((user) => this.throwOutProperty(user, 'password'));
    return resp;
  }

  findOne(id: string) {
    checkId(id, users);

    const resp = this.throwOutProperty(
      users.find((user) => user.id === id),
      'password',
    );

    return { resp: resp, status: 200 };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    if (!hasSameProperties(updateUserDto, new UpdateUserDto('1', '2'))) {
      throw new HttpException(
        'request body does not contain required fields',
        400,
      );
    }
    checkId(id, users);

    const user = users.find((user) => user.id === id);
    if (updateUserDto.oldPassword !== user.password) {
      throw new HttpException('Password is wrong', 403);
    }
    user.password = updateUserDto.newPassword;
    user.version += 1;
    user.updatedAt = Date.now();
    return { resp: this.throwOutProperty(user, 'password'), status: 200 };
  }

  remove(id: string) {
    checkId(id, users);
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1)[0];

    return { status: 204 };
  }
}
