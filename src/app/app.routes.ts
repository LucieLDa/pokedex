import { Routes } from '@angular/router';
import { CreatePokemonComponent } from './pages/create-pokemon/create-pokemon.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';

export const routes: Routes = [
    { path: 'create', component: CreatePokemonComponent },
    { path: '', component: PokedexPageComponent },
];
