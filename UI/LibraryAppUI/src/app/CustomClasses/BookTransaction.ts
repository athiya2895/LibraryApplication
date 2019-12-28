export class BookTransaction{
    ISBN: string;
    LibrarianId: string;
    CustomerId: string;
    constructor(_isbn: string, _librarianId: string, _customerId: string) {
        this.ISBN = _isbn;
        this.LibrarianId = _librarianId;
        this.CustomerId = _customerId;
    }
}