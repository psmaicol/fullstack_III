export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  direccion?: string;
  activo: boolean;
  fechaCreacion: Date;
  rol: 'admin' | 'usuario' | 'editor';
}