import {Persona} from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
  personas: Persona[]= [
   new Persona("Juan", "Perez"),
   new Persona("Laura","Juarez")];

   saludar = new EventEmitter<number>();

   constructor(private LoggingService: LoggingService){}

   agregarPersona(persona:Persona){
    this.LoggingService.enviarMensajeAConsola("agregamos persona: " +persona.nombre)

    this.personas.push(persona)
  }
}