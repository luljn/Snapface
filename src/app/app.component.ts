import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import * as fr from '@angular/common/locales/fr';
import { interval, map, filter, Observable, tap } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet, 
    HeaderComponent, 
    FaceSnapListComponent, 
    CommonModule, 
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers : [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  interval$!: Observable<any>

  constructor(){

    registerLocaleData(fr.default);
  }

  ngOnInit(): void {

    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? 
        `Je suis ${value} et je suis pair` :
        `Je suis ${value} et je suis impair`
      ),
      tap(text => this.logger(text))
    );
  }

  logger(text: string): void{

    console.log(`Log : ${text}`);
  }
}
