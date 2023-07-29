import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    oldPassword: string; // previous password
    newPassword: string; // new password
    constructor(a: string, b: string){
        super();
        this.oldPassword = a
        this.newPassword = b
    }
}
