import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  facesnap1!: FaceSnap;
  facesnap2!: FaceSnap;
  facesnap3!: FaceSnap;

  ngOnInit(): void {
      
    this.facesnap1 = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit',
      new Date(),
      8,
      'https://picsum.photos/300/150?random=1'
    );

    this.facesnap2 = new FaceSnap(
      'Snap 2',
      'Ceci est un autre snap',
      new Date(),
      8,
      'https://picsum.photos/300/150?random=2'
    );

    this.facesnap3 = new FaceSnap(
      'Snap 3',
      'Ceci est aussi un snap',
      new Date(),
      8,
      'https://picsum.photos/300/150?random=3'
    );
  }
}
