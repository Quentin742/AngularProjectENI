import { Injectable } from '@angular/core';
import { Equipe } from './models/equipe';
import { Personne } from './models/personne';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService{

  listEquipe : Equipe[] = [];

  listMembre : Personne[] = [];

  constructor() { }

  SuppressionEquipe(indiceEquipe : number)
  {
      this.listEquipe.splice(indiceEquipe, 1);
  }

  AjoutEquipe(equipe : Equipe)
  {
    this.listEquipe.push(equipe);
  }
}
