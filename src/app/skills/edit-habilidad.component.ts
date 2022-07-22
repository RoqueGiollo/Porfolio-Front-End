import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Habilidad } from '../model/habilidad';
import { SHabilidadService } from '../service/s-habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habi : Habilidad = null;
  
  constructor(private sHabilidad: SHabilidadService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.ditail(id).subscribe(
      data=>{
        this.habi = data;
      },err =>{
        window.alert("Error al modificar Habilidad");
        this.router.navigate(['skills']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.update(id, this.habi).subscribe(
      data=>{
        window.alert("Habilidad modificada");
        this.router.navigate(['skills']);
      },err =>{
        window.alert("Error al modificar Habilidad");
        this.router.navigate(['skills']);
      }
    )
  }

}