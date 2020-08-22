import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'sb-layout-blog',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-blog.component.html',
    styleUrls: ['layout-blog.component.scss'],
})

export class LayoutBlogComponent implements OnInit {
    @Input() backgroundImage!: string;
    safeBackgroudImage!: SafeStyle;
    constructor(private domSanitizer: DomSanitizer) {}
    ngOnInit() {
        this.safeBackgroudImage = this.domSanitizer.bypassSecurityTrustStyle(this.backgroundImage);
    }
}
