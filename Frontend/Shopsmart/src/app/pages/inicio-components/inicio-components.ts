import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-components',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio-components.html',
  styleUrls: ['./inicio-components.scss']
})
export class InicioComponents implements OnInit {

  usuario: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('usuario');
    if (data) {
      this.usuario = JSON.parse(data);
    }
  }

  navegarA(ruta: string): void {
    this.router.navigate([ruta]);
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}