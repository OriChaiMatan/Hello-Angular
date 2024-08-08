import { Component } from '@angular/core';
import { AnimalInfos } from '../../models/animal-infos.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss'
})
export class AnimalListComponent {

  animalInfos: AnimalInfos[] = [
    { type: 'Malayan Tiger', count: 787 },
    { type: 'Mountain Gorilla', count: 212 },
    { type: 'Fin Whale', count: 28 },
    { type: 'African Elephant', count: 2500 },
    { type: 'Bengal Tiger', count: 1800 },
    { type: 'Blue Whale', count: 12000 },
    { type: 'Giant Panda', count: 1864 },
    { type: 'Snow Leopard', count: 4000 },
    { type: 'Mountain Gorilla', count: 1063 },
    { type: 'Komodo Dragon', count: 3500 },
  ]
}
