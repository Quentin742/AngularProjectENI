import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from './entreprise.service';
import { Equipe } from './models/equipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private entrepriseService : EntrepriseService)
  {

  }

  ngOnInit(): void {
    this.equipes = this.entrepriseService.listEquipe;
  }

  nomEquipe:string='';
  equipes:Equipe[] =[];
  onAjouterEquipe(){
    let e = new Equipe(this.nomEquipe);
    this.nomEquipe='';
    this.entrepriseService.AjoutEquipe(e);
  }
}
