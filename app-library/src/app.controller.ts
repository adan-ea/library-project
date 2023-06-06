import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async BookById(@Param('id') id: string) {
    const bookId = parseInt(id, 10);
    const book = await this.appService.findById(bookId);
    if (!book) {
      throw new NotFoundException(`Book with id ${bookId} not found`);
    }
    return book;
  }

  @Get()
  async getAllBooks() {
    return this.appService.findAll();
  }
}