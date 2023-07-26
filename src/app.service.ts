import { Injectable } from '@nestjs/common';
import { users } from './DB/users';

@Injectable()
export class AppService {

  getAllUsers(): string {
    return JSON.stringify(users)
  }
}
