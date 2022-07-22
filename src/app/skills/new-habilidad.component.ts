import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../model/habilidad';
import { ActivatedRoute, Router  } from '@angular/router';
import { SHabilidadService } from '../service/s-habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombreH: string = '';
  
  constructor(private sHabilidad: SHabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habi = new Habilidad(this.nombreH);
    this.sHabilidad.save(habi).subscribe(data=>{
      window.alert("Habilidad anadida");
      this.router.navigate(['skills'])
      //window.location.reload();

    }, err =>{
      window.alert("Fallo");
      this.router.navigate(['skills'])
     //window.location.replace('/#experience') 
    })
  }
}