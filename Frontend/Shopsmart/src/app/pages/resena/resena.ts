import { Component, OnInit } from '@angular/core';



import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resena.html',
  styleUrls: ['./resena.scss']
})
export class Resenas implements OnInit {

  resenas: any[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    this.obtenerResenas();

  }

  obtenerResenas() {

    this.http.get<any[]>(
      'http://localhost:8084/api/resenas/producto/1'
    ).subscribe({

      next: (resp) => {

        console.log(resp);

        this.resenas = resp;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

}