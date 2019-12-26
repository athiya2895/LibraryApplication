/*
	Description: Create Table 'CUSTOMER' script
	Created Date: 11/27/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy
	Added email & pswd		12/26/2019					Supreetha
	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'Customer'))
BEGIN
CREATE TABLE [dbo].[Customer] (
	 CustomerID INT IDENTITY (10001,1) NOT NULL
	,Name VARCHAR(50) NOT NULL
	,Sex VARCHAR(10) NOT NULL
	,DateOfBirth DATE NOT NULL
	,Address VARCHAR(MAX) NOT NULL
	,PhoneNumber CHAR(10) NOT NULL
	,Email VARCHAR(30) UNIQUE NOT NULL
	,Password VARCHAR(MAX) NOT NULL
	,CONSTRAINT [PK_Customer_CustomerID] PRIMARY KEY (CustomerID)
	,CONSTRAINT [CHK_PHONE] CHECK (PhoneNumber NOT LIKE '%[^0-9]%') -- check that no number is not a digit
)
END
