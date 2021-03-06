# Generated by Django 3.0.1 on 2020-01-17 16:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('DescripcionCategoria', models.CharField(max_length=100)),
                ('NroProductos', models.IntegerField()),
                ('Categoria', models.CharField(max_length=100)),
                ('Categoriaid', models.AutoField(default=None, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('Nombres', models.CharField(max_length=50)),
                ('Apellidos', models.CharField(max_length=50)),
                ('Email', models.CharField(max_length=50)),
                ('Direccion', models.CharField(max_length=50)),
                ('FechaIngreso', models.DateTimeField(verbose_name='Fecha de ingreso')),
                ('FechaActualizacion', models.DateTimeField(verbose_name='Fecha de actualizacion')),
                ('SucursalRegistro', models.CharField(max_length=50)),
                ('Cedula', models.CharField(max_length=10, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='DetalleTransaccion',
            fields=[
                ('FechaDetalle', models.DateTimeField(verbose_name='Fecha de detalle')),
                ('Cantidad', models.IntegerField()),
                ('Descuento', models.FloatField()),
                ('CodigoProducto', models.CharField(max_length=20)),
                ('NroDocumento', models.AutoField(default=None, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Sucursal',
            fields=[
                ('FechaApertura', models.DateTimeField(verbose_name='Fecha de apertura')),
                ('DireccionSucursal', models.CharField(max_length=100)),
                ('FormatoSucursal', models.CharField(max_length=50)),
                ('MetrosCuadrados', models.FloatField()),
                ('NroSucursal', models.AutoField(default=None, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='TarjetaTia',
            fields=[
                ('FechaEmision', models.DateTimeField(verbose_name='Fecha de emision')),
                ('FechaModificacion', models.DateTimeField(verbose_name='Fecha de modificacion')),
                ('TipoTarjeta', models.CharField(max_length=20)),
                ('NumeroTarjeta', models.AutoField(default=None, primary_key=True, serialize=False)),
                ('Cedula', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='admintia.Cliente')),
            ],
        ),
        migrations.CreateModel(
            name='Transaccion',
            fields=[
                ('FechaTransaccion', models.DateTimeField(verbose_name='Fecha de transaccion')),
                ('TipoTransaccion', models.CharField(max_length=20)),
                ('PuntosGenerados', models.IntegerField()),
                ('Total', models.FloatField()),
                ('Iva', models.FloatField()),
                ('NroTransaccion', models.AutoField(primary_key=True, serialize=False)),
                ('Cedula', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='admintia.Cliente')),
                ('NroSucursal', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='admintia.Sucursal')),
                ('NumeroTarjeta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='admintia.TarjetaTia')),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('FechaCreacion', models.DateTimeField(verbose_name='Fecha de creacion')),
                ('Descripcion', models.CharField(max_length=100)),
                ('FechaCaducidad', models.DateTimeField(verbose_name='Fecha de caducidad')),
                ('CodigoBarras', models.IntegerField()),
                ('CodigoProducto', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('Categoria', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='admintia.Categoria')),
                ('NroDocumento', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='admintia.DetalleTransaccion')),
            ],
        ),
        migrations.AddField(
            model_name='detalletransaccion',
            name='NroTransaccion',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='admintia.Transaccion'),
        ),
    ]
