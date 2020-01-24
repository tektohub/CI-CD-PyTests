/* DROP TABLE IF EXISTS `experts`;

CREATE TABLE `experts` (
  
  `nomExpert` varchar(50) NOT NULL,
  `prenomExpert` varchar(50) NOT NULL,
  `adresse` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `niveau` varchar(50) DEFAULT NULL,
  
  PRIMARY KEY (`expertId`),
  KEY `key1` (`key2`),
  CONSTRAINT `if1` FOREIGN KEY (`keyF1`) REFERENCES `table2` (`expertId`)
) */

