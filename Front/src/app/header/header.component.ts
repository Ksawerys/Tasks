import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
//   nombreUsuario: string;

//   constructor() {
//     let token = localStorage.getItem('token');
//     let decodedToken = jwt_decode(token);
//     this.nombreUsuario = decodedToken.nombre;
//  }
}
