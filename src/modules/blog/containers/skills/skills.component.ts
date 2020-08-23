import { Component, OnInit } from '@angular/core';
import { SkillSet } from '@modules/blog/models/skillset.model';

@Component({
  selector: 'sb-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  constructor() { }
  skillSets : SkillSet[] = [
    {
      skillSetName: "IT",
      skillList: ["Microsoft Azure", "Azure DevOps", "Jenkins", "Kubernetes", "Openshift", "Docker"]
    },
    {
      skillSetName: "Languages",
      skillList: ["C++", "JavaScript", "Python", "TypeScript", "C", "Powershell", "Bash", "Ruby" ]
    },
    {
      skillSetName: "Microcontroller Experience",
      skillList: ["STM32 Series", "NRF52 Series", "ATMega Series", "Arduino Uno/Mega"]
    },
    {
      skillSetName: "Libraries & Frameworks",
      skillList: ["Angular", "CSS", "OpenGL"]
    },
    {
      skillSetName: "Instrumentation",
      skillList:  ["PCB Mill", "Oscilloscope", "Soldering", "Reflowing", "Photolithography", "3D Printing"]
    }


  ]
  ngOnInit(): void {
  }

}
