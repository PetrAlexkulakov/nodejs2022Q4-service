export class CreateUserDto {
    login: string;
    password: string;
    constructor(a: string, b: string){
        this.login = a
        this.password = b
    }
}
