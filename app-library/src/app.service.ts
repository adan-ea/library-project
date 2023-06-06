import { Injectable } from '@nestjs/common';
import { Book } from './schema';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  async findById(id: string) : Promise<Book>{
    return this.findById(id);
  }
}
