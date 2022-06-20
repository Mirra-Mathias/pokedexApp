import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { RoutesService } from '../routes.service';

export interface Pokemon {
  baseAttack?: number,
  baseDefense?: number,
  baseHP?: number,
  baseSp_Attack?: number,
  baseSp_Defense?: number,
  baseSpeed?: number,
  id?: number,
  name?: string,
  type0?: string,
  type1?: string,
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemons: Pokemon[] = [];

  constructor(private route:RoutesService, public pokemonService:PokemonsService) { }

  ngOnInit(): void {
    this.route.getPokemons("french").then((pokemons:Pokemon[]) => {
      this.pokemons = pokemons
    })
  }



}
