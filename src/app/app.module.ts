import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { CompteComponent } from './compte/compte.component';
import { LoginComponent } from './login/login.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PokemonsComponent,
    CompteComponent,
    LoginComponent,
    PokemonDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
