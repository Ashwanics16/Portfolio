import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      institute: 'Dr. A.P.J. Abdul Kalam Technical University',
      course: 'B Tech',
      duration: '2016-2020',
      score: '72%'
    },
    {
      institute: 'Dav Public Ser. Sec School',
      course: '12th',
      duration: '2015-2016',
      score: '61%'
    },
    {
      institute: 'Dav Public Ser. Sec School',
      course: 'SSC',
      duration: '2013-2013',
      score: '64%'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
