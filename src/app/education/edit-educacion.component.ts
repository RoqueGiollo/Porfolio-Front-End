import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { ActivatedRoute, Router } from '@angular/router'
import { SEducacionService } from '../service/s-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educ : Educacion = null;
  
  constructor(private sEducacion: SEducacionService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.ditail(id).subscribe(
      data=>{
        this.educ = data;
      },err =>{
        window.alert("Error al modificar Educacion");
        this.router.navigate(['education']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educ).subscribe(
      data=>{
        window.alert("Educacion modificada");
        this.router.navigate(['education']);
      },err =>{
        window.alert("Error al modificar Educacion");
        this.router.navigate(['education']);
      }
    )
  }

}
