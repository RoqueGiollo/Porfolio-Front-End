import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acerca } from '../model/acerca';
import { SAcercaService } from '../service/s-acerca.service';

@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit {
  acer : Acerca = null;
  
  constructor(private sAcerca: SAcercaService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAcerca.ditail(id).subscribe(
      data=>{
        this.acer = data;
      },err =>{
        window.alert("Error al modificar Acerca");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAcerca.update(id, this.acer).subscribe(
      data=>{
        window.alert("Acerca modificada");
        this.router.navigate(['']);
      },err =>{
        window.alert("Error al modificar Acerca");
        this.router.navigate(['']);
      }
    )
  }

}