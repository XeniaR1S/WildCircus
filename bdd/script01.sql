
DROP DATABASE if exists wildcircus; 
CREATE DATABASE `wildcircus`;
USE `wildcircus`;
CREATE TABLE `reservation`(
  `ID` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `hour` INT NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL, 
  PRIMARY KEY (`ID`) 
);

