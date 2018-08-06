import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pets = [
      { id: 11, name: 'Purriliton' },
      { id: 12, name: 'Freddie' },
      { id: 13, name: 'Pupsikas' },
      { id: 14, name: 'Windfang the Third' },
      { id: 15, name: 'Maru' },
      { id: 16, name: 'Momo' },
      { id: 17, name: 'Salvadoras' },
      { id: 18, name: 'Kelmas' },
      { id: 19, name: 'Mr Boob' },
      { id: 20, name: 'Barklis' }
    ];
    return {pets};
  }
}
