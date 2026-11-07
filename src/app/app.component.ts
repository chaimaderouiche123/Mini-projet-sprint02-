import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Mes Oeuvres';
  
  // Variables pour gérer l'ouverture des menus déroulants
  isOeuvresOpen = false;
  isUserOpen = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    let isloggedin: string;
    let loggedUser: string;
    isloggedin = localStorage.getItem('isloggedIn')!;
    loggedUser = localStorage.getItem('loggedUser')!;
    if (isloggedin != "true" || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }

  toggleOeuvres() {
    this.isOeuvresOpen = !this.isOeuvresOpen;
  }

  toggleUser() {
    this.isUserOpen = !this.isUserOpen;
  }

  onLogout() {
    this.authService.logout();
  }
}