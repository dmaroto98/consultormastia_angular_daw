from django.contrib import admin
from .models import Producto,Sucursal,Transaccion,TarjetaTia,Cliente,Categoria,DetalleTransaccion
admin.site.register(Producto)
admin.site.register(Sucursal)
admin.site.register(Transaccion)
admin.site.register(TarjetaTia)
admin.site.register(Cliente)
admin.site.register(Categoria)
admin.site.register(DetalleTransaccion)
