/*
	Description: Create Table 'MEMBERSHIP' script
	Created Date: 11/27/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'MemberShip'))
BEGIN
CREATE TABLE [dbo].[MemberShip] (
	 MemberShipNumber INT NOT NULL
	,MemberShipTypeId INT NOT NULL
	,LibraryID INT NOT NULL
	,RegisteredDate DATETIME NOT NULL
	,RenewalDate DATETIME NOT NULL
	,Status VARCHAR(10) NOT NULL
	,CONSTRAINT [PK_MemberShip_MemberShipID] PRIMARY KEY (MemberShipNumber)
	,CONSTRAINT [FK_MemberShip_Library] FOREIGN KEY (LibraryID) REFERENCES dbo.Library(LibraryID) ON UPDATE CASCADE
	,CONSTRAINT [FK_MemberShip_MemberShipType] FOREIGN KEY (MemberShipTypeId) REFERENCES dbo.MemberShipType(TypeID) ON UPDATE CASCADE
)
END
