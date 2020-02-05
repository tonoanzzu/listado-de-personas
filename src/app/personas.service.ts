import {Persona} from './persona.model';
export class PersonasService{
  personas: Persona[]= [
   new Persona("Juan", "Perez"),
   new Persona("Laura","Juarez")];

   agregarPersona(persona:Persona){
    //this.LoggingService.enviarMensajeAConsola("agregamos al arreglo la nueva persona: " +persona.nombre)
    this.personas.push(persona)
  }
}