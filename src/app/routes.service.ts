import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http: HttpClient, private router: Router) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  getPokemons(lang:any): any {
    return new Promise((resolve, reject) => {
      const apiURL = environment.apiUrl + 'pokemons/language/:lang';
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          (success) => {
            resolve(success);
          },
          (msg) => {
            reject(msg);
          }
        );
    });
  }

  getEquipe(id:any): any {
    return new Promise((resolve, reject) => {
      const apiURL = environment.apiUrl + 'equipe/Equipe/:id';
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          (success) => {
            resolve(success);
          },
          (msg) => {
            reject(msg);
          }
        );
    });
  }

  getEquipeDetails(id:any): any {
    return new Promise((resolve, reject) => {
      const apiURL = environment.apiUrl + 'equipe/Details/:id';
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          (success) => {
            resolve(success);
          },
          (msg) => {
            reject(msg);
          }
        );
    });
  }

  addPokemonInEquipe(IdUser: any, IdPokemon: any, Slot: any, IdItem: any): any {
    return new Promise((resolve, reject) => {
      const apiURL = environment.apiUrl + 'equipe/Create';
      this.http
        .post(
          apiURL,
          {IdUser, IdPokemon, Slot, IdItem},
          this.httpOptions
        )
        .toPromise()
        .then(
          (success) => {
            resolve(success);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  editPokemonInEquipe(IdPokemon: any): any {
    return new Promise((resolve, reject) => {
      const apiURL = environment.apiUrl + 'equipe/Edit/:IdPokemon';
      this.http
        .post(
          apiURL,
          {IdPokemon},
          this.httpOptions
        )
        .toPromise()
        .then(
          (success) => {
            resolve(success);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  login(user: any, password: any): any {
    return new Promise((resolve, reject) => {
      const apiURL = environment.apiUrl + 'api/login';
      this.http
        .post(
          apiURL,
          {user, password},
          this.httpOptions
        )
        .toPromise()
        .then(
          (success) => {
            resolve(success);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getuser(id:any): any {
    return new Promise((resolve, reject) => {
      const apiURL = environment.apiUrl + 'users/:id';
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          (success) => {
            resolve(success);
          },
          (msg) => {
            reject(msg);
          }
        );
    });
  }

  register(name: any, password: any): any {
    return new Promise((resolve, reject) => {
      const apiURL = environment.apiUrl + 'users/login';
      this.http
        .post(
          apiURL,
          {name, password},
          this.httpOptions
        )
        .toPromise()
        .then(
          (success) => {
            resolve(success);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

}
