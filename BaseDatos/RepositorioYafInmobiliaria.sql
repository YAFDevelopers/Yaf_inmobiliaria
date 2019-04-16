/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 13.5 		*/
/*  Created On : 07-abr.-2019 4:38:45 a. m. 				*/
/*  DBMS       : MySql 						*/
/* ---------------------------------------------------- */

CREATE DATABASE IF NOT EXISTS RegistroInmobiliaria;
USE RegistroInmobiliaria;

SET FOREIGN_KEY_CHECKS=0 
;

/* Drop Tables */

DROP TABLE IF EXISTS `Agente` CASCADE
;

DROP TABLE IF EXISTS `Citas` CASCADE
;

DROP TABLE IF EXISTS `Clientes` CASCADE
;

DROP TABLE IF EXISTS `Inmubles` CASCADE
;

DROP TABLE IF EXISTS `TipodeDocumentos` CASCADE
;

DROP TABLE IF EXISTS `TipoInmuebles` CASCADE
;

/* Create Tables */

CREATE TABLE `Agente`
(
	`IdAgente_Agentes` INT NOT NULL AUTO_INCREMENT,
	`IdTipoDocumento_Agentes` INT NOT NULL,
	`NumeroDocumento_Agentes` VARCHAR(50) NOT NULL,
	`PrimerNombre_Agentes` VARCHAR(50) NOT NULL,
	`SegundoNombre_Agentes` VARCHAR(50) NULL,
	`PrimerApellido_Agentes` VARCHAR(50) NOT NULL,
	`SegundoApellido_Agentes` VARCHAR(50) NULL,
	`FechaNacimiento_Agentes` DATE NOT NULL,
	`Correo_Agentes` VARCHAR(50) NOT NULL,
	`NumeroTelfono_Agentes` VARCHAR(50) NOT NULL,
	`Estado_Agente` VARCHAR(50) NOT NULL,
	`FechaRegistro_Agente` TIMESTAMP(4) NULL,
	CONSTRAINT `PK_Agente` PRIMARY KEY (`IdAgente_Agentes` ASC)
)

;

CREATE TABLE `Citas`
(
	`IdCita_Citas` INT NOT NULL AUTO_INCREMENT,
	`Fecha_Citas` DATE NOT NULL,
	`Hora_Citas` TIME NOT NULL,
	`Estado_Citas` VARCHAR(50) NOT NULL,
	`IdCliente_Citas` INT NOT NULL,
	`IdAgente_Citas` INT NOT NULL,
	`IdInmueble_Citas` INT NOT NULL,
	`FechaRegistro_Citas` TIMESTAMP NOT NULL,
	CONSTRAINT `PK_Table1` PRIMARY KEY (`IdCita_Citas` ASC)
)

;

CREATE TABLE `Clientes`
(
	`IdCliente_Clientes` INT NOT NULL AUTO_INCREMENT,
	`IdTipoDocumento_Clientes` INT NOT NULL,
	`NumeroDocuemto_Clientes` VARCHAR(50) NULL,
	`PrimerNombre_Clientes` VARCHAR(50) NOT NULL,
	`SegundoNombre_Clientes` VARCHAR(50) NULL,
	`PrimerApellido_Clientes` VARCHAR(50) NOT NULL,
	`SegundoApellido_Clientes` VARCHAR(50) NULL,
	`FechaNacimiento_Clientes` DATE NOT NULL,
	`Correo_Clientes` VARCHAR(50) NOT NULL,
	`NumeroTelefono_Clientes` VARCHAR(50) NOT NULL,
	`Estado_Clientes` VARCHAR(50) NOT NULL,
	`FechaRegistro_Clientes` TIMESTAMP NULL,
	CONSTRAINT `PK_Cliente` PRIMARY KEY (`IdCliente_Clientes` ASC)
)

;

