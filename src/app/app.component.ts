import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  facesnap1!: FaceSnap;
  facesnap2!: FaceSnap;
  facesnap3!: FaceSnap;

  ngOnInit(): void {
      
    this.facesnap1 = {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit',
      creationDate:new Date(),
      snaps: 8,
      imageUrl: 'https://picsum.photos/300/150?random=1',
      location: 'Belfort'
    };

    this.facesnap2 = {
      title: 'Snap 2',
      description: 'Ceci est un autre snap',
      creationDate: new Date(),
      snaps: 8,
      imageUrl: 'https://picsum.photos/300/150?random=2',
      location: 'Mulhouse'
    };

    this.facesnap3 = {
      title: 'Snap 3',
      description: 'Ceci est aussi un snap',
      creationDate: new Date(),
      snaps: 8,
      imageUrl: 'https://picsum.photos/300/150?random=3'
    };
  }
}
