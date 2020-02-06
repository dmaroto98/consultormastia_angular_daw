from django.db import models

class Sucursal(models.Model):
	FechaApertura = models.DateTimeField('Fecha de apertura')
	DireccionSucursal = models.CharField(max_length=100)
	FormatoSucursal = models.CharField(max_length=50)
	MetrosCuadrados = models.FloatField() 
	NroSucursal = models.AutoField(primary_key=True,default=None)
	def __str__(self):
		return str(self.NroSucursal)

class Cliente(models.Model):
	Nombres = models.CharField(max_length=50)
	Apellidos = models.CharField(max_length=50)
	Email = models.CharField(max_length=50)
	Direccion = models.CharField(max_length=50)
	FechaIngreso = models.DateTimeField('Fecha de ingreso')
	FechaActualizacion = models.DateTimeField('Fecha de actualizacion')
	SucursalRegistro = models.CharField(max_length=50)
	Cedula = models.CharField(max_length=10,primary_key=True)
	def __str__(self):
		return self.Nombres+self.Apellidos

class Categoria(models.Model):
	DescripcionCategoria = models.CharField(max_length=100)
	NroProductos = models.IntegerField() 
	Categoria = models.CharField(max_length=100)
	Categoriaid = models.AutoField(primary_key=True,default=None)
	def __str__(self):
		return str(self.Categoria)
		
class TarjetaTia(models.Model):
	FechaEmision = models.DateTimeField('Fecha de emision')
	FechaModificacion = models.DateTimeField('Fecha de modificacion')
	TipoTarjeta = models.CharField(max_length=20)
	Cedula = models.ForeignKey(Cliente, on_delete=models.CASCADE,default=None)
	NumeroTarjeta = models.AutoField(primary_key=True,default=None)
	def __str__(self):
		return str(self.NumeroTarjeta)

class Transaccion(models.Model):
	FechaTransaccion = models.DateTimeField('Fecha de transaccion')
	TipoTransaccion = models.CharField(max_length=20)
	PuntosGenerados = models.IntegerField() 
	Total = models.FloatField() 
	Iva = models.FloatField() 
	NroTransaccion = models.AutoField(primary_key=True)
	NumeroTarjeta = models.ForeignKey(TarjetaTia, on_delete=models.CASCADE,default=None)
	Cedula = models.ForeignKey(Cliente, on_delete=models.CASCADE,default=None)
	NroSucursal = models.ForeignKey(Sucursal, on_delete=models.CASCADE,default=None)
	def __str__(self):
		return str(self.NroTransaccion)

class DetalleTransaccion(models.Model):
	FechaDetalle = models.DateTimeField('Fecha de detalle')
	Cantidad = models.IntegerField() 
	Descuento = models.FloatField() 
	NroTransaccion = models.ForeignKey(Transaccion, on_delete=models.CASCADE,default=None)
	NroDocumento = models.AutoField(primary_key=True,default=None)
	def __str__(self):
		return str(self.NroDocumento)
		


class Producto(models.Model):
	FechaCreacion = models.DateTimeField('Fecha de creacion')
	Descripcion = models.CharField(max_length=100)
	FechaCaducidad = models.DateTimeField('Fecha de caducidad')
	CodigoBarras = models.IntegerField() 
	CodigoProducto = models.CharField(max_length=20,primary_key=True)
	Categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE,default=None)
	NroDocumento = models.ForeignKey(DetalleTransaccion, on_delete=models.CASCADE,default=None)
	def __str__(self):
		return self.CodigoProducto


