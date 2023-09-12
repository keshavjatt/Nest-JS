import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
export declare class BookService {
    private bookModel;
    constructor(bookModel: mongoose.Model<Book>);
}
