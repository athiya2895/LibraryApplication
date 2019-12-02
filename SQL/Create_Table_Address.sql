/*
	Description: Create Table 'ADDRESS' script
	Created Date: 11/27/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'Address'))
BEGIN
CREATE TABLE [dbo].[Address] (
	 AddressID INT IDENTITY (1,1) NOT NULL
	,StreetName VARCHAR(50) NOT NULL
	,City VARCHAR(50) NOT NULL
	,State VARCHAR(50) NOT NULL
	,Country VARCHAR(50) NOT NULL
	,Pincode CHAR(7) NOT NULL
	,CONSTRAINT [PK_Address_AddressID] PRIMARY KEY (AddressID)
	,CONSTRAINT [CHK_Pincode] CHECK ( [Pincode] LIKE '[0-9][0-9][0-9][0-9][0-9][0-9]' )
)
END


