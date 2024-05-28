import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { PokemonMock } from './pokemons-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemons : Pokemon[] = new PokemonMock().getMockPokemons();

  constructor() {}

  //Get the whole list of pokemon
  getPokemons() : Observable<Pokemon[]> {
    return of(this.pokemons);
  }

  //Add pokemon to data
  addPokemon(pokemon: Pokemon) : void{
    this.pokemons.push(pokemon);
  }

}
