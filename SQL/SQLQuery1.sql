DROP TABLE [dbo].[BooksAuthors];

DROP TABLE [dbo].[Author];

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'BooksAuthors'))
BEGIN
CREATE TABLE [dbo].[BooksAuthors] (
	 ISBN VARCHAR(15) NOT NULL
	,AuthorName VARCHAR(50) NOT NULL
	,AuthorOrdinal INT NOT NULL
	,CONSTRAINT [PK_BooksAuthors_ISBN_AuthID] PRIMARY KEY (ISBN,AuthorName)
	,CONSTRAINT [FK_BooksAuthors_Book] FOREIGN KEY (ISBN) REFERENCES dbo.Book(ISBN)
)
END

