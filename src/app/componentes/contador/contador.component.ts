import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {

  acumulador:number = 0;

  sumarUno(){
    this.acumulador = this.acumulador+1;
  }

  reset(){
    this.acumulador = 0;
  }
}
