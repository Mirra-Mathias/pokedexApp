import { Component, OnInit } from '@angular/core';
import {RoutesService} from "../routes.service";
import {PokemonsService} from "../pokemons.service";
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

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
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public pokemon: Pokemon | undefined = {};

  constructor(private route:RoutesService, public pokemonService:PokemonsService, private routeA: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeA.queryParams.subscribe(async (params) => {
      this.route.getPokemons("french").then((pokemons:Pokemon[]) => {
        const param = parseInt(params['id'])
        this.pokemon = pokemons.find(p => p.id === param)
      })
    })
  }

}
