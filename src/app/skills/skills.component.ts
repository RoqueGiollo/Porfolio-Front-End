import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../model/habilidad';
import { SHabilidadService } from '../service/s-habilidad.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habi: Habilidad[] = [];

  constructor(private sHabilidad:SHabilidadService,private tokenService: TokenService) { }

  isLogged = false;

    ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  cargarHabilidad():void{
    this.sHabilidad.lista().subscribe(data => {this.habi = data})
  }
  delete(id?:number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
          window.alert("Habilidad borrada");
        },err =>{
          window.alert("Error al borrar");
        }
      )
    }
  }
  
}