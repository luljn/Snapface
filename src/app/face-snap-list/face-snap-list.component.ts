import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [ FaceSnapComponent ,NgFor ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  facesnaps!: FaceSnap[];

  ngOnInit(): void {
      
    this.facesnaps = [ 
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        creationDate:new Date(),
        snaps: 380,
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
