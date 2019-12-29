export class Customer{
    Email: string;
    Name: string;
    Sex: string;
    Address: string;
    DateOfBirth: Date;
    PhoneNumber: string;
    Password: string;
    Role: string;
    CustomerID: number;
//    issuedBooks: Array<IssuedBook> = new Array<IssuedBook>();
    constructor(_email: string, _name: string, _sex: string, _address: string,
        _dob: Date,_ph: string,_pswd: string, _role: string) {
        this.Email = _email;
        this.Name = _name;
        this.Sex = _sex;
        this.Address = _address;
        this.DateOfBirth = _dob;
        this.PhoneNumber = _ph;
        this.Password = _pswd;
        this.Role = _role;
    }
}