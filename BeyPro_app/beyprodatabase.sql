create database beyprodatabase;
use beyprodatabase;

CREATE TABLE usuario (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) NOT NULL,
senha VARCHAR(20) NOT NULL
);

CREATE TABLE blade(
id INT AUTO_INCREMENT,
nome VARCHAR(20),
peso DECIMAL(3,2),
cor VARCHAR(10),
img VARCHAR(80),
PRIMARY KEY (id)
);

CREATE TABLE ratchet(
id INT AUTO_INCREMENT,
nome VARCHAR(5),
cor VARCHAR(10),
peso DECIMAL(3,2),
img VARCHAR(80),
PRIMARY KEY (id)
);

CREATE TABLE bit(
id INT AUTO_INCREMENT,
nome VARCHAR(20),
tipo VARCHAR(80),
cor VARCHAR(10),
peso DECIMAL(3,2),
img VARCHAR(80),
PRIMARY KEY (id)
);

CREATE TABLE bey(
id INT AUTO_INCREMENT,
serie VARCHAR(5),
tipo VARCHAR(80),
modelo CHAR(2),
idblade INT,
idratchet INT,
idbit INT,
img VARCHAR(80),
PRIMARY KEY (id),
FOREIGN KEY (idblade) REFERENCES blade(id),
FOREIGN KEY (idratchet) REFERENCES ratchet(id),
FOREIGN KEY (idbit) REFERENCES bit(id)
);

CREATE TABLE favoritos (
id INT AUTO_INCREMENT PRIMARY KEY,
idusuario INT NOT NULL,
idbey INT NOT NULL,
tipo VARCHAR(2) NOT NULL,
FOREIGN KEY (idusuario) REFERENCES usuario(id),
FOREIGN KEY (idbey) REFERENCES bey(id)
);