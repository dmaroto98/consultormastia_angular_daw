#drop database visorwebtia;
create database visorwebtia;
use visorwebtia;

CREATE TABLE `Producto` (
  `FechaCreacion` datetime,
  `Descripcion` varchar(100),
  `FechaCaducidad` datetime,
  `CodigoBarras` int,
  `Categoria` varchar(50),
  `CodigoProducto` varchar(20),
  `NroDocumento` int,
  PRIMARY KEY (`CodigoProducto`),
  KEY `FK` (`Categoria`, `NroDocumento`)
);

CREATE TABLE `Sucursal` (
  `FechaApertura` datetime,
  `DireccionSucursal` varchar(100),
  `FormatoSucursal` varchar(50),
  `MetrosCuadrados` float,
  `NroSucursal` int,
  PRIMARY KEY (`NroSucursal`)
);

CREATE TABLE `Transaccion` (
  `FechaTransaccion` datetime,
  `Sucursal` varchar(20),
  `TipoTransaccion` varchar(20),
  `PuntosGenerados` int,
  `Total` float,
  `Iva` float,
  `Cedula` varchar(10),
  `TarjetaTia` int,
  `Numerotarjeta` int,
  `NroTransaccion` int,
  `NroDocumento` int,
  `NroSucursal` int,
  PRIMARY KEY (`NroTransaccion`),
  KEY `FK` (`Cedula`, `Numerotarjeta`, `NroDocumento`, `NroSucursal`)
);



CREATE TABLE `Tarjeta Tia` (
  `FechaEmision` datetime,
  `FechaModificacion` datetime,
  `Tipo Tarjeta` int,
  `Cedula` varchar(10),
  `NumeroTarjeta` int,
  PRIMARY KEY (`NumeroTarjeta`),
  KEY `FK` (`Cedula`)
);

CREATE TABLE `Cliente` (
  `Nombres` varchar(50),
  `Apellidos` varchar(50),
  `Email` varchar(50),
  `Direccion` varchar(50),
  `FechaIngreso` datetime,
  `FechaActualizacion` datetime,
  `SucursalRegistro` varchar(50),
  `Cedula` varchar(10),
  PRIMARY KEY (`Cedula`)
);

CREATE TABLE `Categoria` (
  `DescripcionCategoria` varchar(100),
  `NroProductos` int,
  `Categoria` varchar(100),
  PRIMARY KEY (`Categoria`)
);

CREATE TABLE `DetalleTransaccion` (
  `FechaDetalle` datetime,
  `Cantidad` int,
  `Descuento` float,
  `NroTransaccion` int,
  `NroDocumento` int,
  PRIMARY KEY (`NroDocumento`),
  KEY `FK` (`NroTransaccion`)
);




