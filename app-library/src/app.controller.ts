import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async BookById(@Param('id') id: string) {
    const bookId = parseInt(id, 10);
    const book = await this.appService.findById(bookId);
    if (!book) {
      throw new NotFoundException(`Book with id ${bookId} not found`);
    }
    console.log(book);
    return book;
  }



  @Get()
  getAllBooks() {
    return this.appService.findAll();
  }
}