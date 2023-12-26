import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myData:string[][]=[
    ['Name', 'Ashwani Dwivedi'],
    ['DOB', '01/01/1999'],
    ['Work Exp', '25 Year'],
    ['Education', 'B.Tech (2020)'],
    ['Interests', 'Fitness'],
  ];

  aboutMe:string[]=[
    'Hi i am a Software Engineer with 2.5 years of experience in software industry.',
    'Worked as Jr. Developer in Harbour and Hills for various technologies (.net, Angular, SQL).',
    'Delivered all product withing deadlines.Always eager to learn new technologies.',
    'Currently ,Working as Jr Software Developer of Harbour and Hills',
  ];

  constructor(){
  }

  ngOnInit(): void {
    
  }
}
