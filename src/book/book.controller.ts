import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { Guid } from "guid-typescript";

@Controller('api/book')
export class BookController {
    constructor(private bookService : BookService) {}

    @Post()
    async create(@Body() data : CreateBookDto) : Promise<Book> {
        data.id = Guid.create().toString();
        this.bookService.create(data);
        return data;
    }

    @Get()
    async findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bookService.getBook(id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.bookService.deleteBook(id);
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() data: CreateBookDto){
        return this.bookService.updateBook(id, data);
    }
}
