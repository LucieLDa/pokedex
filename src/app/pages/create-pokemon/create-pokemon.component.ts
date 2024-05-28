import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../shared/pokemon.model';
import { PokedexService } from '../../shared/pokedex.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-pokemon',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.css'
})
export class CreatePokemonComponent {
  pokemon : Pokemon = new Pokemon("","","");
  private pokedexService = inject(PokedexService);
  pokemonList : Pokemon[] = [];

  //Add pokemon to the pokemon list in pokedexService
  createPokemon() : void {
    this.pokedexService.addPokemon(this.pokemon);
    this.pokedexService.getPokemons().subscribe(data => {
      this.pokemonList = data;
    })
  }


}
