import { Component, inject } from '@angular/core';
import { Pokemon } from '../../shared/pokemon.model';
import { PokedexService } from '../../shared/pokedex.service';
import { PokemonDetailComponent } from '../../component/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from '../../component/pokemon-list/pokemon-list.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pokedex-page',
    standalone: true,
    templateUrl: './pokedex-page.component.html',
    styleUrl: './pokedex-page.component.css',
    imports: [PokemonListComponent, PokemonDetailComponent, CommonModule]
})
export class PokedexPageComponent {
  //Main page of the site: show pokemon list and details

  //The pokemon that the user clicks on
  selectedPokemon ?: Pokemon;

  //Pokemon list, init with mock data
  pokemonList : Pokemon[] = [];
  private pokedexService = inject(PokedexService);

  ngOnInit() : void {
    this.pokedexService.getPokemons().subscribe(data => {
      this.pokemonList = data;
    })
    console.log(this.pokemonList);
  }

  onReceiveSelectedPokemon(event : Pokemon): void {
    this.selectedPokemon = event;
  }
}
