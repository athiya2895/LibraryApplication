
export class User {
    Role: string;
    UserID: string;
    Password: string;
//    issuedBooks: Array<IssuedBook> = new Array<IssuedBook>();
    constructor(_role: string, _userID: string, _pwd: string) {
        this.Role = _role;
        this.UserID = _userID;
        this.Password = _pwd;
    }
}
