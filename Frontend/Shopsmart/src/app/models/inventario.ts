export interface Inventario {
  id: number;
  nombreProducto: string;
  descripcion?: string;
  codigo: string;
  categoria: string;
  cantidad: number;
  precioCompra: number;
  precioVenta: number;
  proveedor?: string;
  fechaIngreso: Date;
  activo: boolean;
}