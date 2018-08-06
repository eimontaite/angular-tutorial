import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { PETS } from './my-pets';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  getPets(): Observable<Pet[]> {
    return of(PETS);
  }
  constructor() { }
}
