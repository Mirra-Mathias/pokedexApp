import { PokemonsService } from './../pokemons.service';
import { GlobalService } from './../global.service';
import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(private routeService: RoutesService, private globalService: GlobalService, private unPokemonService: PokemonsService) { }

  public equipe: any;
  public pokemonService: any;

  ngOnInit(): void {  
    this.routeService.getEquipeDetails(this.globalService.UserId)
    .then((result: any) => {
      this.equipe = result
    });

  //   for (let index = 0; index < this.equipe.length; index++) {
  //     if(this.equipe[index] == null) {
  //       this.equipe[index] = newObject;
  //       break;
  //   }
  // }

    this.pokemonService = this.unPokemonService; 
  }

}
