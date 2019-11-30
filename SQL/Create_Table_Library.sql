/*
	Description: Create Table 'LIBRARY' script
	Created Date: 11/27/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'Library'))
BEGIN
CREATE TABLE [dbo].[Library] (
	 LibraryID INT IDENTITY (1,1) NOT NULL
	,Name VARCHAR(15) NOT NULL
	,AddressID INT NOT NULL
	,CONSTRAINT [PK_Library_LibraryID] PRIMARY KEY (LibraryID)
	,CONSTRAINT [FK_Library_Address] FOREIGN KEY (AddressID) REFERENCES dbo.Address (AddressID) ON UPDATE CASCADE
)
END



