import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { SEducacionService } from '../service/s-educacion.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educ: Educacion[] = [];

  constructor(private sEducacion:SEducacionService,private tokenService: TokenService) { }

  isLogged = false;

    ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data => {this.educ = data})
  }
  delete(id?:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
          window.alert("Educacion borrada");
        },err =>{
          window.alert("Error al borrar");
        }
      )
    }
  }
  
}