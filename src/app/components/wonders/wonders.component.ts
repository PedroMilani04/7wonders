import { Component } from '@angular/core';
import { WonderscontentComponent } from '../wonderscontent/wonderscontent.component';

@Component({
  selector: 'app-wonders',
  standalone: true,
  imports: [WonderscontentComponent],
  templateUrl: './wonders.component.html',
  styleUrl: './wonders.component.css'
})
export class WondersComponent {

}
