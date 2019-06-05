DROP DATABASE IF EXISTS dungeon_db;
/* This is our production DB; we may need to set up some test DB's */
CREATE DATABASE dungeon_db;

USE dungeon_db;

CREATE TABLE rules (
    rule_id INT AUTO_INCREMENT NOT NULL,
    rule_title VARCHAR (255) NOT NULL,
    rule_description TEXT (21844) NOT NULL,
    Primary Key (rule_id)
);

SELECT * FROM rules;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    firebase_id VARCHAR (255) NOT NULL,
    rule_id_list VARCHAR (1000),
    Primary Key (user_id)
);

SELECT * FROM users;

CREATE TABLE memo (
    memo_id INT AUTO_INCREMENT NOT NULL,
    memo_title VARCHAR (255) NOT NULL,
    memo_message VARCHAR (255) NOT NULL,
    user_id INT NOT NULL,
    Primary Key (memo_id)
);

SELECT * FROM memo;