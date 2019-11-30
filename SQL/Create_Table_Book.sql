/*
	Description: Create Table 'BOOK' script
	Created Date: 11/27/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'Book'))
BEGIN
CREATE TABLE [dbo].[Book] (
	 ISBN VARCHAR(15) NOT NULL
	,Title VARCHAR(100) NOT NULL
	,Price MONEY NOT NULL
	,Language VARCHAR(20) NOT NULL
	,ImageLink VARCHAR(MAX) NOT NULL
	,PublishedDate DATE
	,Publisher VARCHAR(50)
	,Categories VARCHAR(MAX) NOT NULL -- comma separated category values. 1 book may belong to multiple categories
	,IsAvailable BIT NOT NULL DEFAULT 1
	,CONSTRAINT PK_Book_BookID PRIMARY KEY (ISBN)
)
END


