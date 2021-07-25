import { Injectable } from '@nestjs/common';
import { Book } from './book.interface'
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
    private readonly books : Book[] = [];

    create(book:CreateBookDto) {
        this.books.push(book);
    }

    findAll() : Book[] {
        return this.books;
    }

    getBook(id:string) {
        let idx = this.books.findIndex(o => o.id === id);
        if (idx !== -1) {
            return this.books[idx];
        }
        else {
            return {"message" : "Book Not Found"}
        }       
    }

    deleteBook(id:string) {
        let idx = this.books.findIndex(o => o.id === id);
        if (idx !== -1) {
            this.books.splice(idx);
            return {"message" : "Ok"};
        }
        else {
            return {"message" : "Book Not Found"}
        }       
    }

    updateBook(id:string, data:CreateBookDto) {
        let idx = this.books.findIndex(o => o.id === id);
        if (idx !== -1) {
            this.books[idx].title = data.title;
            this.books[idx].description = data.description;
            this.books[idx].authors = data.authors;
            this.books[idx].favorite = data.favorite;
            this.books[idx].fileCover = data.fileCover;
            return this.books[idx]
        } else {
            return {"message" : "Book Not Found"}
        }
    }

}
