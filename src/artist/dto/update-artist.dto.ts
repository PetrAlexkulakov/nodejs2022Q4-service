import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto } from './create-artist.dto';

export class UpdateArtistDto extends PartialType(CreateArtistDto) {
    name: string;
    grammy: boolean;
    constructor(name: string, grammy: boolean) {
        super();
        this.name = name;
        this.grammy = grammy;
    }
}
