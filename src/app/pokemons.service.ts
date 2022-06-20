import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  public typesData = [
    {
      "name": "Normal",
      "color": "#a8a878"
    },
    {
      "name": "Combat",
      "color": "#c03028"
    },
    {
      "name": "Vol",
      "color": "#a890f0"
    },
    {
      "name": "Poison",
      "color": "#a040a0"
    },
    {
      "name": "Sol",
      "color": "#e0c068"
    },
    {
      "name": "Roche",
      "color": "#b8a038"
    },
    {
      "name": "Insecte",
      "color": "#a8b820"
    },
    {
      "name": "Spectre",
      "color": "#705898"
    },
    {
      "name": "Acier",
      "color": "#b8b8d0"
    },
    {
      "name": "Feu",
      "color": "#f08030"
    },
    {
      "name": "Eau",
      "color": "#6890f0"
    },
    {
      "name": "Plante",
      "color": "#78c850"
    },
    {
      "name": "Electrique",
      "color": "#f8d030"
    },
    {
      "name": "Psy",
      "color": "#f85888"
    },
    {
      "name": "Glace",
      "color": "#98d8d8"
    },
    {
      "name": "Dragon",
      "color": "#7038f8"
    },
    {
      "name": "Ténèbre",
      "color": "#705848"
    },
    {
      "name": "Fée",
      "color": "#ffaaff"
    }
  ]
  constructor() { }

  getImg(id:number | undefined) {
    return "../../assets/pokemons/" + this.changeID(id) + ".png";
}
changeID(id:number | undefined) {
    let realID;
    if(id == undefined) {
      return;
    }
    if(id < 10) {
        realID = "00" + id;
    } else if (id >= 10 && id < 100) {
        realID = "0" + id;
    } else {
        realID = id;
    }
    return realID;
}
colorType(type:string | undefined) {
    let currentColor;
    let style;
    
    for(let i = 0; i < this.typesData.length; i++) {
        if(type == this.typesData[i].name) {
            currentColor = this.typesData[i].color;
        }
    }
    style = 'background-color:' + currentColor + ';'

    return style
}
generateURL(name:string | undefined, id:number | undefined) {
    return '/pokemons/' + name + '-' + id;
}
}
