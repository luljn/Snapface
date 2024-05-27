import { Component, OnInit } from '@angular/core';
import { NgIf, NgStyle, NgClass, UpperCasePipe, DatePipe, AsyncPipe } from '@angular/common';
import { FaceSnap } from '../core/models/face-snap.models';
import { FaceSnapsServices } from '../core/services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [ NgIf, NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink, AsyncPipe ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>

  snapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService : FaceSnapsServices,
              private route: ActivatedRoute){}

  ngOnInit(): void {
      
    this.snapped = false;
    this.buttonText = 'Oh Snap !'
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onAddOrRemoveSnap(faceSnapId: number){

    if(this.snapped == true){

      this.faceSnap$ = this.faceSnapsService.snapOrUnsnapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.snapped = false;
          this.buttonText = 'Oh Snap !';
        })
      );
    }

    else {

      this.faceSnap$ = this.faceSnapsService.snapOrUnsnapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.snapped = true;
          this.buttonText = 'Oups UnSnap !';
        })
      );
    }
  }
}
