import { Component, OnInit } from '@angular/core';
import {RoutesService} from "../routes.service";
import {PokemonsService} from "../pokemons.service";
import {ActivatedRoute, Router} from "@angular/router";

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
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  public pokemons: Pokemon[] = [];

  constructor(private route:RoutesService, public pokemonService:PokemonsService, private routeA: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.getPokemons("french").then((pokemons:Pokemon[]) => {
      this.pokemons = pokemons
    })
  }

  paramsPokemon(id:number | undefined) {
    if (id === undefined){
      return;
    }
    this.router.navigate(["pokemon"], {queryParams: {id}}).then(r => r)
  }

}
