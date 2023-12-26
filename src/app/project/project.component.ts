import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
project:Project[]=[
  {
  title:'Online Web Portal',
  technologies:'Dotnet Core,Angular(14,15),Postgress',
  description:[
    'Worked as Jr. Developer to develop web application are powered by .net core and Angular',
    'Build a windows service the can be use to send data to third party app to get data.',
    'Part of team to expand the application'
  ],
  },
  {
    title:'Wirease Virtual Banking Application',
    technologies:'Dotnet Core,Angular(14,15),MsSql',
    description:[
      'Worked as Jr. Developer to develop web application are powered by .net core and Angular',
      'Build a windows service the can be use to send data to third party app to get data.',
      'Part of team to expand the application',
    ],
    },

    {
      title:'Online Banking Application',
      technologies:'Asp.net, MVC, MsSql',
      description:[
        'Worked as Trainee Software Engineer to develop web application are powered by Asp.net  and MVC',
        'Build a windows service the can be use to send data to third party app to get data.',
        'Part of team to expand the application',
      ],
      },
    {
      title:'Messaging Application',
      technologies:'Dotnet Core,Angular(14,15),MsSql',
      description:[
        'Worked as Indiviual to develop web application are powered by .net core and Angular',
        'Build a Singnal R service the can be use to send data to third party app to get data.',
        'Expand the applicaton to create my account and public user',
      ],
      },
  
]

  constructor(){}

  ngOnInit(): void {
    
  }

}
