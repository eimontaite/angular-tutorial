import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  @Input() pet: Pet;

  constructor() { }

  ngOnInit() {
  }


}
