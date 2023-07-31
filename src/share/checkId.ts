import { HttpException } from '@nestjs/common';
import { isUUID } from 'class-validator';

export function checkId(id: string, array: any[]) {
  const resp = array.find((elem) => elem.id === id);

  if (!isUUID(id)) {
    throw new HttpException('Id is invalid (not uuid)', 400);
  } else if (resp === undefined) {
    throw new HttpException('record with id does not exist', 404);
  }
}
