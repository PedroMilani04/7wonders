import { Component } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
  ngOnInit() {
    AOS.init();
  }
}
