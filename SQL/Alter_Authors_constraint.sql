ALTER TABLE [dbo].[BooksAuthors]
drop CONSTRAINT [FK_BooksAuthors_Book];

ALTER TABLE [dbo].[BooksAuthors]
ADD CONSTRAINT [FK_BooksAuthors_Book]
    FOREIGN KEY (ISBN) REFERENCES dbo.Book(ISBN)
    ON DELETE CASCADE ON UPDATE NO ACTION;