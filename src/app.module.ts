import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';

@Module({
  imports: [],
  controllers: [/*AppController,*/ BookController],
  providers: [/*AppService,*/ BookService],
})
export class AppModule {}
