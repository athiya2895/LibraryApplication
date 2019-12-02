/*
	Description: Create Table 'BookTransactions' script
	Created Date: 11/29/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'BookTransactions'))
BEGIN
CREATE TABLE [dbo].[BookTransactions] (
	 TransactionID INT NOT NULL
	,ISBN VARCHAR(15) NOT NULL
	,MemberShipNumber INT NOT NULL
	,LibrarianID INT NOT NULL
	,BorrowedDate DATE NOT NULL
	,DueDate DATE NOT NULL
	,Status VARCHAR(10) NOT NULL
	,FineAmount MONEY NOT NULL DEFAULT 0
	,CONSTRAINT [PK_BookTransactions_TransactionID] PRIMARY KEY (TransactionID)
	,CONSTRAINT [FK_BookTransactions_Librarian] FOREIGN KEY (LibrarianID) REFERENCES dbo.Librarian(LibrarianID) ON UPDATE CASCADE
	,CONSTRAINT [FK_BookTransactions_Book] FOREIGN KEY (ISBN) REFERENCES dbo.Book(ISBN) ON UPDATE CASCADE
	,CONSTRAINT [FK_BookTransactions_MemberShip] FOREIGN KEY (MemberShipNumber) REFERENCES dbo.MemberShip(MemberShipNumber)
)
END

