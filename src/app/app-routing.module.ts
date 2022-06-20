import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {PokemonsComponent} from "./pokemons/pokemons.component";
import {CompteComponent} from "./compte/compte.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'compte', component: CompteComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'pokemons/:name-:id', component: PokemonDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
