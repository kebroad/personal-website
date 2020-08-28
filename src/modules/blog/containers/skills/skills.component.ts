import { Component, OnInit } from '@angular/core';
import { SkillSet } from '@modules/blog/models/skillset.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'sb-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('moveUp', [
        state('in', style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateY(100px)'
          }),
          animate(300)
        ]),
        transition('* => void', [
          animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ]),
      trigger('moveIn', [
        state('in', style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
        transition('void => *', [
          style({
            opacity: 0,
          }),
          animate(300)
        ]),
        transition('* => void', [
          animate(300, style({
            opacity: 1
          }))
        ])
      ]),

]
})
export class SkillsComponent implements OnInit {
  
  constructor() { }
  skillSets : SkillSet[] = [
    {
      skillSetName: "IT",
      skillList: ["Microsoft Azure", "Azure DevOps", "Jenkins", "Kubernetes", "Openshift", "Docker", "Vagrant","Windows", "Linux", "APIs", "Serverless"]
    },
    {
      skillSetName: "Languages",
      skillList: ["C++", "JavaScript", "Python", "TypeScript", "C", "Powershell", "Dart", "Bash", "Assembly", "Ruby", "Latex" ]
    },
    {
      skillSetName: "Microcontroller Experience",
      skillList: ["STM32 Series", "NRF52 Series", "ATMega Series", "Arduino Uno/Mega"]
    },
    {
      skillSetName: "Libraries & Frameworks",
      skillList: ["Angular", "CSS", "OpenGL", "Flutter"]
    },
    {
      skillSetName: "Instrumentation",
      skillList:  ["PCB Mill", "Oscilloscope", "Soldering", "Reflowing", "3D Printing"]
    }


  ]
  ngOnInit(): void {
  }

}
