import { Book } from './Book';

export class DBBook {
    id: string;
    book: Book = null;
    constructor(_id: string, _bookId: string, _title: string,
        _authors: string[], _publisher: string,
        _publishedDate: Date, _description: string,
        _categories: string[], _averageRating: number,
        _ratingsCount: number, _noOfCopies: number,
        _imageLinks: {
             thumbnail: string,
             small: string,
             medium: string,
             large: string
        }) {
        this.id = _id;
        this.book = new Book(_bookId, _title, _authors, _publisher, _publishedDate, _description, _categories,
            _averageRating, _ratingsCount, _noOfCopies, _imageLinks);
    }
}
