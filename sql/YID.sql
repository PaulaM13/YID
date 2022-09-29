DROP DATABASE IF EXISTS DB_IDO;
CREATE SCHEMA IF NOT EXISTS DB_IDO;
USE DB_IDO;
CREATE TABLE IF NOT EXISTS USUARIO(    /*TABLA USUARIO*/
IDUSUARIO BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
NOMBRE VARCHAR (255) NOT NULL,
APELLIDO VARCHAR (255),
CORREOELECTRONICO varchar(319),
CONTRASENYA VARCHAR (255),
FECHABODA DATE

);

INSERT INTO DB_IDO.USUARIO (IDUSUARIO, NOMBRE, APELLIDO, CORREOELECTRONICO, CONTRASENYA, FECHABODA) VALUES 
('1', 'Jhonny', 'Jaimes', 'jhonnyjaimes@gmail.com         ', '1234@.','2023/02/06'),
('2', 'Sofía', 'De Luca', 'sofiadeluca@gmail.com', 'A234@.','2024/04/22'),
('3', 'Paula', 'Molfino', 'paulamolfino@gmail.com', '_234@.','2024/12/23');






CREATE TABLE IF NOT EXISTS PRESUPUESTO(     /*TABLA PRESUPUESTO*/
ID_USUARIO BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
ID_PRODUCTO VARCHAR (255),
DESCRIPCION VARCHAR (255),
COSTO_UNITARIO VARCHAR (255),
CANTIDAD VARCHAR (255),
COSTO_TOTAL VARCHAR (255)

);
INSERT INTO DB_IDO.presupuesto (ID_USUARIO, ID_PRODUCTO, DESCRIPCION, COSTO_UNITARIO, CANTIDAD, COSTO_TOTAL) VALUES 
('2', 'Jazmín', 'Florería','1€','400','400€');



CREATE TABLE IF NOT EXISTS INVITADOS(  /*TABLA LISTA_INVITADOS*/
ID_INVITADO BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
NOMBRE_INVITADO VARCHAR (255),
CANT_INVITACION VARCHAR (255),
NRO_MENU VARCHAR (255),
ALERGIAS VARCHAR (255),
MUSICA VARCHAR (255),
NECESIDAD_ESPECIAL VARCHAR (255)



);
INSERT INTO DB_IDO.invitados (ID_INVITADO, NOMBRE_INVITADO, CANT_INVITACION, NRO_MENU, NECESIDAD_ESPECIAL ) VALUES 
('1', 'Julio Perez', '2','3','No');
SELECT * FROM INVITADOS;


SELECT * FROM PRESUPUESTO;

SELECT * FROM USUARIO;


