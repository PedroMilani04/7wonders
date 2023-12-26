import { Routes } from '@angular/router';
import { WondersComponent } from './components/wonders/wonders.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

export const routes: Routes = [
    { path: '', component: MainpageComponent },
    { path: 'wonders', component: WondersComponent }

];
