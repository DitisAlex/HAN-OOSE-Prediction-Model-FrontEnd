CREATE DATABASE test_db;
use test_db;
CREATE TABLE `user` (
  `id` BIGINT AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE(`USERNAME`)
);
INSERT INTO user (username, password)
VALUES ('admin', 'admin');