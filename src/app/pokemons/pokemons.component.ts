import { Component, OnInit } from '@angular/core';
import {RoutesService} from "../routes.service";
import {PokemonsService} from "../pokemons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalService} from "../global.service";

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

  constructor(private route:RoutesService, public pokemonService:PokemonsService, private routeA: ActivatedRoute, private router: Router,private globalSrv: GlobalService) { }

  public userId: any;
  public maxSlot: any;
  public idCard: any;
  ngOnInit(): void {
    this.globalSrv.userId.subscribe((nextValue: any) => {
      this.userId = nextValue
    })
    this.route.getPokemons("french").then((pokemons:Pokemon[]) => {
      this.pokemons = pokemons
    })
    this.route.getEquipeDetails(this.userId).then((pokemons:any) => {
      this.maxSlot = pokemons.length;
    })
    this.idCard = localStorage.getItem('idCard')
  }

  paramsPokemon(id:number | undefined) {
    if (id === undefined){
      return;
    }
    this.router.navigate(["pokemon"], {queryParams: {id}}).then(r => r)
  }

  addPokemon(idPokemon:number | undefined){
    this.route.addPokemonInEquipe(this.userId, idPokemon, this.maxSlot + 1,1)
      .then(() => {
        this.router.navigate(["compte"]).then(r => r)
      })
  }

  editPokemon(idPokemon:number | undefined){
    this.route.editPokemonInEquipe(this.idCard, idPokemon)
      .then(() => {
        localStorage.removeItem('idCard')
        this.router.navigate(["compte"]).then(r => r)
      })
  }


}
