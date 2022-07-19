import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

//aboutText: string = 
//"Soy una persona que siempre fue apasionada por la tecnologia y la ciencia, esto me llevo a moverme en el rugbro desde joven. En principio realizaba reparacion de pc y comercializacion de componentes, luego sume redes. En estos momentos estoy estudiando Full Stack jr luego de haber ejercido un tiempo en ventas."
  constructor() { }

  ngOnInit(): void {
  }
  //getVal(value: string){   
  //  this.aboutText=value 
  
  //}
}
