import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia:SExperienciaService,private tokenService: TokenService) { }

  isLogged = false;

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data})
  }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  
}

