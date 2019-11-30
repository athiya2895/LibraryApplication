/*
	Description: Create Table 'CUSTOMERMEMBERSHIP' script
	Created Date: 11/27/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'CustomerMemberShip'))
BEGIN
CREATE TABLE [dbo].[CustomerMemberShip] (
	 CustomerID INT NOT NULL
	,MemberShipNumber INT NOT NULL
	,NoOfBooksIssued INT NOT NULL
	,CONSTRAINT [PK_CustomerMemberShip_CustID_MembID] PRIMARY KEY (CustomerID,MemberShipNumber)
	,CONSTRAINT [FK_CustomerMemberShip_MemberShip] FOREIGN KEY (MemberShipNumber) REFERENCES dbo.MemberShip(MemberShipNumber) ON UPDATE CASCADE
	,CONSTRAINT [FK_CustomerMemberShip_Customer] FOREIGN KEY (CustomerID) REFERENCES dbo.Customer(CustomerID) ON UPDATE CASCADE
)
END
