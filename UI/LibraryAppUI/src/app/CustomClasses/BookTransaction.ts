export class BookTransaction{
    ISBN: string;
    Title: string;
    LibrarianId: string;
    CustomerId: string;
    IssuedOn: Date;
    DueOn: Date;
    constructor(_isbn: string, _librarianId: string, _customerId: string) {
        this.ISBN = _isbn;
        this.LibrarianId = _librarianId;
        this.CustomerId = _customerId;
    }
}