import { Component, OnInit } from '@angular/core';
import { Acerca } from '../model/acerca';
import { SAcercaService } from '../service/s-acerca.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  acer: Acerca[] = [];

  constructor(private sAcerca:SAcercaService,private tokenService: TokenService) { }

  isLogged = false;

    ngOnInit(): void {
    this.cargarAcerca();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  cargarAcerca():void{
    this.sAcerca.lista().subscribe(data => {this.acer = data})
  }
}