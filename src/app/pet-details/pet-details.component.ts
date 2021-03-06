import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pet } from '../pet';
import { PetService }  from '../pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  @Input() pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPet();
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(pet => this.pet = pet);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.petService.updatePet(this.pet)
      .subscribe(() => this.goBack());
  }


}
