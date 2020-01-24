/* créer la base de données 'dbexperts' : 
-table experts : contient tous les experts qui se connectent 

*/

-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = 'dbexperts'
)
CREATE DATABASE dbexperts
GO


