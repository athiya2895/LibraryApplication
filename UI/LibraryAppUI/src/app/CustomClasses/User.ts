
export class User {
    UserRole: string;
    UserID: string;
//    issuedBooks: Array<IssuedBook> = new Array<IssuedBook>();
    constructor(_role: string, _userID: string) {
        this.UserRole = _role;
        this.UserID = _userID;
    }
}
