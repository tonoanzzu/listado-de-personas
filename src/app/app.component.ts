import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'listado de personas';
  personas: Persona[]= [];

  constructor(private LoggingService:LoggingService, private PersonasService: PersonasService) { }

  ngOnInit():void{
    this.personas = this.PersonasService.personas;

  }
  
  
  
}
