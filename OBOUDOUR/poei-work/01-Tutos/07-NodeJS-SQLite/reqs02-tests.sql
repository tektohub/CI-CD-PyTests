
-- requêtes pour tester : 


--CREATE TABLE people (
--    first_name TEXT NOT NULL,
--    last_name  TEXT NOT NULL
--);


--select * from people;


SELECT 
    name
FROM 
    sqlite_master 
WHERE 
    type ='table' AND 
    name NOT LIKE 'sqlite_%';





