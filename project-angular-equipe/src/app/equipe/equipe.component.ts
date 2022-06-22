import { Component, Input, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { Equipe } from '../models/equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
@Input() equipe:Equipe= new Equipe();
@Input() indice:number =0;
  constructor(private entrepriseService : EntrepriseService) { }

  ngOnInit(): void {
  }


  onSuppressionEquipe(indiceEquipe : number)
  {
    this.entrepriseService.SuppressionEquipe(indiceEquipe);
  }
}
