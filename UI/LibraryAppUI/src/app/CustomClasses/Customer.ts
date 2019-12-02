export class Customer{
    UserID: string;
    Name: string;
    Sex: string;
    Address: string;
    DateOfBirth: Date;
    PhoneNumber: string;
//    issuedBooks: Array<IssuedBook> = new Array<IssuedBook>();
    constructor(_userID: string, _name: string, _sex: string, _address: string,
        _dob: Date,_ph: string) {
        this.UserID = _userID;
        this.Name = _name;
        this.Sex = _sex;
        this.Address = _address;
        this.DateOfBirth = _dob;
        this.PhoneNumber = _ph;
    }
}