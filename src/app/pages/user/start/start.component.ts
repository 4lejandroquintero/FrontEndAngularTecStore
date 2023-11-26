import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  productoId:any;
  preguntas:any;
  puntosConseguidos = 0;
  respuestasCorrectas = 0;
  intentos = 0;
  productos:any;

  esEnviado = false;
  timer:any;

  constructor(
    private locationSt:LocationStrategy,
    private route:ActivatedRoute,
    private preguntaService:PreguntaService,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.prevenirElBotonDeRetroceso();
    this.productoId = this.route.snapshot.params['productoId'];
    console.log(this.productoId);
    this.cargarPreguntas();
  }

  cargarPreguntas(){
    this.preguntaService.listarPreguntasDelProductoParaLaPrueba(this.productoId).subscribe(
      (data:any) => {
        console.log(data);
        this.preguntas = data;

        this.timer = this.preguntas.length *2 * 60;

        this.preguntas.forEach((p:any) => {
          p['respuestaDada'] = '';
        })
        console.log(this.preguntas);
        this.iniciarTemporizador();
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar la pagina','error');
      }
    )
  }


  iniciarTemporizador(){
    let t = window.setInterval(() => {
      if(this.timer <= 0){
        this.evaluarProducto();
        clearInterval(t);
      }else{
        this.timer --;
      }
    },1000)
  }

  prevenirElBotonDeRetroceso(){
    history.pushState(null,null!,location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null,null!,location.href);
    })
  }

  enviarCompra(){
    Swal.fire({
      title: '¿Quieres enviar la compra?',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Enviar',
      icon:'info'
    }).then((e) => {
      if(e.isConfirmed){
        this.evaluarProducto();
      }
    })
  }

  evaluarProducto(){
    this.preguntaService.evaluarProducto(this.preguntas).subscribe(
      (data:any) => {
        console.log(data);
        this.puntosConseguidos = 5;
        this.respuestasCorrectas = 4;
        this.intentos = data.intentos;
        this.esEnviado = true;
      },
      (error) => {
        console.log(error);
      }
    )
    /*this.esEnviado = true;
    this.preguntas.forEach((p:any) => {
      if(p.respuestaDada == p.respuesta){
        this.respuestasCorrectas ++;
        let puntos = this.preguntas[0].examen.puntosMaximos/this.preguntas.length;
        this.puntosConseguidos += puntos;
      }

      if(p.respuestaDada.trim() != ''){
        this.intentos ++;
      }
    });

    console.log("Respuestas correctas : " + this.respuestasCorrectas);
    console.log("Puntos conseguidos : " + this.puntosConseguidos);
    console.log("Intentos : " + this.intentos);
    console.log(this.preguntas);*/
  }

  obtenerHoraFormateada(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} : min : ${ss} seg`;
  }

  imprimirPagina(){
    window.print();
  }
}
