import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { interval, map, filter, Observable, tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet,
    NgFor,
    HttpClientModule,
    CoreModule,
    FaceSnapsModule,
    LandingPageModule
  ],
  providers : [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  interval$!: Observable<any>

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
