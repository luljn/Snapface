import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsServices } from '../services/face-snaps.service';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [ FaceSnapComponent ,NgFor ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  facesnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>

  constructor(private faceSnapsService: FaceSnapsServices) {}

  ngOnInit(): void {
    
    this.destroy$ = new Subject<boolean>();
    this.facesnaps = this.faceSnapsService.getAllFaceSnaps();
    
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(value => console.log(value))
    ).subscribe();
  }

  ngOnDestroy(): void {
      
    this.destroy$.next(true);
  }
}
