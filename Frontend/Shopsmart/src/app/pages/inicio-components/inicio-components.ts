import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-components',
  standalone: true,
  imports: [CommonModule],
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

  logout() {

    localStorage.removeItem('usuario');

    this.router.navigate(['/']);

  }

}