import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsServices } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [ FaceSnapComponent ,NgFor ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  facesnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsServices) {}

  ngOnInit(): void {
      
    this.facesnaps = this.faceSnapsService.getAllFaceSnaps();
  }
}
