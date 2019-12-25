/*
	Description: Altered tables to drop UserLogin and store userId and pswd in customer table
	Created Date: 12/25/2019

	Changes history:
	****************************************************************************************************
	Description													ModifiedDate				ModifiedBy
	
	****************************************************************************************************
	
*/
IF(EXISTS(SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_NAME =  'FK_CustomerMemberShip_Customer'))
BEGIN
	ALTER TABLE dbo.CustomerMemberShip   
	DROP CONSTRAINT FK_CustomerMemberShip_Customer;   
END 

IF (EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'Customer'))
BEGIN
	DROP TABLE Customer
END

IF(EXISTS(SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_NAME =  'FK_Librarian_UserLogin'))
BEGIN
	ALTER TABLE dbo.Librarian   
	DROP CONSTRAINT FK_Librarian_UserLogin;  
END

IF EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'UserID'
          AND Object_ID = Object_ID(N'dbo.Librarian'))
BEGIN
    ALTER TABLE dbo.Librarian   
	DROP COLUMN UserID;  
END


IF (EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = 'dbo'  AND  TABLE_NAME = 'UserLogin'))
BEGIN
	DROP TABLE UserLogin
END
--Execute Create_Table_Customer script

IF(EXISTS(SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_NAME =  'FK_BookTransactions_MemberShip'))
BEGIN
	ALTER TABLE dbo.BookTransactions   
	DROP CONSTRAINT FK_BookTransactions_MemberShip;   
END 

IF EXISTS(SELECT 1 FROM sys.columns WHERE Name = N'MemberShipNumber' AND Object_ID = Object_ID(N'dbo.BookTransactions'))
BEGIN
    ALTER TABLE dbo.BookTransactions   
	DROP COLUMN MemberShipNumber;  
END

IF (NOT EXISTS(SELECT 1 FROM sys.columns WHERE Name = N'CustomerId' AND Object_ID = Object_ID(N'dbo.BookTransactions')))
BEGIN
    ALTER TABLE dbo.BookTransactions   
	ADD CustomerId INT;  
END

IF(NOT EXISTS(SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_NAME =  'FK_BookTransactions_Customer'))
BEGIN
	ALTER TABLE dbo.BookTransactions   
	ADD CONSTRAINT FK_BookTransactions_Customer FOREIGN KEY (CustomerId) REFERENCES dbo.Customer(CustomerID) ON UPDATE CASCADE
END