import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-expercience',
  templateUrl: './work-expercience.component.html',
  styleUrls: ['./work-expercience.component.css']
})
export class WorkExpercienceComponent implements OnInit {

  workexp: WorkExperience[] = [
    
    {
      role: 'Jr Software Developer',
      company: 'Harbour & Hills Financial',
      duration: 'April 2023 -Currently Working',
      description: [
        'Worked with multiple team devalop desktop and web application',
        'Worked on different technologies sa (Dotnet Core, MVC, Angular(15,16) ,MsSQL, Postgress, Git)'
      ],
    },
    {
      role: 'Trainee Software Engineer',
      company: 'Harbour & Hills Financial',
      duration: 'Aug 2021 -March 2023',
      description: [
        'Worked with multiple team devalop desktop and web application',
        'Worked on different technologies sa (Asp.net, MVC, MsSQL, Angular(14), Dotnet Core)'
      ],
    },
    {
      role: 'Intern(System Enginner)',
      company: 'Telecommunication Engineering Centre,Government agency(New Delhi)',
      duration: 'Jan 2021 -Aug 2021',
      description: [
        'Worked with multiple team devalop desktop and web application',
        'Worked on different technologies sa (Dotnet,Network Domain)'
      ],
    },
  ]
  constructor() {


  }

  ngOnInit(): void {

  }
}
