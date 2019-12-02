/*
	Description: Create Table 'UserLogin' script
	Created Date: 11/29/2019

	Changes history:
	*******************************************************************
	Description				ModifiedDate				ModifiedBy

	*******************************************************************
	
*/


IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'UserLogin'))
BEGIN
CREATE TABLE [dbo].[UserLogin] (
	 UserID VARCHAR(15) NOT NULL
	,Password VARCHAR(MAX) NOT NULL
	,Role VARCHAR(20) NOT NULL
	,CONSTRAINT [PK_UserLogin_UserID] PRIMARY KEY (UserID)
)
END
