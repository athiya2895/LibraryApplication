/*
	Description: Altered tables to modify TransactionId to be Identity column and 
				 added ReturnDate column
	Created Date: 12/28/2019

	Changes history:
	****************************************************************************************************
	Description													ModifiedDate				ModifiedBy
	
	****************************************************************************************************
	
*/
IF(EXISTS(SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS  WHERE CONSTRAINT_NAME =  'PK_BookTransactions_TransactionID'))
BEGIN
	ALTER TABLE BookTransactions DROP CONSTRAINT PK_BookTransactions_TransactionID
END

IF NOT EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'Id_new'
          AND Object_ID = Object_ID(N'dbo.BookTransactions'))
BEGIN  
	ALTER TABLE BookTransactions
	ADD Id_new INT IDENTITY(100, 1) 
END
GO

IF EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'TransactionID'
          AND Object_ID = Object_ID(N'dbo.BookTransactions'))
BEGIN  
ALTER TABLE BookTransactions DROP COLUMN TransactionID
END
GO

Exec sp_rename 'BookTransactions.Id_new', 'TransactionID', 'Column'

SET IDENTITY_INSERT BookTransactions ON
GO

ALTER TABLE BookTransactions ADD CONSTRAINT [PK_BookTransactions_TransactionID] PRIMARY KEY (TransactionID) 

IF NOT EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'ReturnDate'
          AND Object_ID = Object_ID(N'dbo.BookTransactions'))
BEGIN 
ALTER TABLE BookTransactions
ADD ReturnDate Date
END
GO