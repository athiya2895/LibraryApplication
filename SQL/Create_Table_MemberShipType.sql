/*
	Description: Create Table 'MemberShipType' script
	Created Date: 11/29/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'MemberShipType'))
BEGIN
CREATE TABLE [dbo].[MemberShipType] (
	 TypeID INT IDENTITY(1,1) NOT NULL
	,MemberShipType VARCHAR(15) NOT NULL
	,MembershipCharge MONEY NOT NULL
	,MaxBookLimit INT NOT NULL
	,CONSTRAINT [PK_MemberShipTypeTypeID] PRIMARY KEY (TypeID)
)
END
