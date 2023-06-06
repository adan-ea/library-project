import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, ManyToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id_category: number;

  @Column()
  name: string;
}

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id_author: number;

  @Column()
  name: string;

  @Column()
  lastname: string;
}

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id_book: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  creation_date: Date;

  @Column({ type: 'decimal', precision: 5, scale: 1 })
  rating: number;

  @ManyToOne(() => Author)
  id_author: Author;

  @ManyToOne(() => Comment)
  comments: Comment[];
}

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id_comment: number;

  @Column()
  comment: string;

  @Column()
  likes: number;

  @OneToMany(() => Book, (book) => book.comments)
  id_book: Book;
}

@Entity()
export class Belongs {
  @ManyToMany(() => Book)
  id_book: Book;

  @ManyToMany(() => Category)
  id_category: Category;
}