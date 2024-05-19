import { Component, OnInit, Input } from '@angular/core';
import { NgIf, NgStyle, NgClass, UpperCasePipe, DatePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsServices } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [ NgIf, NgStyle, NgClass, UpperCasePipe, DatePipe ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService : FaceSnapsServices,
              private router: Router){}

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

  onViewFaceSnap(): void{

    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
