import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resena',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resenas-componentes.html',
  styleUrls: ['./resenas-componentes.scss'] // Apunta exacto a tus estilos scss
})
export class ResenaComponent implements OnInit {
  listaResenas: any[] = [];
  nuevaResena = {
    productoId: 1, // ID simulado para pruebas
    usuarioId: 1,  // ID simulado de cliente
    calificacion: 5,
    comentario: ''
  };
  loading = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.cargarResenas();
  }

  // GET: Leer comentarios guardados en Supabase (Puerto 8085)
  cargarResenas() {
    this.http.get<any[]>('http://localhost:8085/api/resenas').subscribe({
      next: (res) => {
        this.listaResenas = res;
      },
      error: (err) => {
        console.error('Error conectando al microservicio 8085:', err);
      }
    });
  }

  // POST: Guardar una nueva opinión en el backend de Java
  publicarResena() {
    if (!this.nuevaResena.comentario.trim()) {
      alert('Por favor, escribe un comentario antes de enviar.');
      return;
    }

    this.loading = true;

    this.http.post('http://localhost:8085/api/resenas', this.nuevaResena).subscribe({
      next: () => {
        this.loading = false;
        alert('💬 ¡Reseña guardada con éxito!');
        this.nuevaResena.comentario = ''; // Vaciar la caja de texto
        this.cargarResenas(); // Recargar la lista en tiempo real
      },
      error: (err) => {
        this.loading = false;
        console.error('Error al guardar:', err);
        alert('❌ Error al publicar la reseña.');
      }
    });
  }

  volverAlInicio() {
    this.router.navigate(['/inicio']);
  }
}