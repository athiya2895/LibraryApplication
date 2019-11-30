/*
	Description: Create Table 'BooksAtLibrary' script
	Created Date: 11/27/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'BooksAtLibrary'))
BEGIN
CREATE TABLE [dbo].[BooksAtLibrary] (
	 LibraryID INT NOT NULL
	,ISBN VARCHAR(15) NOT NULL
	,NumberOfCopies INT NOT NULL
	,CONSTRAINT [PK_BooksAtLibrary_ISBN_LibID] PRIMARY KEY (LibraryID,ISBN)
	,CONSTRAINT [FK_BooksAtLibrary_Library] FOREIGN KEY (LibraryID) REFERENCES dbo.Library(LibraryID) ON UPDATE CASCADE
	,CONSTRAINT [FK_BooksAtLibrary_Book] FOREIGN KEY (ISBN) REFERENCES dbo.Book(ISBN) ON UPDATE CASCADE
)
END

