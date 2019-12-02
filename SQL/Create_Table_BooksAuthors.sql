/*
	Description: Create Table 'BooksAuthors' script
	Created Date: 11/29/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'BooksAuthors'))
BEGIN
CREATE TABLE [dbo].[BooksAuthors] (
	 ISBN VARCHAR(15) NOT NULL
	,AuthorID INT NOT NULL
	,AuthorOrdinal INT NOT NULL
	,CONSTRAINT [PK_BooksAuthors_ISBN_AuthID] PRIMARY KEY (ISBN,AuthorID)
	,CONSTRAINT [FK_BooksAuthors_Author] FOREIGN KEY (AuthorID) REFERENCES dbo.Author(AuthorID)
	,CONSTRAINT [FK_BooksAuthors_Book] FOREIGN KEY (ISBN) REFERENCES dbo.Book(ISBN)
)
END
