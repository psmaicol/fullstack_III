import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario-componentes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario-componentes.html',
  styleUrls: ['./inventario-componentes.css']
})
export class InventarioComponentesComponent implements OnInit {
  productos: any[] = [];
  nuevoProd = { nombre: '', precio: 0, stock: 0 };
  loading = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cargarProductos();
  }

  // GET: Obtener todos los productos del puerto 8080
  cargarProductos() {
    this.http.get<any[]>('http://localhost:8082/api/productos').subscribe({
      next: (res) => this.productos = res,
      error: (err) => console.error('Error al conectar con el inventario 8080', err)
    });
  }

  // POST: Agregar un nuevo producto al inventario
  agregarProducto() {
    if (!this.nuevoProd.nombre || this.nuevoProd.precio <= 0 || this.nuevoProd.stock < 0) {
      alert('Por favor, completa los campos con valores válidos.');
      return;
    }

    this.loading = true;

    // Convertimos explícitamente a números puros para evitar incompatibilidades con Java
    const payload = {
      nombre: this.nuevoProd.nombre,
      precio: Number(this.nuevoProd.precio),
      stock: Number(this.nuevoProd.stock)
    };

    const headers = { 'Content-Type': 'application/json' };

    this.http.post('http://localhost:8082/api/productos', payload, { headers }).subscribe({
      next: () => {
        this.loading = false;
        alert('✅ ¡Producto añadido al inventario exitosamente!');
        this.nuevoProd = { nombre: '', precio: 0, stock: 0 }; // Limpiar formulario
        this.cargarProductos(); // Recargar la tabla automáticamente
      },
      error: (err) => {
        this.loading = false;
        console.error('Error en POST:', err);
        alert('❌ Error al guardar el producto. Verifica que el puerto 8082 esté encendido.');
      }
    });
  }

  // DELETE: Quitar un producto del sistema
  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro de que deseas quitar este producto del inventario?')) {
      this.http.delete(`http://localhost:8082/api/productos/${id}`).subscribe({
        next: () => {
          alert('🗑️ Producto eliminado del sistema.');
          this.cargarProductos(); // Recargar la tabla automáticamente
        },
        error: (err) => {
          console.error('Error en DELETE:', err);
          alert('❌ Error al intentar eliminar. Asegúrate de tener implementado el método DeleteMapping.');
        }
      });
    }
  }

  volverAlInicio() {
    this.router.navigate(['/inicio']);
  }
}