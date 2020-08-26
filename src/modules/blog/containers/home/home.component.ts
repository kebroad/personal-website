import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { AuthUtilsService } from '@modules/auth/services';
import { Post } from '@modules/blog/models';
import { BlogService } from '@modules/blog/services';
import { Observable, Subscription } from 'rxjs';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
    selector: 'sb-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
    animations: [
        trigger('list1', [
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
                transform: 'translateY(100px)',
                opacity: 0
              }))
            ])
          ]),
    ]
})
export class HomeComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    isLoggedIn = false;

    posts$!: Observable<Post[]>;
    constructor(
        private blogService: BlogService,
        private authUtilsService: AuthUtilsService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}
    ngOnInit() {
        this.posts$ = this.blogService.getPosts$();

        this.subscription.add(
            this.authUtilsService.isLoggedIn$().subscribe(isLoggedIn => {
                this.isLoggedIn = isLoggedIn;
                this.changeDetectorRef.detectChanges();
            })
        );
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
