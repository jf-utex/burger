DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

CREATE TABLE burgers
(
 id int NOT NULL AUTO_INCREMENT,
 burger_name varchar(255) NOT NULL,
 devoured BOOLEAN default false,
 date TIMESTAMP,
 PRIMARY KEY (id)
);

-- INSERT INTO clients (client_name) VALUES ('Bilal');
-- INSERT INTO clients (client_name) VALUES ('Brianne');
-- INSERT INTO clients (client_name) VALUES ('Vincent');

INSERT INTO burgers (burger_name) VALUES ('Cheese');
INSERT INTO burgers (burger_name) VALUES ('Bacon');
INSERT INTO burgers (burger_name) VALUES ('Veggie');
