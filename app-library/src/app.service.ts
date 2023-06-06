import { Author, Book } from "./schema";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  private readonly books: Book[] = [
    {
      id_book: 1,
      name: "Book 1",
      summary: "Summary of Book 1",
      creation_date: new Date("2021-01-01"),
      rating: 4.5,
      id_author: { id_author: 1, name: "Author 1" } as Author,
      comments: []
    },
    {
      id_book: 2,
      name: "Book 2",
      summary: "Summary of Book 2",
      creation_date: new Date("2021-02-01"),
      rating: 4.0,
      id_author: { id_author: 2, name: "Author 2" } as Author,
      comments: []
    },
    {
      id_book: 3,
      name: "Book 3",
      summary: "Summary of Book 3",
      creation_date: new Date("2021-03-01"),
      rating: 4.2,
      id_author: { id_author: 3, name: "Author 3" } as Author,
      comments: []
    }
  ];

  async findAll(): Promise<Book[] | undefined> {
    return this.books;
  }

  async findById(id: number): Promise<Book> {
    return this.books.find(book => book.id_book === id);
  }
}
