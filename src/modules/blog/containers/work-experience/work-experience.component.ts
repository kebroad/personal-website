import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';


@Component({
  selector: 'sb-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  animations: [
    trigger('shiftRight', [
        state('in', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100px)'
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
      trigger('shiftLeft', [
        state('in', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(100px)'
          }),
          animate(300)
        ]),
        transition('* => void', [
          animate(300, style({
            transform: 'translateX(-100px)',
            opacity: 0
          }))
        ])
      ]),
]
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
