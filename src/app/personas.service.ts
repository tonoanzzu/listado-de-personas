import {Persona} from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonasService{
  personas: Persona[]= [
   new Persona("Juan", "Perez"),
   new Persona("Laura","Juarez")];

   constructor(private LoggingService: LoggingService){}

   agregarPersona(persona:Persona){
    this.LoggingService.enviarMensajeAConsola("agregamos persona: " +persona.nombre)

    this.personas.push(persona)
  }
}