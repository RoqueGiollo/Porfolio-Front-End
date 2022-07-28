import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion} from '../model/educacion';
import { SEducacionService } from '../service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string = '';
  descripcionEd: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educ = new Educacion(this.nombreEd,this.descripcionEd);
    
    this.sEducacion.save(educ).subscribe(data=>{
      window.alert("Educacion anadida");
      this.router.navigate(['education'])
      //window.location.reload();

    }, err =>{
      window.alert("Fallo");
      this.router.navigate(['education'])
     //window.location.replace('/#experience') 
    })
  }
}