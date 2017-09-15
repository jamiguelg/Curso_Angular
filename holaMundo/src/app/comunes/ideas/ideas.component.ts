import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  public ideas;
  public nuevaIdea: string;
  public mostrarIdeas;
  constructor() { }

  ngOnInit() {
    this.mostrarIdeas = false;
    this.ideas = [];
    this.nuevaIdea = "";
  }

  addIdea() {
    this.ideas.push(this.nuevaIdea);
  }

}
