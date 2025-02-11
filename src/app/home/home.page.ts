import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExamenService } from '../examen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  quote: any;
  author: any;

  constructor(private examenservice: ExamenService) {}

  n1 = new FormControl('');
  fecha = new FormControl('');
  n2 = new FormControl('');
  n3 = new FormControl('');
  prota = new FormControl('');

  info: {n1:string, fecha:string, n2:string, n3:string, prota:string,}[]=[];

  showInfo(){
    if(this.n1.value && this.fecha.value && this.n2.value && this.n3.value && this.prota.value)
    {
      const informacion = {
        n1:this.n1.value,
        fecha:this.fecha.value,
        n2:this.n2.value,
        n3:this.n3.value,
        prota:this.prota.value
      }
      this.info.push(informacion);
      this.fecha.setValue('');
      this.n1.setValue('');
      this.n2.setValue('');
      this.n3.setValue('');
      this.prota.setValue('');
    } else {
      alert('Faltan valores por seleccionar');
    }
  }

  ngOnInit(){
    this.examenservice.getQuote().subscribe((data) => {
      this.quote = data;
    })

    this.examenservice.getAuthor().subscribe((data) => {
      this.author = data;
    })
  }
}
