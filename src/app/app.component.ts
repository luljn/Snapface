import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import * as fr from '@angular/common/locales/fr';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet, 
    HeaderComponent, 
    FaceSnapListComponent, 
    CommonModule, 
    NgFor
  ],
  providers : [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  interval$!: Observable<number>

  constructor(){

    registerLocaleData(fr.default);
  }

  ngOnInit(): void {

    this.interval$ = interval(1000);
  }
}
