import { Component, OnInit, Input } from '@angular/core';
import { NgIf, NgStyle, NgClass } from '@angular/common';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [ NgIf, NgStyle, NgClass ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  buttonText!: string;

  ngOnInit(): void {
      
    this.snapped = false;
    this.buttonText = 'Oh Snap !'
  }

  onAddOrRemoveSnap(){

    if(this.snapped == true){

      this.faceSnap.snaps--;
      this.snapped = false;
      this.buttonText = 'Oh Snap !';
    }

    else {

      this.faceSnap.snaps++;
      this.snapped = true;
      this.buttonText = 'Oups UnSnap !'
    }
  }
}
