export class DBBook {
    ISBN: string;
    Title: string;
    Author: string[];
    Publisher: string;
    PublishedDate: Date;
    Description: string;
    Categories: string[];
    AverageRating: number;
    RatingsCount: number;
    ImageLinks: string[]; 
    ImageLink: string;
    noOfCopies: number;

    constructor(_id: string, _title: string,
                _authors: string[], _publisher: string,
                _publishedDate: Date, _description: string,
                _categories: string[], _averageRating: number,
                _ratingsCount: number, _noOfCopies: number,
                _imageLinks: {
                     thumbnail: string,
                     small: string,
                     medium: string
                   //  large: string
                }) {
                    this.ISBN = _id;
                    this.Author = _authors;
                    this.Title = _title;
                    this.AverageRating = _averageRating;
                    this.Publisher = _publisher;
                    this.PublishedDate = _publishedDate;
                    this.Description = _description;
                    this.Categories = _categories;
                    this.RatingsCount = _ratingsCount;                    
                    this.ImageLink = _imageLinks.medium+","+_imageLinks.small;
                    this.ImageLinks = this.ImageLink.split(',');
                    this.ImageLinks[2] = _imageLinks.thumbnail;
                    this.noOfCopies = _noOfCopies;

    }
}