CREATE TABLE `Inmubles`
(
	`IdInmuble_Inmuebles` INT NOT NULL AUTO_INCREMENT,
	`IdTipoInmueble_Inmuebles` INT NOT NULL,
	`NombreInmuble_Inmuebles` VARCHAR(50) NULL,
	`Descripcon_Inmuebles` TEXT NULL,
	`Direccion_Inmuebles` VARCHAR(50) NULL,
	`Valor_Inmuebles` VARCHAR(50) NULL,
	`Estado_Inmuebles` VARCHAR(50) NULL,
	`FechaRegistro_Inmuebles` TIMESTAMP NULL,
	CONSTRAINT `PK_Table1` PRIMARY KEY (`IdInmuble_Inmuebles` ASC)
)

;

CREATE TABLE `TipodeDocumentos`
(
	`IdtipoddeDocumento_TipodeDocumentos` INT NOT NULL AUTO_INCREMENT,
	`NombreTipodeDocumento_TipodeDocumentos` VARCHAR(50) NULL,
	`InicialTipodeDocumento_TipodeDocumentos` VARCHAR(50) NULL,
	CONSTRAINT `PK_TipodeDocumentos` PRIMARY KEY (`IdtipoddeDocumento_TipodeDocumentos` ASC)
)

;

CREATE TABLE `TipoInmuebles`
(
	`IdTipoInmueble_TipoInmuebles` INT NOT NULL AUTO_INCREMENT,
	`NombreTipoInmueble` VARCHAR(50) NOT NULL,
	CONSTRAINT `PK_Table3` PRIMARY KEY (`IdTipoInmueble_TipoInmuebles` ASC)
)

;

/* Create Foreign Key Constraints */

ALTER TABLE `Agente` 
 ADD CONSTRAINT `FK_Agente_TipodeDocumentos`
	FOREIGN KEY (`IdTipoDocumento_Agentes`) REFERENCES `TipodeDocumentos` (`IdtipoddeDocumento_TipodeDocumentos`) ON DELETE Restrict ON UPDATE Cascade
;

ALTER TABLE `Citas` 
 ADD CONSTRAINT `FK_Citas_Agente`
	FOREIGN KEY (`IdAgente_Citas`) REFERENCES `Agente` (`IdAgente_Agentes`) ON DELETE Restrict ON UPDATE Cascade
;

ALTER TABLE `Citas` 
 ADD CONSTRAINT `FK_Citas_Clientes`
	FOREIGN KEY (`IdCliente_Citas`) REFERENCES `Clientes` (`IdCliente_Clientes`) ON DELETE Restrict ON UPDATE Cascade
;

ALTER TABLE `Citas` 
 ADD CONSTRAINT `FK_Citas_Inmubles`
	FOREIGN KEY (`IdInmueble_Citas`) REFERENCES `Inmubles` (`IdInmuble_Inmuebles`) ON DELETE Restrict ON UPDATE Cascade
;

