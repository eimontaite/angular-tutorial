import { Component, OnInit } from '@angular/core';

import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
   this.petService.getPets().subscribe(pets => this.pets = pets);
  }

  delete(pet: Pet): void {
    this.pets = this.pets.filter(p => p !== pet)
    this.petService.deletePet(pet)
      .subscribe();
  }

}
