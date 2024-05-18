import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import * as fr from '@angular/common/locales/fr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, FaceSnapListComponent,CommonModule, NgFor],
  providers : [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  constructor(){

    registerLocaleData(fr.default);
  }

  ngOnInit(): void {}
}
