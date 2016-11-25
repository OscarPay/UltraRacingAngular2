/**
 * Created by Oscar on 21/11/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <car-parts></car-parts>`
})
export class AppComponent {
    title = 'Ultra Racing';
}