import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  @Input()
  pokemon !: Pokemon;

  //When user click on this component (aka pokemon), send the pokemon to parent (pokedexpage)
  @Output()
  selectPokemonByUser : EventEmitter<Pokemon> = new EventEmitter();

  selectPokemon() : void {
    this.selectPokemonByUser.emit(this.pokemon);
  }
}
