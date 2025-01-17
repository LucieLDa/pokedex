import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  //Show all informations of a pokemon
  @Input()
  pokemon ?: Pokemon;
}
