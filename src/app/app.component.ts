import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, CommonModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  facesnaps!: FaceSnap[];

  ngOnInit(): void {
      
    this.facesnaps = [ 
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        creationDate:new Date(),
        snaps: 8,
        imageUrl: 'https://picsum.photos/300/150?random=1',
        location: 'Belfort'
      },

      {
        title: 'Snap 2',
        description: 'Ceci est un autre snap',
        creationDate: new Date(),
        snaps: 8,
        imageUrl: 'https://picsum.photos/300/150?random=2',
        location: 'Mulhouse'
      },

      {
        title: 'Snap 3',
        description: 'Ceci est aussi un snap',
        creationDate: new Date(),
        snaps: 8,
        imageUrl: 'https://picsum.photos/300/150?random=3'
      },
    ]
  }
}
