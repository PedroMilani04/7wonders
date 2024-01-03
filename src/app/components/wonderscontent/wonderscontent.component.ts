import { Component } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-wonderscontent',
  standalone: true,
  imports: [],
  templateUrl: './wonderscontent.component.html',
  styleUrl: './wonderscontent.component.css'
})
export class WonderscontentComponent {
  ngOnInit() {
    AOS.init();
  }

  scrollToNextWonder() {
    const wonders = document.querySelectorAll('.container');
    const currentScroll = window.scrollY;
    let nextWonderTop = Infinity;

    // Find the top position of the next wonder
    wonders.forEach(wonder => {
        const rect = wonder.getBoundingClientRect();
        const wonderTop = rect.top + window.scrollY;
        if (wonderTop > currentScroll && wonderTop < nextWonderTop) {
            nextWonderTop = wonderTop;
        }
    });

    // Scroll smoothly to the next wonder
    window.scrollTo({
        top: nextWonderTop,
        behavior: 'smooth'
    });
}

  scrollToPrevWonder() {
    const wonders = document.querySelectorAll('.container');
    const currentScroll = window.scrollY;
    let prevWonderTop = -Infinity;

    // Find the top position of the previous wonder
    wonders.forEach(wonder => {
      const rect = wonder.getBoundingClientRect();
      const wonderTop = rect.top + window.scrollY;
      if (wonderTop < currentScroll && wonderTop > prevWonderTop) {
        prevWonderTop = wonderTop;
      }
    });

    // Scroll smoothly to the top position of the previous wonder
    window.scrollTo({
      top: prevWonderTop,
      behavior: 'smooth'
    });
  }
}
