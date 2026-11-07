import { Routes } from '@angular/router';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { AddOeuvreComponent } from './add-oeuvre/add-oeuvre.component';
import { UpdateOeuvreComponent } from './update-oeuvre/update-oeuvre.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { oeuvreGuard } from './services/oeuvre.guard';

export const routes: Routes = [
  { path: "oeuvres", component: OeuvresComponent },
  { path: "addOeuvre", component: AddOeuvreComponent, canActivate: [oeuvreGuard] },
  { path: "updateOeuvre/:id", component: UpdateOeuvreComponent, canActivate: [oeuvreGuard] },
  { path: "rechercheParGenre", component: RechercheParGenreComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: "", redirectTo: "oeuvres", pathMatch: "full" }
];