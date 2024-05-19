import { Component, OnInit, Input } from '@angular/core';
import { NgIf, NgStyle, NgClass, UpperCasePipe, DatePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsServices } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [ NgIf, NgStyle, NgClass, UpperCasePipe, DatePipe ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService : FaceSnapsServices){}

  ngOnInit(): void {
      
    this.snapped = false;
    this.buttonText = 'Oh Snap !'
  }

  onAddOrRemoveSnap(){

    if(this.snapped == true){

      this.faceSnapsService.snapOrUnsnapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapped = false;
      this.buttonText = 'Oh Snap !';
    }

    else {

      this.faceSnapsService.snapOrUnsnapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapped = true;
      this.buttonText = 'Oups UnSnap !'
    }
  }
}
