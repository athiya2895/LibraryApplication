/*
	Description: Create Table 'LIBRARIAN' script
	Created Date: 11/27/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'Librarian'))
BEGIN
CREATE TABLE [dbo].[Librarian] (
	 LibrarianID INT IDENTITY (1,1) NOT NULL
	,Name VARCHAR(50) NOT NULL
	,Designation VARCHAR(50) NOT NULL
	,LibraryID INT NOT NULL
	,UserID VARCHAR(15) NOT NULL
	,CONSTRAINT [PK_Librarian_LibrarianID] PRIMARY KEY (LibrarianID)
	,CONSTRAINT [FK_Librarian_Library] FOREIGN KEY (LibraryID) REFERENCES dbo.Library(LibraryID) ON UPDATE CASCADE
	,CONSTRAINT [FK_Librarian_UserLogin] FOREIGN KEY (UserID) REFERENCES dbo.UserLogin(UserID) ON UPDATE CASCADE
)
END
