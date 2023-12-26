import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  implements OnInit{
 skills:Skill[]=[
  {
    name:'Angular',
    level:'Intermediate',
    rating:75,
  },
  {
    name:'MVC',
    level:'Intermediate',
    rating:70,
  },
  {
    name:'MsSQL',
    level:'Intermediate',
    rating:80,
  },
  {
    name:'Postgress',
    level:'Intermediate',
    rating:65,
  },
  {
    name:'Dotnet Core,Asp .Net',
    level:'Intermediate',
    rating:70,
  },
  {
    name:'c#',
    level:'Intermediate',
    rating:75,
  },
  {
    name:'HTML CSS JS JQ',
    level:'Intermediate',
    rating:90,
  },
  {
    name:'GIT',
    level:'Intermediate',
    rating:75,
  },
 ]


constructor(){}
ngOnInit(): void {
  
}
}