ALTER TABLE `Clientes` 
 ADD CONSTRAINT `FK_Clientes_TipodeDocumentos`
	FOREIGN KEY (`IdTipoDocumento_Clientes`) REFERENCES `TipodeDocumentos` (`IdtipoddeDocumento_TipodeDocumentos`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Inmubles` 
 ADD CONSTRAINT `FK_Inmubles_TipoInmuebles`
	FOREIGN KEY (`IdTipoInmueble_Inmuebles`) REFERENCES `TipoInmuebles` (`IdTipoInmueble_TipoInmuebles`) ON DELETE Restrict ON UPDATE Cascade
;

SET FOREIGN_KEY_CHECKS=1 
;

INSERT INTO `tipodedocumentos` (`IdtipoddeDocumento_TipodeDocumentos`, `NombreTipodeDocumento_TipodeDocumentos`, `InicialTipodeDocumento_TipodeDocumentos`) VALUES (NULL, 'Cédula de ciudadanía ', 'CC');
INSERT INTO `tipodedocumentos` (`IdtipoddeDocumento_TipodeDocumentos`, `NombreTipodeDocumento_TipodeDocumentos`, `InicialTipodeDocumento_TipodeDocumentos`) VALUES (NULL, 'Cédula de Extranjería.', 'CE');
INSERT INTO `tipodedocumentos` (`IdtipoddeDocumento_TipodeDocumentos`, `NombreTipodeDocumento_TipodeDocumentos`, `InicialTipodeDocumento_TipodeDocumentos`) VALUES (NULL, 'Número de Identificación Tributaria', 'NIT');

INSERT INTO `tipoinmuebles` (`IdTipoInmueble_TipoInmuebles`, `NombreTipoInmueble`) VALUES (NULL, 'Apartamento');
INSERT INTO `tipoinmuebles` (`IdTipoInmueble_TipoInmuebles`, `NombreTipoInmueble`) VALUES (NULL, 'Casa');
INSERT INTO `tipoinmuebles` (`IdTipoInmueble_TipoInmuebles`, `NombreTipoInmueble`) VALUES (NULL, 'Finca');

INSERT INTO `inmubles` (`IdInmuble_Inmuebles`, `IdTipoInmueble_Inmuebles`, `NombreInmuble_Inmuebles`, `Descripcon_Inmuebles`, `Direccion_Inmuebles`, `Valor_Inmuebles`, `Estado_Inmuebles`, `FechaRegistro_Inmuebles`) VALUES (NULL, '1', 'Conjunto Bella vista', 'Linda vista', 'Carrera 3 # 18- 45-Tprre B -apt 506', '54000000', 'ACTIVO', NULL);
INSERT INTO `inmubles` (`IdInmuble_Inmuebles`, `IdTipoInmueble_Inmuebles`, `NombreInmuble_Inmuebles`, `Descripcon_Inmuebles`, `Direccion_Inmuebles`, `Valor_Inmuebles`, `Estado_Inmuebles`, `FechaRegistro_Inmuebles`) VALUES (NULL, '2', 'Casa grande', 'Es muy amplia', 'Carrera 7 # 84- 72', '120000000', 'ACTIVO', NULL);
INSERT INTO `inmubles` (`IdInmuble_Inmuebles`, `IdTipoInmueble_Inmuebles`, `NombreInmuble_Inmuebles`, `Descripcon_Inmuebles`, `Direccion_Inmuebles`, `Valor_Inmuebles`, `Estado_Inmuebles`, `FechaRegistro_Inmuebles`) VALUES (NULL, '3', 'Finca La santurrona', 'Bien ubicada', 'vereda La Balsa', '550000000', 'ACTIVO', NULL);

INSERT INTO `clientes` (`IdCliente_Clientes`, `IdTipoDocumento_Clientes`, `NumeroDocuemto_Clientes`, `PrimerNombre_Clientes`, `SegundoNombre_Clientes`, `PrimerApellido_Clientes`, `SegundoApellido_Clientes`, `FechaNacimiento_Clientes`, `Correo_Clientes`, `NumeroTelefono_Clientes`, `Estado_Clientes`, `FechaRegistro_Clientes`) VALUES (NULL, '1', '173481758732', 'Jorge', NULL, 'Camacho', NULL, '1970-01-16', 'camacho@gmail.com', '3456789012', 'ACTIVO', NULL);
INSERT INTO `clientes` (`IdCliente_Clientes`, `IdTipoDocumento_Clientes`, `NumeroDocuemto_Clientes`, `PrimerNombre_Clientes`, `SegundoNombre_Clientes`, `PrimerApellido_Clientes`, `SegundoApellido_Clientes`, `FechaNacimiento_Clientes`, `Correo_Clientes`, `NumeroTelefono_Clientes`, `Estado_Clientes`, `FechaRegistro_Clientes`) VALUES (NULL, '2', '65675475667', 'Jane', NULL, 'Smith', NULL, '1990-04-09', 'jane@gmail.com', '3210987654', 'ACTIVO', NULL);
INSERT INTO `clientes` (`IdCliente_Clientes`, `IdTipoDocumento_Clientes`, `NumeroDocuemto_Clientes`, `PrimerNombre_Clientes`, `SegundoNombre_Clientes`, `PrimerApellido_Clientes`, `SegundoApellido_Clientes`, `FechaNacimiento_Clientes`, `Correo_Clientes`, `NumeroTelefono_Clientes`, `Estado_Clientes`, `FechaRegistro_Clientes`) VALUES (NULL, '3', '21325647656', 'Luis', NULL, 'Perez', NULL, '1989-03-09', 'luis@gmail.com', '3102948576', 'ACTIVO', NULL);

INSERT INTO `agente` (`IdAgente_Agentes`, `IdTipoDocumento_Agentes`, `NumeroDocumento_Agentes`, `PrimerNombre_Agentes`, `SegundoNombre_Agentes`, `PrimerApellido_Agentes`, `SegundoApellido_Agentes`, `FechaNacimiento_Agentes`, `Correo_Agentes`, `NumeroTelfono_Agentes`, `Estado_Agente`, `FechaRegistro_Agente`) VALUES (NULL, '1', '542375748723', 'Luis', NULL, 'Gomez', NULL, '1989-10-08', 'luis@gmail.com', '338457398', 'ACTIVO', NULL);
INSERT INTO `agente` (`IdAgente_Agentes`, `IdTipoDocumento_Agentes`, `NumeroDocumento_Agentes`, `PrimerNombre_Agentes`, `SegundoNombre_Agentes`, `PrimerApellido_Agentes`, `SegundoApellido_Agentes`, `FechaNacimiento_Agentes`, `Correo_Agentes`, `NumeroTelfono_Agentes`, `Estado_Agente`, `FechaRegistro_Agente`) VALUES (NULL, '1', '173481758732', 'Felipe', NULL, 'Gomez', NULL, '1970-01-16', 'felipe@gmail.com', '3456789012', 'ACTIVO', NULL);
INSERT INTO `agente` (`IdAgente_Agentes`, `IdTipoDocumento_Agentes`, `NumeroDocumento_Agentes`, `PrimerNombre_Agentes`, `SegundoNombre_Agentes`, `PrimerApellido_Agentes`, `SegundoApellido_Agentes`, `FechaNacimiento_Agentes`, `Correo_Agentes`, `NumeroTelfono_Agentes`, `Estado_Agente`, `FechaRegistro_Agente`) VALUES (NULL, '1', '65675475667', 'Luisa', NULL, 'Rodriguez', NULL, '1990-04-09', 'luisa@gmail.com', '3210987654', 'ACTIVO', NULL);

INSERT INTO `citas` (`IdCita_Citas`, `Fecha_Citas`, `Hora_Citas`, `Estado_Citas`, `IdCliente_Citas`, `IdAgente_Citas`, `IdInmueble_Citas`, `FechaRegistro_Citas`) VALUES (NULL, '2019-04-11', '11:10:00', 'ACTIVO', '1', '1', '1', NULL);
INSERT INTO `citas` (`IdCita_Citas`, `Fecha_Citas`, `Hora_Citas`, `Estado_Citas`, `IdCliente_Citas`, `IdAgente_Citas`, `IdInmueble_Citas`, `FechaRegistro_Citas`) VALUES (NULL, '2019-05-21', '08:30:00', 'ACTIVO', '2', '2', '2', NULL);
INSERT INTO `citas` (`IdCita_Citas`, `Fecha_Citas`, `Hora_Citas`, `Estado_Citas`, `IdCliente_Citas`, `IdAgente_Citas`, `IdInmueble_Citas`, `FechaRegistro_Citas`) VALUES (NULL, '2019-04-19', '13:15:00', 'ACTIVO', '3', '3', '3', NULL);
