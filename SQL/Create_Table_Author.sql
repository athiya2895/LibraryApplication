/*
	Description: Create Table 'Author' script
	Created Date: 11/29/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'Author'))
BEGIN
CREATE TABLE [dbo].[Author] (
	 AuthorID INT IDENTITY (1,1) NOT NULL
	,Name VARCHAR(50) NOT NULL
	,CONSTRAINT [PK_Author_AuthorID] PRIMARY KEY (AuthorID)
)
END
