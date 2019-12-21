INSERT INTO [dbo].[Author] (
	Name
) VALUES (
 'Elizabeth A. Smart'
)
INSERT INTO [dbo].[Author] (
	Name
) VALUES (
 'Chris Stewart'
)
Select * from [dbo].[Author]

INSERT INTO [dbo].[Book]  (
	 ISBN
	,Title
	,Price
	,Language
	,ImageLink
	,PublishedDate
	,Publisher 
	,Categories
) VALUES (
	'm0mKpfSlewQC',
	'My Story',
	100,
	'English',
	'http://books.google.com/books/content?id=m0mKpfSlewQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72x84FajzeJcWcpSHdCvXLnxl28DAZ2axnKBSenpj8HYFvKnup1uBdem5Ac8XCIOZ12XvkSjHVty5fcbETkKrFor1cHOZI3ovsgQebQ71F7gxQvXwjA-tmB7vZAQcVIxPJdq6va&source=gbs_api',
	'2013-10-07',
	'St. Martins Press',
	'Biography & Autobiography / Personal Memoirs, True Crime / General'
)




INSERT INTO [dbo].[BooksAuthors] (
	 ISBN 
	,AuthorID
	,AuthorOrdinal
) VALUES (
	'm0mKpfSlewQC',
	1,
	1
)
INSERT INTO [dbo].[BooksAuthors] (
	 ISBN 
	,AuthorID
	,AuthorOrdinal
) VALUES (
	'm0mKpfSlewQC',
	2,
	2
)

Select * from [dbo].[BooksAuthors]