import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ActivatedRoute, Router } from '@angular/router'
import { SExperienciaService } from '../service/s-experiencia.service'

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab : Experiencia = null;
  
  constructor(private sExperiencia: SExperienciaService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.ditail(id).subscribe(
      data=>{
        this.expLab = data;
      },err =>{
        window.alert("Error al modificar experiencia");
        this.router.navigate(['experience']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data=>{
        window.alert("Experiencia modificada");
        this.router.navigate(['experience']);
      },err =>{
        window.alert("Error al modificar experiencia");
        this.router.navigate(['experience']);
      }
    )
  }
}
