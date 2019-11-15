export class Book {
    id: string;
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: Date;
    description: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
        thumbnail: string;
        small: string;
        medium: string;
        large: string;
    };
    noOfCopies: number;

    constructor(_id: string, _title: string,
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
                    this.authors = _authors;
                    this.title = _title;
                    this.averageRating = _averageRating;
                    this.publisher = _publisher;
                    this.publishedDate = _publishedDate;
                    this.description = _description;
                    this.categories = _categories;
                    this.ratingsCount = _ratingsCount;
                    this.imageLinks = _imageLinks;
                    this.noOfCopies = _noOfCopies;

    }
}
